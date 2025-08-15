# Creating formatted table

Create a document with a formatted table containing employee data with styled headers and center-aligned content:

- create a table with headers and data rows ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- apply formatting to table headers with bold text and center alignment ([ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md), [ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md))
- populate table cells with employee information and center-align all content ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md))

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Define table headers
let headers = ["Name", "Position", "Phone", "Email", "City"];

// Define employee data
let employeeData = [
  ["Emily Johnson", "Marketing Specialist", "+1 (555) 987-6543", "emily.johnson@company.com", "New York"],
  ["John Smith", "Sales Manager", "+1 (555) 123-4567", "john.smith@company.com", "Chicago"],
  ["Sarah Lee", "HR Coordinator", "+1 (555) 888-1212", "sarah.lee@company.com", "San Francisco"]
];

// Create table with 5 columns and 4 rows (1 header + 3 data rows)
let table = Api.CreateTable(5, 4);
table.SetWidth("percent", 100);

// Style the header row
let headerRow = table.GetRow(0);
for (let i = 0; i < headers.length; i++) {
  let cell = headerRow.GetCell(i);
  cell.SetVerticalAlign("center");
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

// Populate data rows
for (let rowIndex = 0; rowIndex < employeeData.length; rowIndex++) {
  let dataRow = table.GetRow(rowIndex + 1);
  for (let colIndex = 0; colIndex < employeeData[rowIndex].length; colIndex++) {
    let cell = dataRow.GetCell(colIndex);
    cell.SetVerticalAlign("center");
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(employeeData[rowIndex][colIndex]);
    paragraph.SetJc("center");
  }
}

doc.AddElement(0, table);
```
