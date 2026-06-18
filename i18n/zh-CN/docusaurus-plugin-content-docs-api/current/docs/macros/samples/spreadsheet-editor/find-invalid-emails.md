---
hide_table_of_contents: true
description: 查找并突出显示单元格中的无效电子邮件地址。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 查找无效邮箱

检测并高亮显示指定列或整个工作表中的无效邮箱地址。

```ts
(function () {
    let sheet = Api.GetActiveSheet();
    let range = sheet.GetUsedRange();

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let red = Api.CreateColorFromRGB(255, 163, 163);
    // 指定列索引（从 0 开始），或保留为 null 以检查整个工作表。
    let colIndex = 1;

    let numRows = range.GetRows().Count;
    let numCols = range.GetCols().Count;

    if (colIndex !== null) {
        for (let row = 0; row < numRows; row++) {
            let cell = sheet.GetRangeByNumber(row, colIndex);
            let value = cell.GetValue();

            if (!value) {
                continue;
            }

            let trimmedValue = value.toString().trim();
            if (trimmedValue && !emailRegex.test(trimmedValue)) {
                cell.SetFillColor(red);
            }
        }
    } else {
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                let cell = sheet.GetRangeByNumber(row, col);
                let value = cell.GetValue();

                if (!value) {
                    continue;
                }

                let trimmedValue = value.toString().trim();
                if (trimmedValue && !emailRegex.test(trimmedValue)) {
                    cell.SetFillColor(red);
                }
            }
        }
    }
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [CreateColorFromRGB](../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [GetRows](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRows.md), [GetCols](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCols.md), [GetRangeByNumber](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/find-invalid-emails" dark />
