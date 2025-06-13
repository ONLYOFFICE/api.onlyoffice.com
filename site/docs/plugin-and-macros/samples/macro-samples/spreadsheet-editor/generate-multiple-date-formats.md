# Generate multiple date formats 

This macro processes a "Date" column and generates multiple adjacent columns with various formats and breakdowns, including:
- Different date/time formats: short date, US date, long date, time only, combined date-time
- Extracted components: day, month, year, quarter
The script expects text dates in the format `dd.mm.yyyy hh:mm` or valid Excel serial date values.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;
  let dateCol = -1;

  // === Step 1: Locate the "Date" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === "date") {
      dateCol = c;
      break;
    }
  }
  if (dateCol === -1) {
    sheet.GetRange("A1").SetValue("Header 'Date' not found");
    return;
  }

  // === Step 2: Count rows
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, dateCol).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3: Add formatted columns
  addShortDate(dateCol, rowCount);
  addUSDate(dateCol, rowCount);
  addLongDate(dateCol, rowCount);
  addTimeOnly(dateCol, rowCount);
  addDateTimeCombined(dateCol, rowCount);

  // === Step 4: Add extracted components
  addDayOnly(dateCol, rowCount);
  addMonthOnly(dateCol, rowCount);
  addYearOnly(dateCol, rowCount);
  addQuarterOnly(dateCol, rowCount);

  // === Format helpers
  function addShortDate(startCol, rowCount) {
    const offset = 1;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Date (Short)");
    for (let r = 1; r <= rowCount; r++) {
      const cell = sheet.GetRangeByNumber(r, startCol + offset);
      const val = sheet.GetRangeByNumber(r, startCol).GetValue();
      cell.SetValue(val);
      cell.SetNumberFormat("d-mmm-yy");
    }
  }

  function addUSDate(startCol, rowCount) {
    const offset = 2;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Date (US)");
    for (let r = 1; r <= rowCount; r++) {
      const cell = sheet.GetRangeByNumber(r, startCol + offset);
      const val = sheet.GetRangeByNumber(r, startCol).GetValue();
      cell.SetValue(val);
      cell.SetNumberFormat("m/d/yyyy");
    }
  }

  function addLongDate(startCol, rowCount) {
    const offset = 3;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Long Date");
    for (let r = 1; r <= rowCount; r++) {
      const cell = sheet.GetRangeByNumber(r, startCol + offset);
      const val = sheet.GetRangeByNumber(r, startCol).GetValue();
      cell.SetValue(val);
      cell.SetNumberFormat("[$-F800]dddd, mmmm dd, yyyy");
    }
  }

  function addTimeOnly(startCol, rowCount) {
    const offset = 4;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Time Only");
    for (let r = 1; r <= rowCount; r++) {
      const cell = sheet.GetRangeByNumber(r, startCol + offset);
      const val = sheet.GetRangeByNumber(r, startCol).GetValue();
      cell.SetValue(val);
      cell.SetNumberFormat("hh:mm:ss");
    }
  }

  function addDateTimeCombined(startCol, rowCount) {
    const offset = 5;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Date + Time");
    for (let r = 1; r <= rowCount; r++) {
      const cell = sheet.GetRangeByNumber(r, startCol + offset);
      const val = sheet.GetRangeByNumber(r, startCol).GetValue();
      cell.SetValue(val);
      cell.SetNumberFormat("m/d/yyyy h:mm");
    }
  }

  // === Component extractors from text-based date
  function addDayOnly(startCol, rowCount) {
    const offset = 6;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Day");
    for (let r = 1; r <= rowCount; r++) {
      const raw = sheet.GetRangeByNumber(r, startCol).GetText().trim();
      const parsed = parseTextToDate(raw);
      sheet.GetRangeByNumber(r, startCol + offset).SetValue(parsed ? parsed.getDate() : "NaN");
    }
  }

  function addMonthOnly(startCol, rowCount) {
    const offset = 7;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Month");
    for (let r = 1; r <= rowCount; r++) {
      const raw = sheet.GetRangeByNumber(r, startCol).GetText().trim();
      const parsed = parseTextToDate(raw);
      sheet.GetRangeByNumber(r, startCol + offset).SetValue(parsed ? parsed.getMonth() + 1 : "NaN");
    }
  }

  function addYearOnly(startCol, rowCount) {
    const offset = 8;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Year");
    for (let r = 1; r <= rowCount; r++) {
      const raw = sheet.GetRangeByNumber(r, startCol).GetText().trim();
      const parsed = parseTextToDate(raw);
      sheet.GetRangeByNumber(r, startCol + offset).SetValue(parsed ? parsed.getFullYear() : "NaN");
    }
  }

  function addQuarterOnly(startCol, rowCount) {
    const offset = 9;
    sheet.GetRangeByNumber(HEADER_ROW, startCol + offset).SetValue("Quarter");
    for (let r = 1; r <= rowCount; r++) {
      const raw = sheet.GetRangeByNumber(r, startCol).GetText().trim();
      const parsed = parseTextToDate(raw);
      const q = parsed ? Math.floor(parsed.getMonth() / 3) + 1 : "NaN";
      sheet.GetRangeByNumber(r, startCol + offset).SetValue(parsed ? "Q" + q : "QNaN");
    }
  }

  // === Custom parser for dd.mm.yyyy hh:mm
  function parseTextToDate(text) {
    const parts = text.split(" ");
    if (parts.length !== 2) return null;
    const [d, m, y] = parts[0].split(".").map(Number);
    const [h, min] = parts[1].split(":").map(Number);
    if ([d, m, y, h, min].some(isNaN)) return null;
    return new Date(y, m - 1, d, h, min);
  }

})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md)
 
## Result


