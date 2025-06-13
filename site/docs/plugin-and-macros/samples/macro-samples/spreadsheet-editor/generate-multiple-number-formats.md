# Format amount values in multiple number styles

This macro finds the "Amount" column, strips currency symbols and formatting, converts the data to clean decimal values, and then generates 9 additional columns with various number formats:

- General
- Decimal (0.00)
- Accounting
- Currency
- Percentage (0.00%)
- Percentage (0%)
- Fraction
- Scientific
- Text

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;
  let amountCol = -1;

  // === Step 1: Find the "Amount" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === "amount") {
      amountCol = c;
      break;
    }
  }
  if (amountCol === -1) {
    sheet.GetRange("A1").SetValue("Header 'Amount' not found");
    return;
  }

  // === Step 2: Count rows
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, amountCol).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3: Strip currency symbols into "Clean Number"
  stripCurrency(amountCol, rowCount);

  // === Step 4: Apply various number formats
  const cleanCol = amountCol + 1;
  formatGeneral(cleanCol, rowCount);
  formatDecimal(cleanCol, rowCount);
  formatAccounting(cleanCol, rowCount);
  formatCurrency(cleanCol, rowCount);
  formatPercentage(cleanCol, rowCount);
  formatPercent0(cleanCol, rowCount);
  formatFraction(cleanCol, rowCount);
  formatScientific(cleanCol, rowCount);
  formatText(cleanCol, rowCount);

  // === Helpers
  function stripCurrency(col, rows) {
    const offset = 1;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Clean Number");
    for (let r = 1; r <= rows; r++) {
      let raw = sheet.GetRangeByNumber(r, col).GetText().trim();
      raw = raw.replace(/[^\d,.\-]/g, "").replace(",", ".");
      const num = parseFloat(raw);
      const cell = sheet.GetRangeByNumber(r, col + offset);
      if (isNaN(num)) {
        cell.SetValue("NaN");
      } else {
        cell.SetValue(num);
        cell.SetNumberFormat("0.00");
      }
    }
  }

  function formatGeneral(col, rows) {
    const offset = 1;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("General");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("General");
    }
  }

  function formatDecimal(col, rows) {
    const offset = 2;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Decimal (0.00)");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("0.00");
    }
  }

  function formatAccounting(col, rows) {
    const offset = 3;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Accounting");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("_($* #,##0.00_)");
    }
  }

  function formatCurrency(col, rows) {
    const offset = 4;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Currency");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("$#,##0.00");
    }
  }

  function formatPercentage(col, rows) {
    const offset = 5;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Percentage (0.00%)");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("0.00%");
    }
  }

  function formatPercent0(col, rows) {
    const offset = 6;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Percent (0%)");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("0%");
    }
  }

  function formatFraction(col, rows) {
    const offset = 7;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Fraction (# ?/?)");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("# ?/?");
    }
  }

  function formatScientific(col, rows) {
    const offset = 8;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Scientific");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(sheet.GetRangeByNumber(r, col).GetValue());
      cell.SetNumberFormat("0.00E+00");
    }
  }

  function formatText(col, rows) {
    const offset = 9;
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue("Text (@)");
    for (let r = 1; r <= rows; r++) {
      const cell = sheet.GetRangeByNumber(r, col + offset);
      const text = sheet.GetRangeByNumber(r, col).GetValue().toString();
      cell.SetValue(text);
      cell.SetNumberFormat("@");
    }
  }

})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md)
 
## Result


