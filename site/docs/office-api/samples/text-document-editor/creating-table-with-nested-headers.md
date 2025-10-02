---
hide_table_of_contents: true
---

# Creating table with nested headers

Create a document with a table containing nested headers and merged cells. This structure is commonly used in analytical reports, plans, revenue tables, and activity reports where headers need to be grouped by periods, regions, categories, etc. The top cells are merged horizontally to span multiple subcategories:

- create an empty document with a table ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- merge cells horizontally to create nested header structure ([ApiTable/MergeCells](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/MergeCells.md))
- apply custom styling to header rows ([ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md), [ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md))
- populate the table with data organized under the nested headers.

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create a 4x4 table (4 rows, 4 columns)
let table = Api.CreateTable(4, 4);
table.SetWidth("percent", 100);

// Create custom table style
let tableStyle = doc.CreateStyle("NestedHeaderTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(60);
cellPr.SetCellMarginBottom(60);
cellPr.SetCellMarginLeft(120);
cellPr.SetCellMarginRight(120);
table.SetStyle(tableStyle);

// First row - main headers with merged cells
let headerRow1 = table.GetRow(0);
headerRow1.SetBackgroundColor(52, 73, 94, false);

// First cell: "Product"
let cell00 = headerRow1.GetCell(0);
cell00.SetVerticalAlign("center");
let content00 = cell00.GetContent();
let paragraph00 = content00.GetElement(0);
paragraph00.AddText("Product");
paragraph00.SetColor(255, 255, 255, false);
paragraph00.SetBold(true);
paragraph00.SetJc("center");

// Merge cells for "2025" header (cells 1, 2, 3 in first row)
let cell01 = headerRow1.GetCell(1);
let cell02 = headerRow1.GetCell(2);
let cell03 = headerRow1.GetCell(3);
let mergedCell = table.MergeCells([cell01, cell02, cell03]);
mergedCell.SetVerticalAlign("center");
let content01 = mergedCell.GetContent();
let paragraph01 = content01.GetElement(0);
paragraph01.AddText("2025");
paragraph01.SetColor(255, 255, 255, false);
paragraph01.SetBold(true);
paragraph01.SetJc("center");

// Second row - sub headers
let headerRow2 = table.GetRow(1);
headerRow2.SetBackgroundColor(93, 109, 126, false);

// Empty cell under "Product"
let cell10 = headerRow2.GetCell(0);
cell10.SetVerticalAlign("center");
let content10 = cell10.GetContent();
let paragraph10 = content10.GetElement(0);
paragraph10.AddText("");

// Quarter headers
let quarters = ["Q1", "Q2", "Q3"];
for (let i = 0; i < 3; i++) {
  let cell = headerRow2.GetCell(i + 1);
  cell.SetVerticalAlign("center");
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(quarters[i]);
  paragraph.SetColor(255, 255, 255, false);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

// Data rows
let products = ["Office Suite", "Cloud Pack"];
let data = [
  [120, 150, 175],
  [80, 90, 110]
];

for (let i = 0; i < 2; i++) {
  let row = table.GetRow(i + 2);
  let byte = i % 2 === 0 ? 236 : 250;
  row.SetBackgroundColor(byte, byte, byte, false);
  
  // Product name
  let productCell = row.GetCell(0);
  productCell.SetVerticalAlign("center");
  let productContent = productCell.GetContent();
  let productParagraph = productContent.GetElement(0);
  productParagraph.AddText(products[i]);
  productParagraph.SetBold(true);
  productParagraph.SetJc("left");
  
  // Data values
  for (let j = 0; j < 3; j++) {
    let dataCell = row.GetCell(j + 1);
    dataCell.SetVerticalAlign("center");
    let dataContent = dataCell.GetContent();
    let dataParagraph = dataContent.GetElement(0);
    dataParagraph.AddText(data[i][j].toString());
    dataParagraph.SetJc("center");
  }
}

// Add title paragraph before the table
let titleParagraph = doc.GetElement(0);;
titleParagraph.AddText("Quarterly Revenue Report").SetBold(true).SetFontSize(16 * 2);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(400);
doc.Push(titleParagraph);

doc.Push(table);

// Add explanation paragraph after the table
let explanationParagraph = Api.CreateParagraph();
explanationParagraph.SetSpacingBefore(400);
explanationParagraph.AddText("Table structure explanation:").SetBold(true);
explanationParagraph.AddLineBreak();
explanationParagraph.AddText("• The main header '2025' spans across three quarters (Q1, Q2, Q3)");
explanationParagraph.AddLineBreak();
explanationParagraph.AddText("• Each product row shows revenue data for the respective quarters");
explanationParagraph.AddLineBreak();
explanationParagraph.AddText("• This nested header structure is ideal for grouping related data categories");
doc.Push(explanationParagraph);
```
