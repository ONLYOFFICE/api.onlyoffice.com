# Split full name into first and last name

Scans the "Full name" column, then splits each name into "First name" and "Last name" columns. If a name contains more than two words, the first word is treated as the first name, and the rest are combined as the last name.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const targetHeader = "full name";
  let nameCol = -1;
  const MAX_COLS = 20;

  // === Step 1. Find the "full name" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === targetHeader) {
      nameCol = c;
      break;
    }
  }

  if (nameCol === -1) {
    return;
  }

  // === Step 2. Count data rows
  let rowCount = 0;
  while (true) {
    const value = sheet.GetRangeByNumber(rowCount + 1, nameCol).GetText().trim();
    if (!value) break;
    rowCount++;
  }

  // === Step 3. Add headers for new columns
  sheet.GetRangeByNumber(HEADER_ROW, nameCol + 1).SetValue("First name");
  sheet.GetRangeByNumber(HEADER_ROW, nameCol + 2).SetValue("Last name");

  // === Step 4. Split full names
  for (let r = 1; r <= rowCount; r++) {
    const text = sheet.GetRangeByNumber(r, nameCol).GetText().trim();
    const parts = text.split(" ");
    const first = parts[0] || "";
    const last = parts.slice(1).join(" ") || "";

    sheet.GetRangeByNumber(r, nameCol + 1).SetValue(first);
    sheet.GetRangeByNumber(r, nameCol + 2).SetValue(last);
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)
 
## Result


