# Exporting table to JSON

Converts cell values into a structured JSON array where each table row becomes a separate object. Used for transferring tabular data to other systems, APIs, and saving to databases:

- determine range by defining the table area (e.g., from A1 to C10) with the first row containing field names (headers);
- read data row by row where each row is converted to a JSON object ([ApiRange/GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md));
- form JSON array by combining all rows with keys from headers and values from cell content.

This approach is commonly used for data integration, API communication, database imports, and system interoperability.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Sample data with headers for export
let headers = ["ID", "Name", "Email", "Department", "Salary"];
let employeeData = [
  [1, "Alice Johnson", "alice.johnson@company.com", "Marketing", 65000],
  [2, "Bob Smith", "bob.smith@company.com", "Sales", 58000],
  [3, "Carol Davis", "carol.davis@company.com", "IT", 72000],
  [4, "David Wilson", "david.wilson@company.com", "HR", 55000],
  [5, "Emma Brown", "emma.brown@company.com", "Finance", 68000],
  [6, "Frank Miller", "frank.miller@company.com", "Marketing", 62000],
  [7, "Grace Lee", "grace.lee@company.com", "IT", 75000],
  [8, "Henry Taylor", "henry.taylor@company.com", "Sales", 60000]
];

// Fill headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill employee data
for (let i = 0; i < employeeData.length; ++i) {
  for (let j = 0; j < employeeData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(employeeData[i][j]);
  }
}

// Format the data as a table
let dataRange = "A1:E" + (employeeData.length + 1);
worksheet.FormatAsTable(dataRange);

// Format salary column as currency
let salaryRange = worksheet.GetRange("E2:E" + (employeeData.length + 1));
salaryRange.SetNumberFormat("$#,##0");

// Auto-fit column widths
worksheet.GetRange("A1").SetColumnWidth(5);  // ID
worksheet.GetRange("B1").SetColumnWidth(15); // Name
worksheet.GetRange("C1").SetColumnWidth(25); // Email
worksheet.GetRange("D1").SetColumnWidth(12); // Department
worksheet.GetRange("E1").SetColumnWidth(10); // Salary

// Export table to JSON
function exportTableToJSON(worksheet, startRow, startCol, endRow, endCol) {
  let jsonArray = [];
  let headers = [];
  
  // Read headers from the first row
  for (let col = startCol; col <= endCol; ++col) {
    let headerValue = worksheet.GetRangeByNumber(startRow, col).GetValue();
    headers.push(headerValue);
  }
  
  // Read data rows and convert to JSON objects
  for (let row = startRow + 1; row <= endRow; ++row) {
    let rowObject = {};
    
    for (let col = startCol; col <= endCol; ++col) {
      let cellValue = worksheet.GetRangeByNumber(row, col).GetValue();
      let headerKey = headers[col - startCol];
      rowObject[headerKey] = cellValue;
    }
    
    jsonArray.push(rowObject);
  }
  
  return jsonArray;
}

// Define the table range (0-based indexing)
let startRow = 0; // Header row
let startCol = 0; // Column A
let endRow = employeeData.length; // Last data row
let endCol = headers.length - 1; // Last column

// Export the table to JSON
let jsonData = exportTableToJSON(worksheet, startRow, startCol, endRow, endCol);

// Display the JSON result in the spreadsheet
let outputRow = employeeData.length + 3;
worksheet.GetRangeByNumber(outputRow, 0).SetValue("Exported JSON Data:");
worksheet.GetRangeByNumber(outputRow, 0).SetBold(true);

// Convert JSON array to formatted string for display
let jsonString = JSON.stringify(jsonData, null, 2);

// Split JSON string into lines for better display in cells
let jsonLines = jsonString.split('\n');
for (let i = 0; i < jsonLines.length; ++i) {
  worksheet.GetRangeByNumber(outputRow + 2 + i, 0).SetValue(jsonLines[i]);
}

// Add explanation
let explanationRow = outputRow + 2 + jsonLines.length + 2;
worksheet.GetRangeByNumber(explanationRow, 0).SetValue("JSON Structure Explanation:");
worksheet.GetRangeByNumber(explanationRow, 0).SetBold(true);
worksheet.GetRangeByNumber(explanationRow + 1, 0).SetValue("• Each table row becomes a JSON object");
worksheet.GetRangeByNumber(explanationRow + 2, 0).SetValue("• Header values become object keys");
worksheet.GetRangeByNumber(explanationRow + 3, 0).SetValue("• Cell values become object values");
worksheet.GetRangeByNumber(explanationRow + 4, 0).SetValue("• All objects are combined into an array");

// Add usage examples
worksheet.GetRangeByNumber(explanationRow + 6, 0).SetValue("Common Use Cases:");
worksheet.GetRangeByNumber(explanationRow + 6, 0).SetBold(true);
worksheet.GetRangeByNumber(explanationRow + 7, 0).SetValue("• API data transfer");
worksheet.GetRangeByNumber(explanationRow + 8, 0).SetValue("• Database imports");
worksheet.GetRangeByNumber(explanationRow + 9, 0).SetValue("• System integration");
worksheet.GetRangeByNumber(explanationRow + 10, 0).SetValue("• Data backup and migration");

// Format explanation text
let explanationRange = worksheet.GetRange("A" + (explanationRow + 1) + ":A" + (explanationRow + 10));
let grayColor = Api.CreateColorFromRGB(100, 100, 100);
explanationRange.SetFontColor(grayColor);

// Set wider column for JSON display
worksheet.GetRange("A1").SetColumnWidth(50);
```
