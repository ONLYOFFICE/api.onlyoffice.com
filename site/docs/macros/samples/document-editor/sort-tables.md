---
hide_table_of_contents: true
description: Sort table rows by column values.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Sort tables

Automatically sorts table rows alphabetically or numerically based on the selected column.

:::tip
Please select the entire column by which you want the table to be sorted.
The macro will only work correctly if the whole column is selected.
By default, the header row is excluded. Set `isFirstRowIncluded` to `true` in the code to include it.
:::

```ts
(function() {
    let isFirstRowIncluded = false;  // Set to true to include the header row in sorting

    let doc = Api.GetDocument();
    let pageIndex = doc.GetCurrentPage();
    let tables = doc.GetAllTablesOnPage(pageIndex);

    let selectedRange = doc.GetRangeBySelect();
    let selectedStart = selectedRange.GetStartPos();
    let selectedEnd = selectedRange.GetEndPos();

    // Compares two cell values: numerically if both are numbers, alphabetically otherwise
    function compareCells(a, b) {
        let numA = parseFloat(a);
        let numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        }
        return a.localeCompare(b);
    }

    // Collects and sorts rows by the specified column
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

    // Finds the index of the column that contains the selection start position
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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentPage.md), [GetAllTablesOnPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllTablesOnPage.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetStartPos](../../../office-api/usage-api/document-api/ApiRange/Methods/GetStartPos.md), [GetEndPos](../../../office-api/usage-api/document-api/ApiRange/Methods/GetEndPos.md), [GetRowsCount](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](../../../office-api/usage-api/document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [GetCell](../../../office-api/usage-api/document-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetRange](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetRange.md), [GetText](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetText.md), [AddRow](../../../office-api/usage-api/document-api/ApiTable/Methods/AddRow.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [Remove](../../../office-api/usage-api/document-api/ApiTableRow/Methods/Remove.md)

## Result

<Video src="/assets/video/macros/document-editor/sort-tables" dark />
