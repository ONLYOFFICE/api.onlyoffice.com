# Remove duplicate rows

This macro searches for the "email" column and removes rows that contain duplicate email values, keeping only the first occurrence. The comparison is case-insensitive, and deletion is performed from bottom to top to preserve row indexing.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 3;
  const MAX_ROWS = 6;
  const targetHeader = "email";

  let colIndex = -1;

  // === Step 1: Find "email" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === targetHeader) {
      colIndex = c;
      break;
    }
  }

  if (colIndex === -1) {
    return;
  }

  // === Step 2: Count rows with data
  let rowCount = 0;
  for (let r = 1; r < MAX_ROWS; r++) {
    const val = sheet.GetRangeByNumber(r, colIndex).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3: Remove duplicate email rows (bottom to top)
  const seen = {};
  for (let r = rowCount; r >= 1; r--) {
    const val = sheet.GetRangeByNumber(r, colIndex).GetText().trim().toLowerCase();
    if (seen[val]) {
      for (let c = 0; c < MAX_COLS; c++) {
        sheet.GetRangeByNumber(r, c).Delete("up");
      }
    } else {
      seen[val] = true;
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [Delete](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md)
 
## Result


