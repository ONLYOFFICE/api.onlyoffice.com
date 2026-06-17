---
hide_table_of_contents: true
description: 重新计算工作表中的所有公式。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 重新计算工作表数值

以一秒间隔重复重新计算工作表单元格的数值。

```ts
(function ()
{
    let timerId = setInterval(function(){
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
        let worksheet = Api.GetActiveSheet();
        worksheet.GetRange("F2").SetValue("Average");
        worksheet.GetRange("G2").SetValue("=AVERAGE(B2:B80)");
    }, 1000);
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/recalculate-worksheet-values" dark />
