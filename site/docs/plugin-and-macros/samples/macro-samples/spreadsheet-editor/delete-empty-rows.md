# Delete empty rows

This macro scans each row of the spreadsheet (up to 1000 rows and 50 columns) from bottom to top. If all cells in a row are empty, the row is deleted by shifting the remaining content upward. A summary of how many rows were removed is written in cell A1.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const MAX_ROWS = 1000;
  const MAX_COLS = 50;
  let deletedCount = 0;

  for (let r = MAX_ROWS - 1; r >= 1; r--) {
    let isEmpty = true;

    for (let c = 0; c < MAX_COLS; c++) {
      const value = sheet.GetRangeByNumber(r, c).GetText().trim();
      if (value !== "") {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      for (let c = 0; c < MAX_COLS; c++) {
        sheet.GetRangeByNumber(r, c).Delete("up");
      }
      deletedCount++;
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [Delete](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md)
 
## Result


