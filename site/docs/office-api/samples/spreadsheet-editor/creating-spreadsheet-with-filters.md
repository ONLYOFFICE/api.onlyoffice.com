# Creating spreadsheet with filters

Creates a spreadsheet with interactive filters in the header row that allows users to sort and filter data conveniently:

- create a table with headers and employee data ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md));
- apply autofilter to the header row ([ApiRange/SetAutoFilter](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAutoFilter.md));
- format the header row with bold styling ([ApiRange/SetBold](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md));
- adjust column widths for better readability ([ApiRange/SetColumnWidth](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetColumnWidth.md));
- add borders to the table for better visual separation ([ApiRange/SetBorders](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBorders.md)).

This approach is ideal for large datasets like reports, exports, and price lists where users need to sort and filter data by various parameters.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["Name", "Department", "Salary"];
let employeeData = [
  ["John Smith", "Alice Johnson", "Bob Wilson", "Carol Davis", "David Brown", "Emma Taylor", "Frank Miller", "Grace Lee"],
  ["Engineering", "Marketing", "Engineering", "Sales", "Marketing", "Engineering", "Sales", "Engineering"],
  [75000, 65000, 82000, 58000, 62000, 78000, 55000, 85000]
];

// Set headers in the first row
for (let i = 0; i < headers.length; i++) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill data rows
for (let i = 0; i < headers.length; i++) {
  for (let j = 0; j < employeeData[i].length; j++) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(employeeData[i][j]);
  }
}

// Format salary column as currency
worksheet.GetRange("C2:C9").SetNumberFormat("$#,##0");

// Style the header row
let headerRange = worksheet.GetRange("A1:C1");
headerRange.SetBold(true);
headerRange.SetFillColor(Api.CreateColorFromRGB(220, 230, 241));

// Set column widths for better readability
worksheet.GetRange("A1").SetColumnWidth(15);
worksheet.GetRange("B1").SetColumnWidth(15);
worksheet.GetRange("C1").SetColumnWidth(10);

// Add borders to the entire table
let tableRange = worksheet.GetRange("A1:C9");
tableRange.SetBorders("Top", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Bottom", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Left", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("Right", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideHorizontal", "Thin", Api.CreateColorFromRGB(0, 0, 0));
tableRange.SetBorders("InsideVertical", "Thin", Api.CreateColorFromRGB(0, 0, 0));

// Apply autofilter to the entire data range including headers
tableRange.SetAutoFilter();
```
