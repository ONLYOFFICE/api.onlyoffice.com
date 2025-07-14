# Converting table to text

Convert table data into formatted text for final document presentation. This is useful for letters, printed versions, legal statements, or simplified templates when tabular data needs to be displayed as regular text.

The implementation process includes:

- reading table content row by row ([ApiTable](/docs/office-api/usage-api/text-document-api/ApiTable/ApiTable.md), [ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md))
- formatting text strings by combining values with commas, tabs, or template phrases ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md))
- inserting the result into the document and optionally removing the original table ([ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md))

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create initial table with sample data
let headers = ["Product", "Price", "Quantity"];
let data = [
  ["Widget Alpha", "12.99", "10"],
  ["Widget Beta", "15.49", "5"]
];

let dataRows = data.length;
let colsCount = headers.length;

let table = Api.CreateTable(colsCount, 1 + dataRows);
table.SetWidth("percent", 100);

// Populate the table
let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(75, 136, 209, false);
for (let i = 0; i < colsCount; i++) {
  let cell = headerRow.GetCell(i);
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetColor(255, 255, 255, false);
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

// Add some spacing
let spaceParagraph = Api.CreateParagraph();
spaceParagraph.AddLineBreak();
doc.Push(spaceParagraph);

// Convert table to text
let titleParagraph = Api.CreateParagraph();
titleParagraph.AddText("Shipping Summary");
titleParagraph.SetBold(true);
titleParagraph.SetFontSize(16 * 2);
doc.Push(titleParagraph);

let introParagraph = Api.CreateParagraph();
introParagraph.AddLineBreak();
introParagraph.AddText("The following items are included in the order:");
doc.Push(introParagraph);

let emptyParagraph = Api.CreateParagraph();
emptyParagraph.AddLineBreak();
doc.Push(emptyParagraph);

// Read data from the table and convert to formatted text
let rowCount = table.GetRowsCount();
let tableHeaderRow = table.GetRow(0);
let colCount = tableHeaderRow.GetCellsCount();

// Get headers from the table
let tableHeaders = [];
for (let j = 0; j < colCount; j++) {
  let headerCell = tableHeaderRow.GetCell(j);
  let headerContent = headerCell.GetContent();
  let headerText = headerContent.GetElement(0).GetText();
  tableHeaders.push(headerText);
}

// Convert each data row to formatted text
for (let i = 1; i < rowCount; i++) { // Skip header row (index 0)
  let row = table.GetRow(i);
  let textParagraph = Api.CreateParagraph();
  
  let formattedParts = [];
  let rowCellCount = row.GetCellsCount();
  for (let j = 0; j < rowCellCount; j++) {
    let cell = row.GetCell(j);
    let content = cell.GetContent();
    let cellText = content.GetText();
    formattedParts.push(`${tableHeaders[j]}: ${cellText}`);
  }
  
  let formattedText = formattedParts.join(", ");
  textParagraph.AddText(formattedText);
  textParagraph.SetItalic(true);
  doc.Push(textParagraph);
}

let closingParagraph = Api.CreateParagraph();
closingParagraph.AddLineBreak();
closingParagraph.AddText("Please confirm that all items match your purchase request.");
doc.Push(closingParagraph);
```
