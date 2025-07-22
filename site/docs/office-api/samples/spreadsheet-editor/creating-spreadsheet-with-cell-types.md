# Creating spreadsheet with different cell types

Creates a spreadsheet with heterogeneous data types for working with tables containing text, dates, amounts, percentages, and ratings. This approach is suitable for project reports, surveys, and budget tables.

- create table structure with columns: Item, Date, Amount, Progress, Rating;
- apply specific formatting for each data type ([ApiRange/SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md));
- apply data-type appropriate alignment ([ApiRange/SetAlignHorizontal](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAlignHorizontal.md));
- format headers with bold font ([ApiRange/SetBold](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md));
- add colored background to header row ([ApiRange/SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md));
- add clear table borders ([ApiRange/SetBorders](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBorders.md));

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["Item", "Date", "Amount", "Progress", "Rating"];
let data = [
  ["Website Redesign", "Mobile App", "Database Migration", "UI Testing", "Code Review"],
  ["03/15/2024", "05/22/2024", "07/10/2024", "09/05/2024", "11/18/2024"],
  [15000, 25000, 8500, 12000, 5500],
  [0.85, 0.62, 0.95, 0.40, 1.00],
  [4.2, 3.8, 4.7, 3.5, 4.9]
];

// Set headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill data
for (let i = 0; i < headers.length; ++i) {
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}

// Format headers - bold and background color
worksheet.GetRange("A1:E1").SetBold(true);
worksheet.GetRange("A1:E1").SetFillColor(Api.CreateColorFromRGB(79, 129, 189));
worksheet.GetRange("A1:E1").SetFontColor(Api.CreateColorFromRGB(255, 255, 255));
worksheet.GetRange("A1:E1").SetAlignHorizontal("center");

// Format Item column (A) - left align text
worksheet.GetRange("A2:A6").SetAlignHorizontal("left");

// Format Date column (B) - date format
worksheet.GetRange("B2:B6").SetNumberFormat("mm/dd/yyyy");
worksheet.GetRange("B2:B6").SetAlignHorizontal("center");

// Format Amount column (C) - currency USD
worksheet.GetRange("C2:C6").SetNumberFormat("$#,##0");
worksheet.GetRange("C2:C6").SetAlignHorizontal("right");

// Format Progress column (D) - percentage
worksheet.GetRange("D2:D6").SetNumberFormat("0%");
worksheet.GetRange("D2:D6").SetAlignHorizontal("center");

// Format Rating column (E) - decimal with one place
worksheet.GetRange("E2:E6").SetNumberFormat("0.0");
worksheet.GetRange("E2:E6").SetAlignHorizontal("center");

// Set column widths for better display
worksheet.GetRange("A1").SetColumnWidth(20);
worksheet.GetRange("B1").SetColumnWidth(15);
worksheet.GetRange("C1").SetColumnWidth(15);
worksheet.GetRange("D1").SetColumnWidth(12);
worksheet.GetRange("E1").SetColumnWidth(10);

// Add borders to the table
let tableRange = worksheet.GetRange("A1:E6");
tableRange.SetBorders("Top", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Bottom", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Left", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Right", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideHorizontal", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideVertical", "Thin", Api.CreateColorFromRGB(0, 0, 0));
```
