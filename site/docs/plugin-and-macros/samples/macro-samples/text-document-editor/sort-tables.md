# Sort tables

Automatically sorts table rows alphabetically or numerically based on the selected column.

> Please select the entire column by which you want the table to be sorted (alphabetically or numerically).
> The macro will only work correctly if the whole column is selected.

```ts
(function() {
    let isFirstRowIncluded = true;  // Set to false to exclude the first row (headers) from sorting

    let doc = Api.GetDocument();
    let pageIndex = doc.GetCurrentPage();
    let tables = doc.GetAllTablesOnPage(pageIndex);

    // Get the range of the user's selection in the document
    let selectedRange = doc.GetRangeBySelect();
    let selectedStart = selectedRange.GetStartPos();
    let selectedEnd = selectedRange.GetEndPos();
 
    // Helper function: Extract the prefix of a string to determine if it's numeric, alphabetic, or other
    function extractPrefix(s) {
        let numberMatch = s.match(/^(-?\d+)/); // Extract leading number from string
        if (numberMatch) {
            return { type: 'number', value: parseInt(numberMatch[0]) };
        }
        let alphaMatch = s.match(/^([a-zA-Z]+)/); // Extract leading letters from string
        if (alphaMatch) {
            return { type: 'alpha', value: alphaMatch[0] };
        }
        return { type: 'other', value: s };
    }

    // Helper function: Compare two strings based on their extracted prefixes
    function compareStrings(a, b) {
        let prefixA = extractPrefix(a);
        let prefixB = extractPrefix(b);
    
        if (prefixA.type === 'number' && prefixB.type === 'number') {
            if (prefixA.value !== prefixB.value) return prefixA.value - prefixB.value;
            return a.length - b.length;
        }
    
        if (prefixA.type === 'number') return -1;
        if (prefixB.type === 'number') return 1;
    
        if (prefixA.type === 'alpha' && prefixB.type === 'alpha') {
            return prefixA.value.localeCompare(prefixB.value);
        }
    
        return a.localeCompare(b);
    }

    // Helper function: Sort table rows by values in a specific column, starting from a given row index
    function sortRowsByColumn(table, colIndex, startRow) {
        let rowsArr = [];
        let rowNum = table.GetRowsCount();

        for (let rowIndex = startRow; rowIndex < rowNum; rowIndex++) {
            let row = table.GetRow(rowIndex);
            let cellVal = row.GetCell(colIndex).GetContent().GetText();
            rowsArr.push({ row, cellVal });
        }
        
        rowsArr.sort((a, b) => compareStrings(a.cellVal, b.cellVal));

        return rowsArr.map(item => item.row);
    }

    // Helper function: Find the index of the selected column based on the selection's start position
    function findSelectedColIndex(table, selectedStart) {
        let colNum = table.GetRow(0).GetCellsCount();
        for (let colIndex = 0; colIndex < colNum; colIndex++) {
            let cell = table.GetCell(0, colIndex);
            let cellRange = cell.GetContent().GetRange().GetStartPos();
            if (cellRange == selectedStart) {
                return colIndex;
            }
        }
        return -1;
    }

    // Loop through all tables on the current page to find the one that contains the selected column, then sort its rows
    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];
        let rowNum = table.GetRowsCount();
        let colNum = table.GetRow(0).GetCellsCount();
        let tableStart = table.GetCell(0, 0).GetContent().GetRange().GetStartPos();
        let tableEnd = table.GetCell(rowNum - 1, colNum - 1).GetContent().GetRange().GetEndPos();

        // Check if the selection is inside this table
        if (selectedStart >= tableStart && selectedEnd <= tableEnd) {
            let selectedColIndex = findSelectedColIndex(table, selectedStart);

            if (selectedColIndex !== -1) {
                let startRow = isFirstRowIncluded ? 0 : 1;

                let sortedRowsArr = sortRowsByColumn(table, selectedColIndex, startRow);

                let rowToRemove = isFirstRowIncluded ? 0 : 1;
                
                // Rebuild the table by adding sorted rows and removing the old ones
                for (let i = 0; i < sortedRowsArr.length; i++) {
                    let sortedRow = sortedRowsArr[i];
                    let newRow = table.AddRow();

                    for (let j = 0; j < colNum; j++) {
                        let sortedRowCellText = sortedRow.GetCell(j).GetContent().GetText().trim();
                        newRow.GetCell(j).GetContent().GetElement(0).AddText(sortedRowCellText);
                    }
                    table.GetRow(rowToRemove).Remove();
                }
            }
        }
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetCurrentPage](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentPage.md), [GetAllTablesOnPage](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllTablesOnPage.md), [GetRangeBySelect](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetStartPos](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetStartPos.md), [GetEndPos](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetEndPos.md), [GetRowsCount](../../../../office-api/usage-api/text-document-api/ApiTable/Methods/GetRowsCount.md), [GetRow](../../../../office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../../office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../../office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [GetCell](../../../../office-api/usage-api/text-document-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../../office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [GetRange](../../../../office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetRange.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetText.md), [AddRow](../../../../office-api/usage-api/text-document-api/ApiTable/Methods/AddRow.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [Remove](../../../../office-api/usage-api/text-document-api/ApiTableRow/Methods/Remove.md)

## Result

![SortTables](/assets/images/plugins/sort-tables.png#gh-light-mode-only)
![SortTables](/assets/images/plugins/sort-tables.dark.png#gh-dark-mode-only)