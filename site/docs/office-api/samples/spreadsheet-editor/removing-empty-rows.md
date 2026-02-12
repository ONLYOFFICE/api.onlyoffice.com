# Removing empty rows

Removes rows where all cells contain no data. Used for cleaning tables before export, visual report assembly, or preparing final document versions. Especially useful after importing data from external sources:

- analyze row content by iterating through all table rows;
- determine empty rows where all cells have no values (null or "") ([ApiRange/GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md));
- delete empty rows from the table ([ApiRange/Delete](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md));
- automatically update numbering of remaining rows.

This approach is commonly used for data cleanup after imports, report preparation, and maintaining clean datasets for analysis and presentation.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Sample data with empty rows mixed in
let headers = ["ID", "Product Name", "Category", "Price", "Stock"];
let sampleData = [
  [1, "Laptop Pro 15", "Electronics", 1299.99, 15],
  [2, "Gaming Mouse", "Accessories", 49.99, 45],
  [], // Empty row
  [3, "Wireless Keyboard", "Accessories", 79.99, 23],
  [], // Empty row
  [], // Empty row
  [4, "Monitor 24\"", "Electronics", 299.99, 8],
  [5, "USB Cable", "Accessories", 12.99, 120],
  [], // Empty row
  [6, "Headphones", "Electronics", 149.99, 32],
  [], // Empty row
  [7, "Tablet 10\"", "Electronics", 399.99, 18]
];

// Fill headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill sample data including empty rows
for (let i = 0; i < sampleData.length; ++i) {
  for (let j = 0; j < sampleData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(sampleData[i][j]);
  }
}

// Format price column as currency before cleanup
worksheet.GetRange("D1:D20").SetNumberFormat("$#,##0.00");

// Function to check if a row is empty
function isRowEmpty(worksheet, rowIndex, columnCount) {
  for (let col = 0; col < columnCount; ++col) {
    let cellValue = worksheet.GetRangeByNumber(rowIndex, col).GetValue();
    if (cellValue !== null && cellValue !== "" && cellValue !== undefined) {
      return false;
    }
  }
  return true;
}

// Remove empty rows (iterate backwards to avoid index shifting issues)
let totalRows = sampleData.length + 1; // +1 for header row
let columnCount = headers.length;

// Start from the last row and work backwards
for (let row = totalRows; row >= 2; --row) { // Start from row 2 (skip header)
  if (isRowEmpty(worksheet, row - 1, columnCount)) { // row - 1 because GetRangeByNumber is 0-based
    // Get the entire row range and delete it
    let rowRange = worksheet.GetRange(row + ":" + row);
    rowRange.Delete("up");
  }
}

// Count remaining rows after cleanup
let remainingRows = 1; // Start with header row
for (let row = 2; row <= 20; ++row) { // Check up to row 20
  if (!isRowEmpty(worksheet, row - 1, columnCount)) {
    remainingRows = row;
  }
}

// Apply table formatting to the cleaned data
let cleanDataRange = "A1:E" + remainingRows;
worksheet.FormatAsTable(cleanDataRange);

// Auto-fit column widths for better presentation
worksheet.GetRange("A1").SetColumnWidth(5);  // ID
worksheet.GetRange("B1").SetColumnWidth(18); // Product name
worksheet.GetRange("C1").SetColumnWidth(12); // Category
worksheet.GetRange("D1").SetColumnWidth(10); // Price
worksheet.GetRange("E1").SetColumnWidth(8);  // Stock
```
