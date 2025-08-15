# # 查找公司徽标

通过使用 [API Ninjas](https://api-ninjas.com) 提供的 [Logo API](https://api-ninjas.com/api/logo)，在整个表格中搜索公司徽标。

> 要使用此宏，您需要从 API Ninjas 获取您自己的 API 密钥。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function() {
    // 获取当前工作表
    let worksheet = Api.GetActiveSheet();
    // 获取当前选中的单元格区域
    let selectedRange = Api.GetSelection();
    // 定义要插入特定列的值映射
    let valuesToInsert = {
        "name": "B",
        "ticker": "C",
        "image": "D"
    };
    // 遍历要插入的值，并填充空单元格
    for (let value in valuesToInsert) {
        let cell = worksheet.GetRange(valuesToInsert[value] + "1");
        if (!cell.GetValue()) cell.SetValue(value);
    } 
    // 遍历选中区域中的每个单元格
    selectedRange.ForEach(function (cell) {
        let value = cell.GetValue();
        if (value) {
            // 发起 AJAX 请求，根据单元格值从 API 获取数据
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/logo?name=' + value,
                headers: { 'X-Api-Key': 'yourAPIkey' },
                contentType: 'application/json',
                success: function(result) {
                    // 遍历 API 返回的数据并填充到特定列中
                    for (let i = 0; i < result.length; i++) {
                        let data = result[i];
                        let currentRow = cell.GetRow() + i - 1;
                        // 将数据填入指定列并自动调整列宽
                        worksheet.GetRangeByNumber(currentRow, 1).SetValue(data.name);
                        worksheet.GetRangeByNumber(currentRow, 1).AutoFit(false, true);
                        worksheet.GetRangeByNumber(currentRow, 2).SetValue(data.ticker);
                        worksheet.GetRangeByNumber(currentRow, 2).AutoFit(false, true);
                        worksheet.GetRangeByNumber(currentRow, 3).SetValue(data.image);
                        worksheet.GetRangeByNumber(currentRow, 3).AutoFit(false, true);
                    }
                },
                error: function ajaxError(jqXHR) {
                    console.error('错误: ', jqXHR.responseText);
                }
            });
        }
    });
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [AutoFit](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetRow](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md)

## 结果

<!-- imgpath -->

![Find Company Logos](/assets/images/plugins/find-company-logos.png#gh-light-mode-only)![Find Company Logos](/assets/images/plugins/find-company-logos.dark.png#gh-dark-mode-only)
