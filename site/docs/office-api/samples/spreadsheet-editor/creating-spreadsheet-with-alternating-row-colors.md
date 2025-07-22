# Creating spreadsheet with alternating row colors

Creates a spreadsheet with alternating row colors to improve readability of tables with multiple rows:

- create a table with several rows of data ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md));
- format the range as a table with alternating row colors ([ApiRange/FormatAsTable](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/FormatAsTable.md));
- use predefined table styles that automatically apply alternating colors for enhanced data perception.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["Employee ID", "Name", "Department", "Position", "Salary"];
let data = [
  ["EMP001", "EMP002", "EMP003", "EMP004", "EMP005", "EMP006", "EMP007", "EMP008"],
  ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown", "David Wilson", "Lisa Garcia", "Tom Anderson", "Maria Rodriguez"],
  ["Sales", "Marketing", "IT", "HR", "Finance", "Sales", "IT", "Marketing"],
  ["Manager", "Specialist", "Developer", "Coordinator", "Analyst", "Representative", "Senior Developer", "Manager"],
  ["$75,000", "$52,000", "$68,000", "$45,000", "$58,000", "$42,000", "$85,000", "$72,000"]
];

// Fill headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill data
for (let i = 0; i < headers.length; ++i) {
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}

// Format the entire data range as a table with alternating row colors
worksheet.FormatAsTable("A1:E9");

// Auto-fit column widths for better readability
worksheet.GetRange("A:A").SetColumnWidth(12);
worksheet.GetRange("B:B").SetColumnWidth(18);
worksheet.GetRange("C:C").SetColumnWidth(12);
worksheet.GetRange("D:D").SetColumnWidth(16);
worksheet.GetRange("E:E").SetColumnWidth(12);

// Center align Employee ID and Salary columns
worksheet.GetRange("A:A").SetAlignHorizontal("center");
worksheet.GetRange("E:E").SetAlignHorizontal("center");
```
