# Sorting data

Orders table rows by values in one of the columns. Used for convenient analysis, displaying best/worst values, alphabetical order, and other purposes. Works with numeric, text, and date values:

- determine the sorting column by selecting the column for ordering data;
- apply sorting to all rows (except header) based on the selected column values ([ApiRange/SetSort](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetSort.md));
- maintain data integrity by keeping related row data together during sorting.

This approach is commonly used for ranking lists, organizing inventory by price, alphabetizing customer lists, and analyzing performance data.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Sample data with headers
let headers = ["Student Name", "Subject", "Score", "Grade", "Date"];
let studentData = [
  ["Alice Johnson", "Mathematics", 95, "A", "2024-01-15"],
  ["Bob Smith", "Mathematics", 78, "B", "2024-01-16"],
  ["Carol Davis", "Mathematics", 92, "A", "2024-01-17"],
  ["David Wilson", "Mathematics", 65, "C", "2024-01-18"],
  ["Emma Brown", "Mathematics", 88, "B", "2024-01-19"],
  ["Frank Miller", "Mathematics", 73, "B", "2024-01-20"],
  ["Grace Lee", "Mathematics", 97, "A", "2024-01-21"],
  ["Henry Taylor", "Mathematics", 82, "B", "2024-01-22"],
  ["Ivy Chen", "Mathematics", 90, "A", "2024-01-23"],
  ["Jack Anderson", "Mathematics", 69, "C", "2024-01-24"]
];

// Fill headers
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

// Fill student data
for (let i = 0; i < studentData.length; ++i) {
  for (let j = 0; j < studentData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(studentData[i][j]);
  }
}

// Format the data as a table before sorting
let dataRange = "A1:E" + (studentData.length + 1);
worksheet.FormatAsTable(dataRange);

// Auto-fit column widths for better presentation
worksheet.GetRange("A1").SetColumnWidth(15); // Student Name
worksheet.GetRange("B1").SetColumnWidth(12); // Subject
worksheet.GetRange("C1").SetColumnWidth(8);  // Score
worksheet.GetRange("D1").SetColumnWidth(8);  // Grade
worksheet.GetRange("E1").SetColumnWidth(12); // Date

// Sort data by Score column (column C) in descending order
// This will show highest scores first
let sortRange = worksheet.GetRange("A1:E" + (studentData.length + 1));
sortRange.SetSort(
  "C1:C" + (studentData.length + 1), "xlDescending", // Primary sort: Score (descending)
  "A1:A" + (studentData.length + 1), "xlAscending",  // Secondary sort: Name (ascending)
  "D1:D" + (studentData.length + 1), "xlAscending",  // Tertiary sort: Grade (ascending)
  "xlYes",        // Has headers
  "xlSortColumns" // Sort by columns
);

// Alternative sorting examples (commented out):

// Sort by Student Name alphabetically (ascending) as primary sort
// sortRange.SetSort(
//   "A1:A" + (studentData.length + 1), "xlAscending",  // Primary: Name
//   "C1:C" + (studentData.length + 1), "xlDescending", // Secondary: Score
//   "D1:D" + (studentData.length + 1), "xlAscending",  // Tertiary: Grade
//   "xlYes", "xlSortColumns"
// );

// Sort by Grade (A, B, C order) as primary sort
// sortRange.SetSort(
//   "D1:D" + (studentData.length + 1), "xlAscending",  // Primary: Grade
//   "C1:C" + (studentData.length + 1), "xlDescending", // Secondary: Score
//   "A1:A" + (studentData.length + 1), "xlAscending",  // Tertiary: Name
//   "xlYes", "xlSortColumns"
// );
```
