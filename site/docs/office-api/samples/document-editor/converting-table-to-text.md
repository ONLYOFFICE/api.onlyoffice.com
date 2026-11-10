---
hide_table_of_contents: true
description: Convert table rows into formatted text paragraphs.
tags: ["Docs", "Office API", "Documents"]
---

# Converting table to text

Convert table data into formatted text for final document presentation. This is useful for letters, printed versions, legal statements, or simplified templates when tabular data needs to be displayed as regular text:

- read the table content row by row ([ApiTable](/docs/office-api/usage-api/document-api/ApiTable/ApiTable.md), [ApiTableRow](/docs/office-api/usage-api/document-api/ApiTableRow/ApiTableRow.md), [ApiTableCell/GetText](/docs/office-api/usage-api/document-api/ApiTableCell/Methods/GetText.md));
- combine the header and cell values of each row into a text paragraph ([ApiParagraph](/docs/office-api/usage-api/document-api/ApiParagraph/ApiParagraph.md));
- insert the result into the document and optionally remove the original table ([ApiDocument](/docs/office-api/usage-api/document-api/ApiDocument/ApiDocument.md), [ApiTable/Delete](/docs/office-api/usage-api/document-api/ApiTable/Methods/Delete.md)).

Set `removeTable` to `true` to remove the table after converting it.

```ts editor-docx zoom=60
let removeTable = false;
let doc = Api.GetDocument();

// Create initial table with sample data
let headers = ["Product", "Price", "Quantity"];
let data = [
  ["Widget Alpha", "12.99", "10"],
  ["Widget Beta", "15.49", "5"]
];

let dataRows = data.length;
let colsCount = headers.length;

let table = Api.CreateTable(1 + dataRows, colsCount);
table.SetStyle(doc.GetStyle("Bordered"));
table.SetWidth("percent", 100);

// Populate the table
let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(Api.RGB(75, 136, 209));
for (let i = 0; i < colsCount; i++) {
  let cell = headerRow.GetCell(i);
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetColor(Api.RGB(255, 255, 255));
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

for (let i = 0; i < dataRows; i++) {
  let row = table.GetRow(i + 1);
  for (let j = 0; j < colsCount; j++) {
    let cell = row.GetCell(j);
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(data[i][j]);
    paragraph.SetJc("center");
  }
}

doc.Push(table);

// Convert table to text
let titleParagraph = Api.CreateParagraph();
titleParagraph.AddText("Shipping Summary");
titleParagraph.SetBold(true);
titleParagraph.SetFontSize(16 * 2);
titleParagraph.SetSpacingBefore(400);
titleParagraph.SetSpacingAfter(200);
doc.Push(titleParagraph);

let introParagraph = Api.CreateParagraph();
introParagraph.AddText("The following items are included in the order:");
introParagraph.SetSpacingAfter(200);
doc.Push(introParagraph);

// Returns the cell text without the trailing cell or row separator
function getCellText(cell) {
  return cell.GetText({ TableCellSeparator: "", TableRowSeparator: "", Numbering: false });
}

// Read data from the table and convert to formatted text
let rowCount = table.GetRowsCount();
let tableHeaderRow = table.GetRow(0);
let colCount = tableHeaderRow.GetCellsCount();

// Get headers from the table
let tableHeaders = [];
for (let j = 0; j < colCount; j++) {
  tableHeaders.push(getCellText(tableHeaderRow.GetCell(j)));
}

// Convert each data row to formatted text
for (let i = 1; i < rowCount; i++) { // Skip header row (index 0)
  let row = table.GetRow(i);
  let textParagraph = Api.CreateParagraph();

  let formattedParts = [];
  let rowCellCount = row.GetCellsCount();
  for (let j = 0; j < rowCellCount; j++) {
    let cellText = getCellText(row.GetCell(j));
    formattedParts.push(`${tableHeaders[j]}: ${cellText}`);
  }

  let formattedText = formattedParts.join(", ");
  textParagraph.AddText(formattedText);
  textParagraph.SetItalic(true);
  doc.Push(textParagraph);
}

let closingParagraph = Api.CreateParagraph();
closingParagraph.AddText("Please confirm that all items match your purchase request.");
closingParagraph.SetSpacingBefore(200);
doc.Push(closingParagraph);

if (removeTable) {
  table.Delete();
}
```
