# Extract weekday from date column

Scans the sheet to find the first column containing valid date values and writes the weekday name (e.g., Monday, Friday) in a new column titled "Weekday". Supports numeric Excel dates and common text formats: `dd.mm.yyyy`, `mm/dd/yyyy`, `yyyy-mm-dd`.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;
  const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // === Step 1. Detect the first date-based column
  let dateCol = -1;
  let sampleRow = 1;
  for (let c = 0; c < MAX_COLS; c++) {
    const cell = sheet.GetRangeByNumber(sampleRow, c);
    const val = cell.GetValue();
    const text = cell.GetText().trim();

    let parsed = null;
    if (typeof val === "number") {
      parsed = new Date((val - 25569) * 86400000);
    } else {
      parsed = parseTextDate(text);
    }

    if (parsed && !isNaN(parsed.getTime())) {
      dateCol = c;
      break;
    }
  }

  if (dateCol === -1) {
    sheet.GetRange("A1").SetValue("No valid date column found.");
    return;
  }

  // === Step 2. Count rows in that column
  let rowCount = 0;
  while (true) {
    const text = sheet.GetRangeByNumber(rowCount + 1, dateCol).GetText().trim();
    if (!text) break;
    rowCount++;
  }

  // === Step 3. Create "Weekday" header
  const weekdayCol = dateCol + 1;
  sheet.GetRangeByNumber(HEADER_ROW, weekdayCol).SetValue("Weekday");

  // === Step 4. Convert dates to weekday names
  for (let r = 1; r <= rowCount; r++) {
    const cell = sheet.GetRangeByNumber(r, dateCol);
    const val = cell.GetValue();
    const text = cell.GetText().trim();
    let date = null;

    if (typeof val === "number") {
      date = new Date((val - 25569) * 86400000);
    } else {
      date = parseTextDate(text);
    }

    if (date && !isNaN(date.getTime())) {
      const weekday = WEEKDAYS[date.getDay()];
      sheet.GetRangeByNumber(r, weekdayCol).SetValue(weekday);
    } else {
      sheet.GetRangeByNumber(r, weekdayCol).SetValue("Invalid");
    }
  }

  function parseTextDate(str) {
    // Supports: dd.mm.yyyy, mm/dd/yyyy, yyyy-mm-dd
    if (str.includes(".")) {
      const [d, m, y] = str.split(".").map(x => parseInt(x));
      if (d && m && y) return new Date(y, m - 1, d);
    } else if (str.includes("/")) {
      const [m, d, y] = str.split("/").map(x => parseInt(x));
      if (d && m && y) return new Date(y, m - 1, d);
    } else if (str.includes("-")) {
      return new Date(str); // ISO
    }
    return null;
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)
 
## Result


