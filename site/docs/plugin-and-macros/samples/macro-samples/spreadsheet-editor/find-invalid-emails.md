# Find invalid emails

Detects and highlights invalid email addresses within a specified column or across the entire spreadsheet.

```ts
(function () {
    let sheet = Api.GetActiveSheet();
    let range = sheet.GetUsedRange();

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let red = Api.CreateColorFromRGB(255, 163, 163);
    // Specify a column index (starting from 0) or leave it as null to check entire worksheet
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

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [CreateColorFromRGB](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [GetRows](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRows.md), [GetCols](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCols.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## Result

![FindInvalidEmails](/assets/images/plugins/find-invalid-emails.png#gh-light-mode-only)
![FindInvalidEmails](/assets/images/plugins/find-invalid-emails.dark.png#gh-dark-mode-only)
