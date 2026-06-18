---
hide_table_of_contents: true
description: 按列值对表格行进行排序。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 表格排序

根据选定列自动按字母或数字顺序对表格行进行排序。

:::tip
请选择作为排序依据的一整列。
只有完整选中列时，宏才能正确工作。
:::

```ts
(function() {
    let isFirstRowIncluded = false;  // 设置为 true 可将首行包含在排序中

    let doc = Api.GetDocument();
    let pageIndex = doc.GetCurrentPage();
    let tables = doc.GetAllTablesOnPage(pageIndex);

    let selectedRange = doc.GetRangeBySelect();
    let selectedStart = selectedRange.GetStartPos();
    let selectedEnd = selectedRange.GetEndPos();

    // 比较两个单元格值：如果都是数字则按数字排序，否则按字母排序
    function compareCells(a, b) {
        let numA = parseFloat(a);
        let numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        }
        return a.localeCompare(b);
    }

    // 按指定列收集并排序行
    function sortRowsByColumn(table, colIndex, startRow) {
        let rowsArr = [];
        let rowNum = table.GetRowsCount();

        for (let rowIndex = startRow; rowIndex < rowNum; rowIndex++) {
            let row = table.GetRow(rowIndex);
            let cellVal = row.GetCell(colIndex).GetContent().GetText();
            rowsArr.push({ row, cellVal });
        }
        
        rowsArr.sort((a, b) => compareCells(a.cellVal, b.cellVal));
        return rowsArr.map(item => item.row);
    }

    // 查找包含选区起始位置的列索引
    function findSelectedColIndex(table, selectedStart) {
        let rowNum = table.GetRowsCount();
        let colNum = table.GetRow(0).GetCellsCount();
        for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
            for (let colIndex = 0; colIndex < colNum; colIndex++) {
                let cell = table.GetCell(rowIndex, colIndex);
                let cellStart = cell.GetContent().GetRange().GetStartPos();
                let cellEnd = cell.GetContent().GetRange().GetEndPos();
                if (selectedStart >= cellStart && selectedStart <= cellEnd) {
                    return colIndex;
                }
            }
        }
        return -1;
    }

    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];
        let rowNum = table.GetRowsCount();
        let colNum = table.GetRow(0).GetCellsCount();
        let tableStart = table.GetCell(0, 0).GetContent().GetRange().GetStartPos();
        let tableEnd = table.GetCell(rowNum - 1, colNum - 1).GetContent().GetRange().GetEndPos();

        if (selectedStart >= tableStart && selectedEnd <= tableEnd) {
            let selectedColIndex = findSelectedColIndex(table, selectedStart);

            if (selectedColIndex !== -1) {
                let startRow = isFirstRowIncluded ? 0 : 1;
                let sortedRowsArr = sortRowsByColumn(table, selectedColIndex, startRow);
                let rowToRemove = isFirstRowIncluded ? 0 : 1;
                
                for (let k = 0; k < sortedRowsArr.length; k++) {
                    let sortedRow = sortedRowsArr[k];
                    let newRow = table.AddRow();

                    for (let j = 0; j < colNum; j++) {
                        let text = sortedRow.GetCell(j).GetContent().GetText().trim();
                        newRow.GetCell(j).GetContent().GetElement(0).AddText(text);
                    }
                    table.GetRow(rowToRemove).Remove();
                }
            }
        }
    }
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentPage.md), [GetAllTablesOnPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllTablesOnPage.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetStartPos](../../../office-api/usage-api/document-api/ApiRange/Methods/GetStartPos.md), [GetEndPos](../../../office-api/usage-api/document-api/ApiRange/Methods/GetEndPos.md), [GetRowsCount](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [GetCell](../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetRange](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetRange.md), [GetText](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetText.md), [AddRow](../../../office-api/usage-api/document-api/ApiTable/Methods/AddRow.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [Remove](../../../office-api/usage-api/document-api/ApiTableRow/Methods/Remove.md)

## 结果

<Video src="/assets/video/macros/document-editor/sort-tables" dark />
