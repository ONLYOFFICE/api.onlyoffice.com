# Inserting formulas

Add formulas to cells for calculations like sum, average, and count. Used in reports, calculations, and templates where automatic totals are needed:

- create a table with numerical values in columns ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md));
- add a formula row at the bottom with calculations;
- style the result cell with formatting ([ApiRange/SetBold](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md), [ApiRange/SetAlignHorizontal](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAlignHorizontal.md));

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["Item", "Description", "Amount"];
let data = [
  ["Office Supplies", "Stationery", "Software", "Equipment", "Maintenance"],
  ["Pens and paper", "Monthly software license", "Development tools", "New laptop", "Server upkeep"],
  [150, 299, 450, 1200, 350]
];

// Fill the table with data
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}

// Add total row
worksheet.GetRangeByNumber(6, 0).SetValue("Total:");
worksheet.GetRangeByNumber(6, 2).SetValue("=SUM(C2:C6)");

// Format the total row
worksheet.GetRangeByNumber(6, 0).SetBold(true);
worksheet.GetRangeByNumber(6, 2).SetBold(true);
worksheet.GetRangeByNumber(6, 0).SetAlignHorizontal("right");
worksheet.GetRangeByNumber(6, 2).SetAlignHorizontal("right");

// Format amount column as currency
worksheet.GetRange("C2:C7").SetNumberFormat("$#,##0");

// Adjust column widths for better display
worksheet.GetRange("A1").SetColumnWidth(15);
worksheet.GetRange("B1").SetColumnWidth(25);
worksheet.GetRange("C1").SetColumnWidth(12);
```
