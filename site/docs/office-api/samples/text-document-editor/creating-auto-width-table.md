---
hide_table_of_contents: true
---

# Creating auto-width table

Create a document with a table that automatically adjusts column widths based on content:

- create a table without fixed column widths ([Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md));
- add header row with bold centered text ([ApiTableRow](/docs/office-api/usage-api/text-document-api/ApiTableRow/ApiTableRow.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- populate table with variable-length content that demonstrates auto-width behavior ([ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md));
- apply table formatting with borders and alignment ([ApiTable](/docs/office-api/usage-api/text-document-api/ApiTable/ApiTable.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create a 3-column, 4-row table
let table = Api.CreateTable(3, 4);

// Enable auto-width by not setting fixed widths
// The table will automatically adjust column widths based on content
table.SetTableBorderTop("single", 4, 0, 0, 0);
table.SetTableBorderBottom("single", 4, 0, 0, 0);
table.SetTableBorderLeft("single", 4, 0, 0, 0);
table.SetTableBorderRight("single", 4, 0, 0, 0);
table.SetTableBorderInsideH("single", 4, 0, 0, 0);
table.SetTableBorderInsideV("single", 4, 0, 0, 0);

// Header row data
let headers = ["Item", "Quantity", "Description"];

// Data rows with variable-length content
let data = [
  ["A123XZ", "1", "Lightweight aluminum frame"],
  ["B456MN", "12", "Industrial-grade bolts, 6mm"],
  ["C789TY", "2", "High-performance motor unit"]
];

// Format header row
let headerRow = table.GetRow(0);
for (let i = 0; i < 3; i++) {
  let cell = headerRow.GetCell(i);
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

// Add data rows
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    let cell = table.GetRow(row + 1).GetCell(col);
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(data[row][col]);
    
    // Center align quantity column
    if (col === 1) {
      paragraph.SetJc("center");
    }
  }
}

// Add the table to the document
doc.AddElement(0, table);

// Add a description paragraph
let descParagraph = Api.CreateParagraph();
descParagraph.AddText("The table above demonstrates auto-width columns that adjust to content length. ");
descParagraph.AddText("Notice how the 'Description' column is wider to accommodate longer text, ");
descParagraph.AddText("while the 'Quantity' column remains narrow for its numeric content.");
doc.Push(descParagraph);
```
