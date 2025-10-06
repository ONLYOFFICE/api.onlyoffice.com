---
hide_table_of_contents: true
---

# Creating nested table document

Create a document with nested tables (table within a table) for displaying hierarchical data:

- create a main table with general information ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md));
- insert a nested table within a cell of the main table ([ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md));
- format both tables with different styles and borders ([ApiTable](/docs/office-api/usage-api/text-document-api/ApiTable/ApiTable.md), [ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md));
- populate tables with hierarchical data such as orders with item details ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create main table (3 rows, 2 columns)
let mainTable = Api.CreateTable(2, 3);
mainTable.SetWidth("percent", 100);

// Style the main table
let mainTableStyle = doc.CreateStyle("MainTableStyle", "table");
mainTableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let mainCellPr = mainTableStyle.GetTableCellPr();
mainCellPr.SetCellMarginTop(80);
mainCellPr.SetCellMarginBottom(80);
mainCellPr.SetCellMarginLeft(80);
mainCellPr.SetCellMarginRight(80);
mainTable.SetStyle(mainTableStyle);

// Fill main table header row
let headerRow = mainTable.GetRow(0);
headerRow.SetBackgroundColor(75, 136, 209, false);

// First column header
let headerCell1 = headerRow.GetCell(0);
let headerContent1 = headerCell1.GetContent();
let headerPara1 = headerContent1.GetElement(0);
headerPara1.AddText("Field");
headerPara1.SetColor(255, 255, 255, false);
headerPara1.SetBold(true);
headerPara1.SetJc("center");

// Second column header
let headerCell2 = headerRow.GetCell(1);
let headerContent2 = headerCell2.GetContent();
let headerPara2 = headerContent2.GetElement(0);
headerPara2.AddText("Value / Sub-table");
headerPara2.SetColor(255, 255, 255, false);
headerPara2.SetBold(true);
headerPara2.SetJc("center");

// Fill first data row - Order ID
let row1 = mainTable.GetRow(1);
row1.SetBackgroundColor(245, 245, 245, false);

let cell1_1 = row1.GetCell(0);
let content1_1 = cell1_1.GetContent();
let para1_1 = content1_1.GetElement(0);
para1_1.AddText("Order ID");
para1_1.SetBold(true);

let cell1_2 = row1.GetCell(1);
let content1_2 = cell1_2.GetContent();
let para1_2 = content1_2.GetElement(0);
para1_2.AddText("ORD-2025-0081");

// Fill second data row - Date
let row2 = mainTable.GetRow(2);
row2.SetBackgroundColor(225, 225, 225, false);

let cell2_1 = row2.GetCell(0);
let content2_1 = cell2_1.GetContent();
let para2_1 = content2_1.GetElement(0);
para2_1.AddText("Date");
para2_1.SetBold(true);

let cell2_2 = row2.GetCell(1);
let content2_2 = cell2_2.GetContent();
let para2_2 = content2_2.GetElement(0);
para2_2.AddText("2025-06-21");

// Add a new row for the nested table
mainTable.AddRow();
let row3 = mainTable.GetRow(3);
row3.SetBackgroundColor(245, 245, 245, false);

let cell3_1 = row3.GetCell(0);
let content3_1 = cell3_1.GetContent();
let para3_1 = content3_1.GetElement(0);
para3_1.AddText("Items");
para3_1.SetBold(true);

// Create nested table (3 rows, 3 columns) for items
let nestedTable = Api.CreateTable(3, 3);
nestedTable.SetWidth("percent", 95);

// Style the nested table with thinner borders
let nestedTableStyle = doc.CreateStyle("NestedTableStyle", "table");
nestedTableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let nestedCellPr = nestedTableStyle.GetTableCellPr();
nestedCellPr.SetCellMarginTop(40);
nestedCellPr.SetCellMarginBottom(40);
nestedCellPr.SetCellMarginLeft(40);
nestedCellPr.SetCellMarginRight(40);
nestedTable.SetStyle(nestedTableStyle);

// Fill nested table headers
let nestedHeaderRow = nestedTable.GetRow(0);
nestedHeaderRow.SetBackgroundColor(100, 150, 200, false);

let nestedHeaders = ["Item", "Qty", "Price"];
for (let i = 0; i < 3; i++) {
  let nestedHeaderCell = nestedHeaderRow.GetCell(i);
  let nestedHeaderContent = nestedHeaderCell.GetContent();
  let nestedHeaderPara = nestedHeaderContent.GetElement(0);
  nestedHeaderPara.AddText(nestedHeaders[i]);
  nestedHeaderPara.SetColor(255, 255, 255, false);
  nestedHeaderPara.SetBold(true);
  nestedHeaderPara.SetJc("center");
}

// Fill nested table data
let itemsData = [
  ["Office License", "2", "$120"],
  ["Cloud Pack", "1", "$60"]
];

for (let i = 0; i < 2; i++) {
  let nestedRow = nestedTable.GetRow(i + 1);
  let bgColor = i % 2 === 0 ? 250 : 240;
  nestedRow.SetBackgroundColor(bgColor, bgColor, bgColor, false);
  
  for (let j = 0; j < 3; j++) {
    let nestedCell = nestedRow.GetCell(j);
    let nestedContent = nestedCell.GetContent();
    let nestedPara = nestedContent.GetElement(0);
    nestedPara.AddText(itemsData[i][j]);
    if (j === 1 || j === 2) {
      nestedPara.SetJc("center");
    }
    if (j === 2) {
      nestedPara.SetBold(true);
      nestedPara.SetColor(0, 100, 0, false);
    }
  }
}

// Insert the nested table into the main table cell
let cell3_2 = row3.GetCell(1);
cell3_2.AddElement(0, nestedTable);

// Add the main table to the document
doc.AddElement(0, mainTable);

let summaryPara = Api.CreateParagraph();
summaryPara.AddText("Summary: ").SetBold(true);
summaryPara.AddText("This example demonstrates how to create nested tables for hierarchical data display. ");
summaryPara.AddText("The main table contains general order information, while the nested table shows detailed item breakdown. ");
summaryPara.AddText("This structure is ideal for invoices, commercial proposals, and detailed reports.");
doc.Push(summaryPara);
```
