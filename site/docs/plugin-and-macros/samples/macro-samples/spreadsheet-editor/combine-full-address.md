# Combine city, street, and building into full address

This macro locates the "city", "street", and "building" columns and generates a new "Full address" column by concatenating their values into a formatted string like:
`City`, `Street`, `№Building`.

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 20;
  const cityKey = "city";
  const streetKey = "street";
  const buildingKey = "building";

  let cityCol = -1;
  let streetCol = -1;
  let buildingCol = -1;

  // === Step 1: Detect column positions
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === cityKey) cityCol = c;
    if (header === streetKey) streetCol = c;
    if (header === buildingKey) buildingCol = c;
  }

  if (cityCol === -1 || streetCol === -1 || buildingCol === -1) {
    return;
  }

  // === Step 2: Count number of data rows
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, cityCol).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3: Add "Full address" column and populate it
  const resultCol = Math.max(cityCol, streetCol, buildingCol) + 1;
  sheet.GetRangeByNumber(HEADER_ROW, resultCol).SetValue("Full address");

  for (let r = 1; r <= rowCount; r++) {
    const city = sheet.GetRangeByNumber(r, cityCol).GetText().trim();
    const street = sheet.GetRangeByNumber(r, streetCol).GetText().trim();
    const building = sheet.GetRangeByNumber(r, buildingCol).GetText().trim();

    const full = `${city}, ${street}, №${building}`;
    sheet.GetRangeByNumber(r, resultCol).SetValue(full);
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)
 
## Result


