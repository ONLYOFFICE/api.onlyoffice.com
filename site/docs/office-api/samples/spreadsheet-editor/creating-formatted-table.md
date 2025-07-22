# Creating formatted table

Formats a table during creation: adds borders, fills headers, aligns text in cells. Suitable for reports, database exports, or templates that need to be brought to a readable format:

- create a table and fill it with data ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md));
- format headers with background color and bold font ([ApiRange/SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [ApiRange/SetBold](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md));
- apply borders to all cells ([ApiRange/SetBorders](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBorders.md));
- set text alignment for different content types ([ApiRange/SetAlignHorizontal](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAlignHorizontal.md));

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["Employee ID", "Name", "Department", "Salary", "Status"];
let data = [
  ["EMP001", "EMP002", "EMP003", "EMP004", "EMP005"],
  ["John Smith", "Sarah Johnson", "Mike Davis", "Anna Wilson", "Tom Brown"],
  ["IT", "Marketing", "Finance", "HR", "IT"],
  ["$75,000", "$68,000", "$82,000", "$71,000", "$79,000"],
  ["Active", "Active", "On Leave", "Active", "Active"]
];

// Fill the table with data
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}

// Format headers
let headerRange = worksheet.GetRange("A1:E1");
headerRange.SetFillColor(Api.CreateColorFromRGB(240, 240, 240)); // Light gray background
headerRange.SetAlignHorizontal("center");
headerRange.SetBold(true);

// Apply borders to all cells - Solid, 1pt
let tableRange = worksheet.GetRange("A1:E6");
tableRange.SetBorders("Top", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Bottom", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Left", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Right", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideHorizontal", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideVertical", "Thin", Api.CreateColorFromRGB(0, 0, 0));

// Set column widths for better readability
worksheet.GetRange("A1").SetColumnWidth(12); // Employee ID
worksheet.GetRange("B1").SetColumnWidth(15); // Name
worksheet.GetRange("C1").SetColumnWidth(12); // Department
worksheet.GetRange("D1").SetColumnWidth(10); // Salary
worksheet.GetRange("E1").SetColumnWidth(10); // Status

// Align data cells
worksheet.GetRange("A2:A6").SetAlignHorizontal("center"); // Employee ID - center
worksheet.GetRange("B2:B6").SetAlignHorizontal("left");   // Name - left
worksheet.GetRange("C2:C6").SetAlignHorizontal("center"); // Department - center
worksheet.GetRange("D2:D6").SetAlignHorizontal("right");  // Salary - right
worksheet.GetRange("E2:E6").SetAlignHorizontal("center"); // Status - center
```
