# Trim extra spaces

This macro scans the entire table (up to 20 columns) and removes extra spaces in each cell:

- Leading and trailing spaces are trimmed
- Multiple spaces inside text are collapsed to a single space

It operates row by row, starting from row 1, and stops at the first empty cell in the first column.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;

  // Step 1: Count number of rows based on first column
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, 0).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // Step 2: Clean spaces in each cell
  for (let r = 1; r <= rowCount; r++) {
    for (let c = 0; c < MAX_COLS; c++) {
      const range = sheet.GetRangeByNumber(r, c);
      const text = range.GetText();
      const cleaned = trimExtraSpaces(text);
      if (text !== cleaned) {
        range.SetValue(cleaned);
      }
    }
  }

  // Helper: collapse multiple spaces and trim ends
  function trimExtraSpaces(str) {
    return str.replace(/\s+/g, " ").trim();
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)
 
## Result


