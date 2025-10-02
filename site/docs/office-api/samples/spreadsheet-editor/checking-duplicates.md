# Checking duplicates

Identifies repeating values in a selected column and visually highlights rows with duplicates. Used for data cleaning and analysis - for example, in customer lists, orders, or employee records:

- select column for checking by determining the column that should not have repeating values (e.g., Email or ID);
- analyze values by scanning from top to bottom and identifying duplicates ([ApiRange/GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md));
- highlight duplicates by marking rows with repeating values using background color ([ApiRange/SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)).

This approach is commonly used for data validation, customer database cleanup, preventing duplicate entries, and maintaining data integrity.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Sample data with headers and some duplicate emails
let headers = ["ID", "Name", "Email", "Department", "Phone"];
let employeeData = [
  [1, "Alice Johnson", "alice.johnson@company.com", "Marketing", "+1-555-0101"],
  [2, "Bob Smith", "bob.smith@company.com", "Sales", "+1-555-0102"],
  [3, "Carol Davis", "carol.davis@company.com", "IT", "+1-555-0103"],
  [4, "David Wilson", "bob.smith@company.com", "HR", "+1-555-0104"], // Duplicate email
  [5, "Emma Brown", "emma.brown@company.com", "Finance", "+1-555-0105"],
  [6, "Frank Miller", "frank.miller@company.com", "Marketing", "+1-555-0106"],
  [7, "Grace Lee", "alice.johnson@company.com", "Sales", "+1-555-0107"], // Duplicate email
  [8, "Henry Taylor", "henry.taylor@company.com", "IT", "+1-555-0108"],
  [9, "Ivy Chen", "ivy.chen@company.com", "HR", "+1-555-0109"],
  [10, "Jack Anderson", "frank.miller@company.com", "Finance", "+1-555-0110"] // Duplicate email
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

// Auto-fit column widths for better presentation
worksheet.GetRange("A1").SetColumnWidth(5);  // ID
worksheet.GetRange("B1").SetColumnWidth(15); // Name
worksheet.GetRange("C1").SetColumnWidth(25); // Email
worksheet.GetRange("D1").SetColumnWidth(12); // Department
worksheet.GetRange("E1").SetColumnWidth(15); // Phone

// Check for duplicates in Email column (column C)
let emailColumnIndex = 2; // Column C (0-based index)
let emailValues = [];
let duplicateRows = [];

// Scan through all data rows (skip header)
for (let row = 1; row <= employeeData.length; ++row) {
  let emailValue = worksheet.GetRangeByNumber(row, emailColumnIndex).GetValue();
  
  // Check if this email already exists in our tracking array
  let isDuplicate = false;
  for (let i = 0; i < emailValues.length; ++i) {
    if (emailValues[i].email === emailValue) {
      isDuplicate = true;
      // Mark both the original and current row as duplicates
      if (duplicateRows.indexOf(emailValues[i].row) === -1) {
        duplicateRows.push(emailValues[i].row);
      }
      duplicateRows.push(row);
      break;
    }
  }
  
  // Add current email to tracking array
  emailValues.push({
    email: emailValue,
    row: row
  });
}

// Highlight duplicate rows with light red background
let lightRedColor = Api.CreateColorFromRGB(255, 200, 200);
for (let i = 0; i < duplicateRows.length; ++i) {
  let rowNumber = duplicateRows[i] + 1; // Convert to 1-based for range notation
  let rowRange = worksheet.GetRange("A" + rowNumber + ":E" + rowNumber);
  rowRange.SetFillColor(lightRedColor); // Light red background
}

// Add a summary of found duplicates
let summaryRow = employeeData.length + 3;
worksheet.GetRangeByNumber(summaryRow, 0).SetValue("Duplicate Check Summary:");
worksheet.GetRangeByNumber(summaryRow + 1, 0).SetValue("Total rows checked: " + employeeData.length);
worksheet.GetRangeByNumber(summaryRow + 2, 0).SetValue("Duplicate rows found: " + duplicateRows.length);
worksheet.GetRangeByNumber(summaryRow + 3, 0).SetValue("Duplicate emails highlighted in red");

// Format summary section
let grayColor = Api.CreateColorFromRGB(100, 100, 100);
let summaryRange = worksheet.GetRange("A" + (summaryRow + 1) + ":A" + (summaryRow + 4));
summaryRange.SetFontColor(grayColor); // Gray text
worksheet.GetRangeByNumber(summaryRow, 0).SetBold(true);
```
