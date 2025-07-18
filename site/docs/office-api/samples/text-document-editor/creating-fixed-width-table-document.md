# Creating a document with fixed-width column table

Create a document with a table that has fixed column widths for predictable document structure:

- create an empty document with a table ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- set fixed column widths to ensure consistent layout ([ApiTable/SetTableLayout](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableLayout.md), [ApiTableRow/SetHeight](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetHeight.md))
- format table headers with bold styling ([ApiParagraph/SetBold](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), [ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md))
- populate the table with structured data for contracts, legal forms, or technical specifications.

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create a 3x3 table
let table = Api.CreateTable(3, 3);

// Set table layout to fixed to enable precise column width control
table.SetTableLayout("fixed");

// Define column widths: 100pt, 200pt, 150pt (converted to twips)
let columnWidths = [2000, 4000, 3000]; // 100pt, 200pt, 150pt in twips (1pt = 20 twips)

// Apply column widths to all rows
for (let i = 0; i < 3; i++) {
  let row = table.GetRow(i);
  for (let j = 0; j < 3; j++) {
    row.GetCell(j).SetWidth("twips", columnWidths[j]);
  }
}

// Set table borders for clear structure
table.SetTableBorderTop("single", 4, 0, 0, 0, 0);
table.SetTableBorderBottom("single", 4, 0, 0, 0, 0);
table.SetTableBorderLeft("single", 4, 0, 0, 0, 0);
table.SetTableBorderRight("single", 4, 0, 0, 0, 0);
table.SetTableBorderInsideH("single", 4, 0, 0, 0, 0);
table.SetTableBorderInsideV("single", 4, 0, 0, 0, 0);

// Header data
let headers = ["Code", "Description", "Unit Price"];

// Data rows
let dataRows = [
  ["A-102", "Office Suite License", "$120"],
  ["B-305", "Support Subscription", "$80"]
];

// Format header row (first row)
let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(240, 240, 240, false);

for (let j = 0; j < 3; j++) {
  let headerCell = headerRow.GetCell(j);
  headerCell.SetVerticalAlign("center");
  let headerContent = headerCell.GetContent();
  let headerParagraph = headerContent.GetElement(0);
  headerParagraph.AddText(headers[j]);
  headerParagraph.SetBold(true);
  headerParagraph.SetJc("center");
}

// Fill data rows
for (let i = 0; i < 2; i++) {
  let dataRow = table.GetRow(i + 1);
  
  for (let j = 0; j < 3; j++) {
    let dataCell = dataRow.GetCell(j);
    dataCell.SetVerticalAlign("center");
    let cellContent = dataCell.GetContent();
    let cellParagraph = cellContent.GetElement(0);
    cellParagraph.AddText(dataRows[i][j]);
    
    // Align first column (Code) to center, others to left
    if (j === 0) {
      cellParagraph.SetJc("center");
    } else {
      cellParagraph.SetJc("left");
    }
  }
}

// Add a title paragraph before the table
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Product Catalog - Fixed Width Table").SetBold(true).SetFontSize(16 * 2);
titleParagraph.SetJc("center");

// Add some spacing
let spacingParagraph = Api.CreateParagraph();
spacingParagraph.AddText(" ");
doc.Push(spacingParagraph);

// Add the table to the document
doc.Push(table);

// Add explanation paragraph
let explanationParagraph = Api.CreateParagraph();
explanationParagraph.AddText(" ");
doc.Push(explanationParagraph);

let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: ").SetBold(true);
noteParagraph.AddText("This table uses fixed column widths (100pt, 200pt, 150pt) to ensure consistent layout regardless of content length. This approach is ideal for contracts, legal forms, and technical specifications where predictable document structure is essential.");
doc.Push(noteParagraph);
```
