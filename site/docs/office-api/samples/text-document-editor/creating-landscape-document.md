# Creating landscape document

Create a document with landscape page orientation for displaying wide tables, charts, or content that requires more horizontal space:

- create a new section with landscape orientation ([Api/GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [ApiDocument/CreateSection](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateSection.md), [ApiSection/SetPageSize](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageSize.md))
- create a wide table with multiple columns ([Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiTable/SetWidth](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetWidth.md))
- style the table with headers and data formatting ([ApiDocument/CreateStyle](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateStyle.md), [ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md))
- optionally return to portrait orientation for subsequent content ([ApiDocument/CreateSection](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateSection.md))

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Add title in portrait mode
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Quarterly Performance Report");
titleParagraph.SetFontSize(24);
titleParagraph.SetBold(true);
titleParagraph.SetJc("center");

// Add description
let descParagraph = Api.CreateParagraph();
descParagraph.AddText("The following table displays departmental KPI data across multiple quarters. Due to the wide format, this section uses landscape orientation.");
descParagraph.SetSpacingAfter(400);
doc.Push(descParagraph);

// Create the first section with portrait orientation
let firstSection = doc.CreateSection(descParagraph);
firstSection.SetPageSize(12240, 15840); // Portrait: 8.5" x 11" (width x height)
firstSection.SetPageMargins(720, 720, 720, 720); // 0.5 inch margins

// Table headers and data
let headers = ["Department", "KPI 1", "KPI 2", "KPI 3", "Q1 Total", "Q2 Total", "Notes"];
let data = [
  ["Sales", "92%", "87%", "95%", "$1.2M", "$1.35M", ""],
  ["Marketing", "85%", "90%", "88%", "$850K", "$940K", "Stable"],
  ["Support", "75%", "80%", "78%", "$430K", "$500K", "Needs improvement"],
  ["DevTeam", "98%", "96%", "99%", "$1.7M", "$1.85M", ""]
];

// Create table with 7 columns and 5 rows (1 header + 4 data rows)
let table = Api.CreateTable(7, 5);
table.SetWidth("percent", 100);
table.SetJc("center");

// Create custom table style
let tableStyle = doc.CreateStyle("LandscapeTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(200);
cellPr.SetCellMarginBottom(200);
cellPr.SetCellMarginLeft(200);
cellPr.SetCellMarginRight(200);
table.SetStyle(tableStyle);

// Style header row
let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(47, 84, 150, false);
for (let i = 0; i < 7; i++) {
  let cell = headerRow.GetCell(i);
  cell.SetVerticalAlign("center");
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetColor(255, 255, 255, false);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
  paragraph.SetFontSize(22);
}

// Fill data rows
for (let i = 0; i < 4; i++) {
  let row = table.GetRow(i + 1);
  // Alternate row colors
  let bgColor = i % 2 === 0 ? 240 : 250;
  row.SetBackgroundColor(bgColor, bgColor, bgColor, false);
  
  for (let j = 0; j < 7; j++) {
    let cell = row.GetCell(j);
    cell.SetVerticalAlign("center");
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(data[i][j]);
    paragraph.SetJc("center");
    paragraph.SetFontSize(20);
    
    // Color coding for KPI values
    if (j >= 1 && j <= 3 && data[i][j].includes("%")) {
      let value = parseInt(data[i][j]);
      if (value >= 90) {
        paragraph.SetColor(0, 128, 0, false); // Green for excellent
      } else if (value >= 80) {
        paragraph.SetColor(255, 165, 0, false); // Orange for good
      } else {
        paragraph.SetColor(255, 0, 0, false); // Red for needs improvement
      }
    }
    
    // Bold department names
    if (j === 0) {
      paragraph.SetBold(true);
    }
  }
}

// Add table to document
doc.Push(table);

// Add spacing after table
let spacingParagraph = Api.CreateParagraph();
spacingParagraph.SetSpacingAfter(400);
doc.Push(spacingParagraph);

// Create the second section with landscape orientation
let secondSection = doc.CreateSection(spacingParagraph);
secondSection.SetPageSize(15840, 12240); // Landscape: 11" x 8.5" (width x height)
secondSection.SetPageMargins(1440, 1440, 1440, 1440); // 1 inch margins

// Add conclusion in portrait mode
let conclusionParagraph = Api.CreateParagraph();
conclusionParagraph.AddText("Analysis Summary");
conclusionParagraph.SetFontSize(18);
conclusionParagraph.SetBold(true);
conclusionParagraph.SetSpacingAfter(200);
doc.Push(conclusionParagraph);

let summaryParagraph = Api.CreateParagraph();
summaryParagraph.AddText("The landscape orientation allows for optimal display of wide tabular data. The DevTeam shows consistently high performance across all KPIs, while the Support department requires attention to improve metrics. This format is ideal for executive reports and data presentations where horizontal space is crucial.");
doc.Push(summaryParagraph);
```
