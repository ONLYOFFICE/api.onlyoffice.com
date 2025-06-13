# Clean and normalize customer data

This macro locates common CRM-style columns like "full name", "email", "signup date", and "order total" and reformats them consistently:

- Names - capitalized
- Emails - lowercase
- Dates - ISO format `yyyy-mm-dd`
- Totals - numeric with two decimals
- Optional columns: "country" and "status text" are also cleaned if present.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;
  const HEADERS = {
    name: "full name",
    email: "email",
    date: "signup date",
    total: "order total",
    country: "country",
    status: "status text"
  };

  const colMap = {};

  // === Step 1. Map headers to columns
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    for (let key in HEADERS) {
      if (header === HEADERS[key]) {
        colMap[key] = c;
      }
    }
  }

  // Required column check
  if (
    colMap.name === undefined ||
    colMap.email === undefined ||
    colMap.date === undefined ||
    colMap.total === undefined
  ) {
    return;
  }

  // === Step 2. Count rows
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, colMap.name).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3. Process each row
  for (let r = 1; r <= rowCount; r++) {
    // Full Name
    const nameCell = sheet.GetRangeByNumber(r, colMap.name);
    const name = nameCell.GetText().trim();
    const formattedName = name.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    nameCell.SetValue(formattedName);

    // Email
    const emailCell = sheet.GetRangeByNumber(r, colMap.email);
    const email = emailCell.GetText().trim().toLowerCase();
    emailCell.SetValue(email);

    // Signup Date
    const dateCell = sheet.GetRangeByNumber(r, colMap.date);
    const parsedDate = parseDate(dateCell.GetText());
    if (parsedDate) {
      const iso = `${parsedDate.getFullYear()}-${pad(parsedDate.getMonth() + 1)}-${pad(parsedDate.getDate())}`;
      dateCell.SetValue(iso);
      dateCell.SetNumberFormat("yyyy-mm-dd");
    }

    // Order Total
    const totalCell = sheet.GetRangeByNumber(r, colMap.total);
    const rawTotal = totalCell.GetText().replace(/[^\d,.\-]/g, "").replace(",", ".");
    const num = parseFloat(rawTotal);
    if (!isNaN(num)) {
      totalCell.SetValue(Math.round(num * 100) / 100);
      totalCell.SetNumberFormat("0.00");
    }

    // Country (optional)
    if (colMap.country !== undefined) {
      const countryCell = sheet.GetRangeByNumber(r, colMap.country);
      const country = countryCell.GetText().trim();
      countryCell.SetValue(
        country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()
      );
    }

    // Status Text (optional)
    if (colMap.status !== undefined) {
      const statusCell = sheet.GetRangeByNumber(r, colMap.status);
      const clean = statusCell.GetText().trim().toLowerCase();
      statusCell.SetValue(clean);
    }
  }

  // === Date parsing helper
  function parseDate(str) {
    const parts = str.trim().split(" ");
    let date = parts[0];
    let [day, month, year] = [0, 0, 0];

    if (date.includes(".")) {
      [day, month, year] = date.split(".").map(Number);
    } else if (date.includes("/")) {
      [day, month, year] = date.split("/").map(Number);
    } else if (date.includes("-")) {
      [year, month, day] = date.split("-").map(Number);
    }

    if ([day, month, year].some(isNaN)) return null;
    return new Date(year, month - 1, day);
  }

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md)
 
## Result


