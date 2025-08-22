---
hide_table_of_contents: true
---

# Adding sequential numbers

Add sequential numbering to the first column of a table for better navigation and row referencing:

- determine the range of data rows that need numbering;
- insert sequential numbers (1, 2, 3, ...) in column A starting from the first row after headers ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md));
- automatically calculate the number of rows to ensure complete numbering;
- format the numbering column for better visual presentation.

This approach is commonly used for participant lists, inventory tables, and large datasets where row identification is important for navigation and referencing.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Sample data with headers
let headers = ["#", "Product Name", "Category", "Price", "Stock"];
let data = [
  [], // Numbers will be generated automatically
  ["Laptop Pro 15", "Gaming Mouse", "Wireless Keyboard", "Monitor 24\"", "USB Cable", "Headphones", "Tablet 10\"", "Smartphone", "Printer", "External HDD"],
  ["Electronics", "Accessories", "Accessories", "Electronics", "Accessories", "Electronics", "Electronics", "Electronics", "Office", "Storage"],
  [1299.99, 49.99, 79.99, 299.99, 12.99, 149.99, 399.99, 699.99, 199.99, 89.99],
  [15, 45, 23, 8, 120, 32, 18, 25, 12, 67]
];

// Fill headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill data (skip the first column for now)
for (let i = 1; i < data.length; ++i) {
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}

// Add sequential numbers in the first column (column A)
let numberOfRows = data[1].length; // Get number of data rows
for (let row = 1; row <= numberOfRows; ++row) {
  worksheet.GetRangeByNumber(row, 0).SetValue(row);
}

// Format price column as currency
worksheet.GetRange("D2:D" + (numberOfRows + 1)).SetNumberFormat("$#,##0.00");

worksheet.FormatAsTable("A1:E11");

// Auto-fit column widths
worksheet.GetRange("A1").SetColumnWidth(5);  // Narrow column for numbers
worksheet.GetRange("B1").SetColumnWidth(18); // Product name
worksheet.GetRange("C1").SetColumnWidth(12); // Category
worksheet.GetRange("D1").SetColumnWidth(10); // Price
worksheet.GetRange("E1").SetColumnWidth(8);  // Stock
```
