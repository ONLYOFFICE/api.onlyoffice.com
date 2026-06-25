---
hide_table_of_contents: true
description: 使用世界银行数据计算指标。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 计算世界银行指标

创建一个[异步自定义函数](../../guides/adding-custom-functions.md#asynchronous-functions)来计算特定年份的世界银行指标值。

可计算的指标包括：

| 指标代码 | 指标名称                   |
|----------------|-----------------------------------|
| NY.GDP.MKTP.CD | GDP（现价美元）                 |
| SP.POP.TOTL    | 总人口数                  |
| EN.ATM.CO2E.KT | CO₂ 排放量（千吨）                |
| EG.FEC.RNEW.ZS | 可再生能源所占百分比                |
| IT.NET.USER.ZS | 互联网用户所占百分比 - IT.NET.USER.ZS |

更多信息请参阅[世界银行文档](https://data.worldbank.org/indicator)。

```ts
//自定义函数:

(function () {
  /**
   * 计算世界银行指定年份的指标值
   * @customfunction
   * @param {string} country 国家 ISO-3 代码，如"TUR"
   * @param {string} indicator 指标代码，如"SP.POP.TOTL"
   * @param {number} year 四位年份，如 2024
   * @returns {any} 数值或 #N/A.
   *
   * @example =WB("TUR", "SP.POP.TOTL", 2024)
   */
  async function WB(country, indicator, year) {
    // 请求 URL（世界银行允许跨域）
    const url =
      `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}` +
      `?format=json&per_page=20000`;

    try {
      const r = await fetch(url);
      const [meta, data] = await r.json();

      // 查找指定年份的数据行
      const row = data.find((v) => v.date === year.toString());
      if (!row || row.value == null) return "#N/A";

      return row.value; // 返回 Promise 结果
    } catch (e) {
      return "#ERROR";
    }
  }

  // 注册函数使其成为表格公式
  Api.AddCustomFunction(WB);
})();

(function () {
    // 获取当前工作表
    let worksheet = Api.GetActiveSheet();

    // 在 A1 和 B1 单元格插入标签
    worksheet.GetRange("A1").SetValue("Country");
    worksheet.GetRange("B1").SetValue("GDP 2024");

    // 添加 ISO-3 格式的国家代码
    let countries = ["USA", "CHN", "JPN", "DEU", "IND", "GBR", "FRA", "ITA", "CAN"];
    for (let i = 0; i < countries.length; i++) {
      worksheet.GetRange("A" + (i + 2)).SetValue(countries[i]);
    }

    worksheet.FormatAsTable("A1:B10");

    // 插入每个国家的公式
    // 调用上述过程中注册的自定义函数‘WB’
    for (let i = 0; i < countries.length; i++) {
      let country = worksheet.GetRange("A" + (i + 2)).GetValue();
      worksheet.GetRange("B" + (i + 2)).SetValue(`=WB("${country}", "NY.GDP.MKTP.CD", 2024)`);
    }

    // 创建图表
    let chart = worksheet.AddChart("'Sheet1'!$A$1:$B$10", true, "bar", 2, 100 * 36000, 60 * 36000, 0, 0, 10, 0);
    chart.SetTitle("GDP 2024", 13);
})();
```

使用方法： [AddCustomFunction](../../../office-api/usage-api/spreadsheet-api/Api/Methods/AddCustomFunction.md), [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [FormatAsTable](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/FormatAsTable.md), [AddChart](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md), [SetTitle](../../../office-api/usage-api/spreadsheet-api/ApiChart/Methods/SetTitle.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/calculate-world-bank-indicator" dark />
