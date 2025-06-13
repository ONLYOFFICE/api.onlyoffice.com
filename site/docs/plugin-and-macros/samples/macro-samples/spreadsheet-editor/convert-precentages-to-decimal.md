# Convert percentages to decimal values

Scans the worksheet and converts all percentage-formatted cells (e.g., `20%`) into their decimal equivalents (e.g., `0.2`). The formatting is removed and the value is rewritten in decimal form.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;

  // === Step 1. Determine row count by scanning the first column
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, 0).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 2. Iterate through cells and convert percentage formats
  for (let r = 1; r <= rowCount; r++) {
    for (let c = 0; c < MAX_COLS; c++) {
      const range = sheet.GetRangeByNumber(r, c);
      const val = range.GetValue();
      const format = range.GetNumberFormat(); // e.g. "0%", "0.00%"

      // Check if the number format includes a percent sign
      if (/%/.test(format)) {
        // Remove percentage formatting and store the raw decimal value
        range.SetValue(val);
        range.SetNumberFormat("0.00##"); // e.g. show as "0.20" instead of "20%"
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md)
 
## Result


