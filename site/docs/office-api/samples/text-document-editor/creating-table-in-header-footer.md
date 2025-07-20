# Creating table in header or footer

Create a document with a table in the footer that displays repeating company information on every page:

- create a footer section ([ApiSection/GetFooter](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/GetFooter.md));
- create a borderless table with company information ([Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiTablePr](/docs/office-api/usage-api/text-document-api/ApiTablePr/ApiTablePr.md));
- populate table cells with address, license, and contact details ([ApiTableCell](/docs/office-api/usage-api/text-document-api/ApiTableCell/ApiTableCell.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Get footer for all pages
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);

// Create a table with 1 row and 3 columns for footer information
let footerTable = Api.CreateTable(3, 1);
footerTable.SetWidth("percent", 100);

// Remove table borders for clean appearance
footerTable.SetTableBorderTop("none", 0, 0, 0, 0, 0);
footerTable.SetTableBorderBottom("none", 0, 0, 0, 0, 0);
footerTable.SetTableBorderLeft("none", 0, 0, 0, 0, 0);
footerTable.SetTableBorderRight("none", 0, 0, 0, 0, 0);
footerTable.SetTableBorderInsideH("none", 0, 0, 0, 0, 0);
footerTable.SetTableBorderInsideV("none", 0, 0, 0, 0, 0);

// Get the first (and only) row
let row = footerTable.GetRow(0);

// Configure first cell - Address (left aligned)
let addressCell = row.GetCell(0);
let addressContent = addressCell.GetContent();
let addressParagraph = addressContent.GetElement(0);
addressParagraph.AddText("123 Market Street");
addressParagraph.AddLineBreak();
addressParagraph.AddText("New York, NY 10001");
addressParagraph.SetJc("left");
addressParagraph.SetFontSize(9 * 2); // 9pt font size
addressParagraph.SetColor(100, 100, 100, false); // Gray color

// Configure second cell - License (center aligned)
let licenseCell = row.GetCell(1);
let licenseContent = licenseCell.GetContent();
let licenseParagraph = licenseContent.GetElement(0);
licenseParagraph.AddText("License No.");
licenseParagraph.AddLineBreak();
licenseParagraph.AddText("#LIC-2025-88");
licenseParagraph.SetJc("center");
licenseParagraph.SetFontSize(9 * 2); // 9pt font size
licenseParagraph.SetColor(100, 100, 100, false); // Gray color

// Configure third cell - Contact (right aligned)
let contactCell = row.GetCell(2);
let contactContent = contactCell.GetContent();
let contactParagraph = contactContent.GetElement(0);
contactParagraph.AddText("+1 (555) 987-6543");
contactParagraph.AddLineBreak();
contactParagraph.AddText("support@example.com");
contactParagraph.SetJc("right");
contactParagraph.SetFontSize(9 * 2); // 9pt font size
contactParagraph.SetColor(100, 100, 100, false); // Gray color

// Add the table to the footer
footer.AddElement(0, footerTable);

// Add some content to the document to demonstrate the footer
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Document Title").SetBold(true).SetFontSize(16 * 2);

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document demonstrates a table in the footer that will appear on every page. ");
paragraph2.AddText("The footer contains company information including address, license number, and contact details ");
paragraph2.AddText("arranged in a three-column layout without visible borders.");
doc.Push(paragraph2);

// Add more content to show footer on multiple pages
for (let i = 1; i <= 3; i++) {
  let sectionParagraph = Api.CreateParagraph();
  sectionParagraph.AddText(`Section ${i}`).SetBold(true).SetFontSize(12 * 2);
  doc.Push(sectionParagraph);
  
  let contentParagraph = Api.CreateParagraph();
  contentParagraph.AddText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
  contentParagraph.AddText("Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
  contentParagraph.AddText("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ");
  contentParagraph.AddText("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. ");
  contentParagraph.AddText("Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  doc.Push(contentParagraph);
  
  // Add page break except for the last section
  if (i < 3) {
    let pageBreakParagraph = Api.CreateParagraph();
    pageBreakParagraph.AddPageBreak();
    doc.Push(pageBreakParagraph);
  }
}
```
