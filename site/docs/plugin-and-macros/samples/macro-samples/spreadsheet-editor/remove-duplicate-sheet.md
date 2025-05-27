# Remove duplicate sheet

Identifies and removes duplicate sheets in the spreadsheet.

```ts
(function()
{
    let sheets = Api.GetSheets();
    let numSheets = sheets.length;

    // Helper function to compare the contents of two sheets
    function areSheetsEqual(sheet1, sheet2) {
        let rangeVal1 = sheet1.GetUsedRange().GetValue();
        let rangeVal2 = sheet2.GetUsedRange().GetValue();

        // Return false if the dimensions of the used ranges are different
        if (rangeVal1.length !== rangeVal2.length || rangeVal1[0].length !== rangeVal2[0].length) {
            return false;
        } else {
            // Compare each cell value in both sheets
            for (let row = 0; row < rangeVal1.length; row++) {
                for (let col = 0; col < rangeVal1[row].length; col++) {
                    if (sheet1.GetRangeByNumber(row, col).GetValue() !== sheet2.GetRangeByNumber(row, col).GetValue()) {
                        return false;
                    }
                }
            }
        }

        // Sheets are identical
        return true; 
    }

    // Compare each pair of sheets and remove duplicates
    for (let i = 0; i < numSheets; i++) {
        let sheet1 = sheets[i];
        for (let j = i + 1; j < numSheets; j++) {
            let sheet2 = sheets[j];

            // Delete the sheet if it is a duplicate
            if (areSheetsEqual(sheet1, sheet2)) {
                sheet2.Delete();
            }
        }
    }
})();
```

Methods used: [GetSheets](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheets.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [Delete](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md)

## Result

![RemoveDuplicateSheet](/assets/images/plugins/remove-duplicate-sheet.png#gh-light-mode-only)
![RemoveDuplicateSheet](/assets/images/plugins/remove-duplicate-sheet.dark.png#gh-dark-mode-only)