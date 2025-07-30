# Normalize phone numbers

This macro scans the "Phone" column and normalizes phone numbers into a standardized format: `+1 (XXX) XXX-XXXX`.

It handles raw 10-digit numbers (e.g. `8005551234`) by assuming the U.S. country code (`1`), and also supports 11-digit inputs starting with `1`.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_ROWS = 1000;
  const MAX_COLS = 50;
  let phoneCol = -1;

  // Step 1: Find the "Phone" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === "phone") {
      phoneCol = c;
      break;
    }
  }

  if (phoneCol === -1) {
    return;
  }

  // Step 2: Normalize phone numbers
  for (let r = 1; r < MAX_ROWS; r++) {
    const cell = sheet.GetRangeByNumber(r, phoneCol);
    let raw = cell.GetText().replace(/\D/g, ""); // Remove non-digits

    if (raw.length === 10) {
      raw = "1" + raw; // Prepend country code if missing
    }

    if (raw.length === 11 && raw.startsWith("1")) {
      const country = raw.slice(0, 1);
      const area = raw.slice(1, 4);
      const prefix = raw.slice(4, 7);
      const line = raw.slice(7, 11);
      const formatted = `+${country} (${area}) ${prefix}-${line}`;
      cell.SetValue(formatted);
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Normalize phone numbers](/assets/images/plugins/normalize-phone-numbers.png#gh-light-mode-only)![Normalize phone numbers](/assets/images/plugins/normalize-phone-numbers.dark.png#gh-dark-mode-only)
