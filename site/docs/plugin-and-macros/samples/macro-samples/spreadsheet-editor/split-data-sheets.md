# Split data sheets

This macro splits large sheets containing extensive datasets into multiple sheets if they exceed a specified row limit.

```ts
/* In each new sheet, the first row from the original sheet is added at the top as a header (assuming the first row contains the column headers).
*/

(function () {
    
    let maximumRows = 4;  // Maximum number of rows per new sheet
     
    let worksheet = Api.GetActiveSheet();
    let rangeVal = worksheet.GetUsedRange().GetValue();
    let totalRows = rangeVal.length;
    let totalCols = rangeVal[0].length;

    // Copies the value and basic formatting from one cell to another
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

    // Copies a range of rows from the source sheet to the new sheet
    function copyDataToNewSheet(startRow, endRow, newSheet, startNewRow) {
        for (let row = startRow; row < endRow; row++) {
            for (let col = 0; col < totalCols; col++) {
                let range = worksheet.GetRangeByNumber(row, col);
                let newCell = newSheet.GetRangeByNumber(row - startRow + startNewRow, col);
                copyCellData(range, newCell);
            }
        }
    }

    // Copies the header row (first row) to the top of a new sheet
    function copyHeaderToNewSheet(newSheet) {
        for (let col = 0; col < totalCols; col++) {
            let range = worksheet.GetRangeByNumber(0, col);
            let newCell = newSheet.GetRangeByNumber(0, col);
            copyCellData(range, newCell);
        }
    }

    // Splits the data into multiple sheets based on the maximum row limit and adds headers to each sheet except the first one
    function splitDataIntoSheets(maxRows) {
        let numSheets = Math.ceil(totalRows / maxRows); // Calculate the number of sheets needed
        let firstRowNewSheet = 0;

        for (let i = 0; i < numSheets; i++) {
            let newSheetName = "SheetNo_" + (i + 1);
            let newSheet = Api.AddSheet(newSheetName);
            newSheet = Api.GetSheet(newSheetName);

            let startRow = i * maxRows;
            let endRow = Math.min((i + 1) * maxRows, totalRows);

            if (i > 0) {
                // Add the header row only for sheets after the first one
                copyHeaderToNewSheet(newSheet);
                firstRowNewSheet = 1;
            }
            
            // Copy the appropriate slice of data into the new sheet
            copyDataToNewSheet(startRow, endRow, newSheet, firstRowNewSheet);
        }

        console.log(`Data has been split into ${numSheets} sheets.`);
    }

    splitDataIntoSheets(maximumRows);

})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCharacters](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCharacters.md), [GetFont](../../../../office-api/usage-api/spreadsheet-api/ApiCharacters/Methods/GetFont.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [SetFontName](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontName.md), [GetName](../../../../office-api/usage-api/spreadsheet-api/ApiName/Methods/GetName.md), [SetFontSize](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontSize.md), [GetSize](../../../../office-api/usage-api/spreadsheet-api/ApiFont/Methods/GetSize.md), [AutoFit](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md), [GetBold](../../../../office-api/usage-api/spreadsheet-api/ApiRun/Methods/GetBold.md), [SetBold](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md), [GetItalic](../../../../office-api/usage-api/spreadsheet-api/ApiRun/Methods/GetItalic.md), [SetItalic](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetItalic.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [AddSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/AddSheet.md), [GetSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md)

## Result

![SplitDataSheets](/assets/images/plugins/split-data-sheets.png#gh-light-mode-only)
![SplitDataSheets](/assets/images/plugins/split-data-sheets.dark.png#gh-dark-mode-only)