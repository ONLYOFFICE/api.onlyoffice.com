---
hide_table_of_contents: true
---

# Creating borderless table document

Create a document with a borderless table for structured information display:

- create an empty document with a borderless table ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md))
- remove table borders to create a clean, text-like appearance ([ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTableCell/SetCellBorderTop](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/SetCellBorderTop.md))
- configure column alignment and formatting for labels and values ([ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md))
- populate the table with company information in a structured format ([ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create a 5x2 table for company information
let table = Api.CreateTable(2, 5);
table.SetWidth("percent", 100);

// Remove all table borders
table.SetTableBorderTop("none", 0, 0, 0, 0, 0);
table.SetTableBorderBottom("none", 0, 0, 0, 0, 0);
table.SetTableBorderLeft("none", 0, 0, 0, 0, 0);
table.SetTableBorderRight("none", 0, 0, 0, 0, 0);
table.SetTableBorderInsideH("none", 0, 0, 0, 0, 0);
table.SetTableBorderInsideV("none", 0, 0, 0, 0, 0);

// Set column widths: 40% for labels, 60% for values
table.GetRow(0).GetCell(0).SetWidth("percent", 40);
table.GetRow(0).GetCell(1).SetWidth("percent", 60);

// Company information data
let companyData = [
  ["Company name:", "Greenway Logistics"],
  ["Registration number:", "847362019"],
  ["Head office:", "72 Baker Street, London, UK"],
  ["Contact email:", "info@greenwaylog.com"],
  ["VAT ID:", "GB103947182"]
];

// Populate the table with company information
for (let i = 0; i < 5; i++) {
  let row = table.GetRow(i);
  
  // Remove cell borders
  for (let j = 0; j < 2; j++) {
    let cell = row.GetCell(j);
    cell.SetCellBorderTop("none", 0, 0, 0, 0, 0);
    cell.SetCellBorderBottom("none", 0, 0, 0, 0, 0);
    cell.SetCellBorderLeft("none", 0, 0, 0, 0, 0);
    cell.SetCellBorderRight("none", 0, 0, 0, 0, 0);
  }
  
  // Label cell (left column) - right aligned, bold
  let labelCell = row.GetCell(0);
  let labelContent = labelCell.GetContent();
  let labelParagraph = labelContent.GetElement(0);
  labelParagraph.AddText(companyData[i][0]).SetBold(true);
  labelParagraph.SetJc("right");
  
  // Value cell (right column) - left aligned
  let valueCell = row.GetCell(1);
  let valueContent = valueCell.GetContent();
  let valueParagraph = valueContent.GetElement(0);
  valueParagraph.AddText(companyData[i][1]);
  valueParagraph.SetJc("left");
}

// Add some spacing before the table
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Company Information").SetBold(true).SetFontSize(14 * 2);

// Add the table to the document
doc.Push(table);

// Add spacing after the table
let endParagraph = Api.CreateParagraph();
endParagraph.AddText("");
doc.Push(endParagraph);
```
