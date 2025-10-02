# Creating pivot table by categories

Creates a pivot table based on source data, grouping rows by one column and calculating sum or count of values. Suitable for sales reports, inventory tracking, and task management:

- create source data table with repeating values: category names, numeric values, dates, etc.;
- process and group data by column value (e.g., "Category") ([Api/InsertPivotNewWorksheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/InsertPivotNewWorksheet.md));
- calculate aggregates (sum, count, etc.) for other columns ([ApiPivotTable/AddDataField](/docs/office-api/usage-api/spreadsheet-api/ApiPivotTable/Methods/AddDataField.md));
- build new table with results displayed as: Category | Count/Sum.

This approach is commonly used for sales analysis, inventory management, and generating summary reports from detailed transaction data.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Create source data with headers
let headers = ["Product", "Category", "Sales Amount", "Quantity", "Date"];
let sourceData = [
  ["Laptop Pro", "Electronics", 1299.99, 2, "2024-01-15"],
  ["Office Chair", "Furniture", 249.99, 5, "2024-01-16"],
  ["Gaming Mouse", "Electronics", 79.99, 8, "2024-01-17"],
  ["Desk Lamp", "Furniture", 89.99, 3, "2024-01-18"],
  ["Smartphone", "Electronics", 699.99, 4, "2024-01-19"],
  ["Bookshelf", "Furniture", 199.99, 2, "2024-01-20"],
  ["Tablet", "Electronics", 399.99, 6, "2024-01-21"],
  ["Coffee Table", "Furniture", 299.99, 1, "2024-01-22"],
  ["Headphones", "Electronics", 149.99, 7, "2024-01-23"],
  ["Wardrobe", "Furniture", 599.99, 1, "2024-01-24"],
  ["Monitor", "Electronics", 329.99, 3, "2024-01-25"],
  ["Dining Chair", "Furniture", 129.99, 4, "2024-01-26"]
];

// Fill headers in the first row
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill source data
for (let i = 0; i < sourceData.length; ++i) {
  for (let j = 0; j < sourceData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(sourceData[i][j]);
  }
}

// Format the source data as a table
let dataRange = "A1:E" + (sourceData.length + 1);
worksheet.FormatAsTable(dataRange);

// Format currency columns
worksheet.GetRange("C2:C" + (sourceData.length + 1)).SetNumberFormat("$#,##0.00");

// Auto-fit column widths for better presentation
worksheet.GetRange("A1").SetColumnWidth(15); // Product
worksheet.GetRange("B1").SetColumnWidth(12); // Category
worksheet.GetRange("C1").SetColumnWidth(12); // Sales Amount
worksheet.GetRange("D1").SetColumnWidth(10); // Quantity
worksheet.GetRange("E1").SetColumnWidth(12); // Date

// Create pivot table from source data
let sheetName = worksheet.GetName();
let dataRef = Api.GetRange(`'${sheetName}'!$A$1:$E$${sourceData.length + 1}`);
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

// Configure pivot table structure
// Group by Category (rows)
pivotTable.AddFields({
    rows: 'Category'
});

// Add Sales Amount as sum
pivotTable.AddDataField('Sales Amount', 'Sum of Sales Amount', 'sum');

// Add Quantity as sum
pivotTable.AddDataField('Quantity', 'Total Quantity', 'sum');

// Refresh the pivot table to display results
pivotTable.RefreshTable();

// Get the pivot table worksheet and format it
let pivotWorksheet = Api.GetSheet(0);
pivotWorksheet.SetName("Sales Summary by Category");

// Format the pivot table for better presentation
pivotWorksheet.GetRange("B3:C10").SetNumberFormat("$#,##0.00");
pivotWorksheet.GetRange("A1").SetColumnWidth(15);
pivotWorksheet.GetRange("B1").SetColumnWidth(18);
pivotWorksheet.GetRange("C1").SetColumnWidth(15);
```
