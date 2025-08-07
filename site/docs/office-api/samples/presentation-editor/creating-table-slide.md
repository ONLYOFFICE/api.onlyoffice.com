# Creating table slide

Create a slide with a formatted table for data presentation:

- get the first slide in the current presentation ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the slide background color ([Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiSlide/SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- create and position the slide title ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiShape/SetPosition](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetPosition.md), [ApiShape/GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md));
- create a table with specified dimensions ([Api/CreateTable](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateTable.md), [ApiTable/GetRow](/docs/office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md), [ApiTableRow/GetCell](/docs/office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md));
- format table headers with colored background ([ApiTableCell/SetShd](/docs/office-api/usage-api/presentation-api/ApiTableCell/Methods/SetShd.md), [ApiTableCell/GetContent](/docs/office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md));
- add content to table cells ([Api/CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [ApiParagraph/AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiDocumentContent/Push](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md));
- add the table to the slide ([ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).

```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

// Set neutral background color
let backgroundColor = Api.CreateRGBColor(248, 249, 250);
let backgroundFill = Api.CreateSolidFill(backgroundColor);
slide.SetBackground(backgroundFill);

// Create title shape
let titleShape = Api.CreateShape("rect", 8_000_000, 1_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape.SetPosition(572_000, 400_000);

// Get title content and clear it
let titleContent = titleShape.GetDocContent();
titleContent.RemoveAllElements();

// Create title paragraph
let titleParagraph = Api.CreateParagraph();
titleParagraph.SetJc("center");
let titleRun = titleParagraph.AddText("Quarterly Sales Report");

// Format title text (28pt, Bold, Center)
titleRun.SetFontSize(28 * 2); // Font size in half-points
titleRun.SetBold(true);
titleRun.SetFontFamily("Arial");
let titleColor = Api.CreateRGBColor(51, 51, 51); // Dark gray for title
let titleFill = Api.CreateSolidFill(titleColor);
titleRun.SetFill(titleFill);

titleContent.Push(titleParagraph);
slide.AddObject(titleShape);

// Create table (4 columns × 5 rows)
let table = Api.CreateTable(4, 5);
table.SetPosition(1_000_000, 1_800_000);

// Define table headers
let headers = ["Quarter", "Revenue", "Expenses", "Profit"];

// Define table data
let tableData = [
  ["Q1 2024", "$125,000", "$85,000", "$40,000"],
  ["Q2 2024", "$142,000", "$92,000", "$50,000"],
  ["Q3 2024", "$158,000", "$98,000", "$60,000"],
  ["Q4 2024", "$175,000", "$105,000", "$70,000"]
];

// Format header row with blue background and white text
let headerRow = table.GetRow(0);
let headerColor = Api.CreateRGBColor(54, 96, 146); // Blue background
let headerFill = Api.CreateSolidFill(headerColor);

for (let i = 0; i < headers.length; i++) {
  let headerCell = headerRow.GetCell(i);
  
  // Set blue background for header
  headerCell.SetShd(headerFill);
  
  // Get cell content and add text
  let cellContent = headerCell.GetContent();
  cellContent.RemoveAllElements();
  
  let cellParagraph = Api.CreateParagraph();
  cellParagraph.SetJc("center");
  let cellRun = cellParagraph.AddText(headers[i]);
  
  // Format header text (14pt, Bold, White)
  cellRun.SetFontSize(14 * 2); // Font size in half-points
  cellRun.SetBold(true);
  cellRun.SetFontFamily("Arial");
  let whiteColor = Api.CreateRGBColor(255, 255, 255); // White text
  let whiteFill = Api.CreateSolidFill(whiteColor);
  cellRun.SetFill(whiteFill);
  
  cellContent.Push(cellParagraph);
}

// Fill data rows
let textColor = Api.CreateRGBColor(68, 68, 68); // Dark gray for data
let textFill = Api.CreateSolidFill(textColor);

for (let rowIndex = 0; rowIndex < tableData.length; rowIndex++) {
  let dataRow = table.GetRow(rowIndex + 1); // +1 because first row is header
  
  for (let colIndex = 0; colIndex < tableData[rowIndex].length; colIndex++) {
    let dataCell = dataRow.GetCell(colIndex);
    
    // Get cell content and add text
    let cellContent = dataCell.GetContent();
    cellContent.RemoveAllElements();
    
    let cellParagraph = Api.CreateParagraph();
    // Center align first column (Quarter), left align others
    cellParagraph.SetJc(colIndex === 0 ? "center" : "left");
    let cellRun = cellParagraph.AddText(tableData[rowIndex][colIndex]);
    
    // Format data text (14pt, Regular)
    cellRun.SetFontSize(14 * 2); // Font size in half-points
    cellRun.SetBold(false);
    cellRun.SetFontFamily("Arial");
    cellRun.SetFill(textFill);
    
    cellContent.Push(cellParagraph);
  }
}

// Add table to slide
slide.AddObject(table);
```
