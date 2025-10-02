---
hide_table_of_contents: true
---

# Creating table from JSON data

Create a document with a table populated from JSON data array:

- create an empty document with a table based on JSON structure ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- format table headers with bold text and center alignment ([ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md), [ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md))
- populate table cells with JSON object values ([ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md))
- apply consistent styling and cell padding ([ApiTableCellPr](/docs/office-api/usage-api/text-document-api/ApiTableCellPr/ApiTableCellPr.md)).

This example demonstrates how to automatically generate tables from structured data, useful for reports, employee lists, orders, courses, products, and other typical data structures.

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// JSON data array - typically received from API or external service
let jsonData = [
  {
    "name": "Alice Carter",
    "department": "Sales",
    "email": "alice.carter@example.com",
    "status": "Active"
  },
  {
    "name": "Daniel Kim",
    "department": "HR",
    "email": "daniel.kim@example.com",
    "status": "On Leave"
  },
  {
    "name": "Leila Zhang",
    "department": "Finance",
    "email": "leila.zhang@example.com",
    "status": "Active"
  }
];

// Extract column headers from JSON object keys
let headers = Object.keys(jsonData[0]);
let columnCount = headers.length;
let rowCount = jsonData.length + 1; // +1 for header row

// Create table with appropriate dimensions
let table = Api.CreateTable(columnCount, rowCount);
table.SetWidth("percent", 100);

// Create custom table style
let tableStyle = doc.CreateStyle("JSONTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(120); // 5pt padding
cellPr.SetCellMarginBottom(120);
cellPr.SetCellMarginLeft(120);
cellPr.SetCellMarginRight(120);
table.SetStyle(tableStyle);

// Format header row
let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(240, 240, 240, false);

for (let i = 0; i < columnCount; i++) {
  let headerCell = headerRow.GetCell(i);
  headerCell.SetVerticalAlign("center");
  let content = headerCell.GetContent();
  let paragraph = content.GetElement(0);
  
  // Capitalize first letter of header
  let headerText = headers[i].charAt(0).toUpperCase() + headers[i].slice(1);
  paragraph.AddText(headerText);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

// Populate data rows
for (let rowIndex = 0; rowIndex < jsonData.length; rowIndex++) {
  let dataRow = table.GetRow(rowIndex + 1);
  let rowData = jsonData[rowIndex];
  
  for (let colIndex = 0; colIndex < columnCount; colIndex++) {
    let cell = dataRow.GetCell(colIndex);
    cell.SetVerticalAlign("center");
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    
    let cellValue = rowData[headers[colIndex]] || "";
    paragraph.AddText(cellValue);
    paragraph.SetJc("left");
    
    // Apply conditional formatting for status column
    if (headers[colIndex] === "status") {
      if (cellValue === "Active") {
        paragraph.SetColor(0, 128, 0, false); // Green for active
      } else if (cellValue === "On Leave") {
        paragraph.SetColor(255, 140, 0, false); // Orange for on leave
      }
    }
  }
}

// Add title paragraph before table
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Employee Directory").SetBold(true).SetFontSize(16 * 2);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(240); // Add space after title

doc.Push(table);
```
