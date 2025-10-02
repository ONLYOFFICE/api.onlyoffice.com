---
hide_table_of_contents: true
---

# Creating sales report with merged table cells

Create a professional sales report document with a table containing merged cells and proper formatting:

- create an empty document with a table ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- merge cells horizontally for header and total rows ([ApiTableRow/MergeCells](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/MergeCells.md))
- apply different text alignment and styling ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [ApiParagraph/SetBold](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md))
- populate the table with sales data ([ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Data arrays
let columnHeaders = ["Product", "Units Sold", "Revenue"];
let salesData = [
  ["Office Suite Premium", "120", "$4,800"],
  ["Cloud Collaboration Pack", "75", "$3,000"]
];

// Create a 5x3 table (header + column headers + 2 data rows + total)
let table = Api.CreateTable(3, 5);
table.SetWidth("percent", 100);

// Apply table styling
let tableStyle = doc.CreateStyle("SalesReportTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("TableGrid"));
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(200);
cellPr.SetCellMarginBottom(200);
cellPr.SetCellMarginLeft(200);
cellPr.SetCellMarginRight(200);
table.SetStyle(tableStyle);

// Row 1: Merged header cell
let headerRow = table.GetRow(0);
headerRow.MergeCells();
headerRow.SetBackgroundColor(240, 240, 240, false);
let headerCell = headerRow.GetCell(0);
let headerContent = headerCell.GetContent();
let headerParagraph = headerContent.GetElement(0);
headerParagraph.AddText("Sales Report – June 2025");
headerParagraph.SetBold(true);
headerParagraph.SetJc("center");

// Row 2: Column headers
let columnHeaderRow = table.GetRow(1);
columnHeaders.forEach((header, index) => {
  let cell = columnHeaderRow.GetCell(index);
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(header);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
});

// Rows 3-4: Sales data
salesData.forEach((rowData, rowIndex) => {
  let dataRow = table.GetRow(rowIndex + 2);
  rowData.forEach((cellData, cellIndex) => {
    let cell = dataRow.GetCell(cellIndex);
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(cellData);
    paragraph.SetJc(0 === cellIndex ? "left" : "center");
  });
});

// Row 5: Total row (merged)
let totalRow = table.GetRow(4);
totalRow.MergeCells();
totalRow.SetBackgroundColor(240, 240, 240, false);
let totalCell = totalRow.GetCell(0);
let totalContent = totalCell.GetContent();
let totalParagraph = totalContent.GetElement(0);
totalParagraph.AddText("Total Revenue: $7,800");
totalParagraph.SetBold(true);
totalParagraph.SetJc("right");

doc.Push(table);
```
