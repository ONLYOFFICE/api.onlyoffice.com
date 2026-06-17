---
hide_table_of_contents: true
description: 按条件将数据拆分到不同的工作表。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 拆分数据工作表

当工作表数据量超过指定行数限制时，自动将其拆分为多个新工作表，以便高效管理大型数据集。

每个新工作表都会在顶部保留原始工作表的首行作为标题行（假设首行包含列标题）。

```ts
(function () {
    
    let maximumRows = 4;  // 每个新工作表允许的最大行数
     
    let worksheet = Api.GetActiveSheet();
    let rangeVal = worksheet.GetUsedRange().GetValue();
    let totalRows = rangeVal.length;
    let totalCols = rangeVal[0].length;

    // 复制单元格的值与基础格式 
    function copyCellData(range, newCell) {
        let value = range.GetValue();
        let font = range.GetCharacters(0, 2).GetFont();
        
        newCell.SetValue(value || " ");
        newCell.SetFontName(font.GetName());
        newCell.SetFontSize(font.GetSize());
        newCell.AutoFit(false, true);
        
        if (font.GetBold()) newCell.SetBold(true);
        if (font.GetItalic()) newCell.SetItalic(true);
    }

    // 将指定行范围的数据复制到目标工作表
    function copyDataToNewSheet(startRow, endRow, newSheet, startNewRow) {
        for (let row = startRow; row < endRow; row++) {
            for (let col = 0; col < totalCols; col++) {
                let range = worksheet.GetRangeByNumber(row, col);
                let newCell = newSheet.GetRangeByNumber(row - startRow + startNewRow, col);
                copyCellData(range, newCell);
            }
        }
    }

    // 将标题行（第一行）复制到目标工作表顶部
    function copyHeaderToNewSheet(newSheet) {
        for (let col = 0; col < totalCols; col++) {
            let range = worksheet.GetRangeByNumber(0, col);
            let newCell = newSheet.GetRangeByNumber(0, col);
            copyCellData(range, newCell);
        }
    }

    // 根据最大行数拆分数据并生成新工作表，并为除第一张工作表之外的每张工作表添加标题行
    function splitDataIntoSheets(maxRows) {
        let numSheets = Math.ceil(totalRows / maxRows); // 计算所需的工作表数量
        let firstRowNewSheet = 0;

        for (let i = 0; i < numSheets; i++) {
            let newSheetName = "SheetNo_" + (i + 1);
            let newSheet = Api.AddSheet(newSheetName);
            newSheet = Api.GetSheet(newSheetName);

            let startRow = i * maxRows;
            let endRow = Math.min((i + 1) * maxRows, totalRows);

            if (i > 0) {
                // 除第一个工作表外，为其他工作表添加标题行
                copyHeaderToNewSheet(newSheet);
                firstRowNewSheet = 1;
            }
            
            // 将对应的数据片段复制到新工作表中
            copyDataToNewSheet(startRow, endRow, newSheet, firstRowNewSheet);
        }
    }

    splitDataIntoSheets(maximumRows);

})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCharacters](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCharacters.md), [GetFont](../../../office-api/usage-api/spreadsheet-api/ApiCharacters/Methods/GetFont.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [SetFontName](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontName.md), [GetName](../../../office-api/usage-api/spreadsheet-api/ApiFont/Methods/GetName.md), [SetFontSize](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontSize.md), [GetSize](../../../office-api/usage-api/spreadsheet-api/ApiFont/Methods/GetSize.md), [AutoFit](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md), [GetBold](../../../office-api/usage-api/spreadsheet-api/ApiFont/Methods/GetBold.md), [SetBold](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md), [GetItalic](../../../office-api/usage-api/spreadsheet-api/ApiFont/Methods/GetItalic.md), [SetItalic](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetItalic.md), [GetRangeByNumber](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [AddSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/AddSheet.md), [GetSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/split-data-sheets" dark />
