# Calculate age from birthdate

Automatically calculates a person's age based on the values in the "birthdate" column and writes the result in the adjacent "Age" column. Supports date formats: `dd.mm.yyyy`, `mm/dd/yyyy`, `yyyy-mm-dd`, and Excel numeric date values.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;

  // Find the "birthdate" column
  let birthdateCol = -1;
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === "birthdate") {
      birthdateCol = c;
      break;
    }
  }

  if (birthdateCol === -1) {
    sheet.GetRange("A1").SetValue("Column 'birthdate' not found.");
    return;
  }

  // Determine number of data rows
  let rowCount = 0;
  while (true) {
    const text = sheet.GetRangeByNumber(rowCount + 1, birthdateCol).GetText().trim();
    if (!text) break;
    rowCount++;
  }

  // Add "Age" column
  const ageCol = birthdateCol + 1;
  sheet.GetRangeByNumber(HEADER_ROW, ageCol).SetValue("Age");

  for (let r = 1; r <= rowCount; r++) {
    const cell = sheet.GetRangeByNumber(r, birthdateCol);
    const val = cell.GetValue();
    const text = cell.GetText().trim();
    let dob = null;

    if (typeof val === "number") {
      dob = new Date((val - 25569) * 86400000); // Excel serial date to JS Date
    } else {
      dob = parseTextDate(text);
    }

    if (dob && !isNaN(dob.getTime())) {
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

      sheet.GetRangeByNumber(r, ageCol).SetValue(age);
    } else {
      sheet.GetRangeByNumber(r, ageCol).SetValue("Invalid");
    }
  }

  function parseTextDate(str) {
    // Supports: dd.mm.yyyy, mm/dd/yyyy, yyyy-mm-dd
    if (str.includes(".")) {
      const [d, m, y] = str.split(".").map(s => parseInt(s, 10));
      if (d && m && y) return new Date(y, m - 1, d);
    } else if (str.includes("/")) {
      const [m, d, y] = str.split("/").map(s => parseInt(s, 10));
      if (d && m && y) return new Date(y, m - 1, d);
    } else if (str.includes("-")) {
      return new Date(str); // ISO format fallback
    }
    return null;
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Calculate age from birthdate](/assets/images/plugins/calculate-age-from-birthdate.png#gh-light-mode-only)![Calculate age from birthdate](/assets/images/plugins/calculate-age-from-birthdate.dark.png#gh-dark-mode-only)
