# Creating advanced form

Create an advanced form with a table structure:

- create a new document, create tables for the text and form inputs ([Api/CreateParagraph](../text-document-api/Api/Methods/CreateParagraph.md), [Api/CreateTable](../text-document-api/Api/Methods/CreateTable.md), [ApiDocument/Push](../text-document-api/ApiDocument/Methods/Push.md), [ApiDocumentContent/GetElement](../text-document-api/ApiDocumentContent/Methods/GetElement.md), [ApiParagraph/AddText](../text-document-api/ApiParagraph/Methods/AddText.md), [ApiTable/GetRow](../text-document-api/ApiTable/Methods/GetRow.md), [ApiTableCell/GetContent](../text-document-api/ApiTableCell/Methods/GetContent.md), [ApiTable/GetCell](../text-document-api/ApiTable/Methods/GetCell.md));
- style tables ([ApiTable/SetTableBorderTop](../text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTable/SetTableBorderBottom](../text-document-api/ApiTable/Methods/SetTableBorderBottom.md), [ApiTable/SetTableBorderLeft](../text-document-api/ApiTable/Methods/SetTableBorderLeft.md), [ApiTable/SetTableBorderRight](../text-document-api/ApiTable/Methods/SetTableBorderRight.md), [ApiTable/SetWidth](../text-document-api/ApiTable/Methods/SetWidth.md), [ApiTableRow/SetBackgroundColor](../text-document-api/ApiTableRow/Methods/SetBackgroundColor.md));
- create the text and image forms and add them to the tables ([Api/CreatePictureForm](../form-api/Api/Methods/CreatePictureForm.md), [Api/CreateTextForm](../form-api/Api/Methods/CreateTextForm.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework/builder-framework-samples/builder-framework-samples.md) page.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

function addTextFormToParagraph(paragraph, fontSize, key, placeholder, maxCharacters, jc, comb, border) {
  let textForm = Api.CreateTextForm({
    key,
    required: false,
    comb,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true,
  });
  
  if (border) {
    textForm.SetBorderColor(200, 200, 200);
  }
  
  paragraph.AddElement(textForm);
  paragraph.SetFontSize(fontSize);
  paragraph.SetJc(jc);
}

function setBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

function addTextToParagraph(paragraph, text, fontSize, isBold, jc) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  paragraph.SetJc(jc);
}

function getTableCellParagraph(table, row, col, width) {
  let cell = table.GetCell(row, col);
  cell.SetWidth("twips", width);
  return cell.GetContent().GetElement(0);
}

function createFullWidthTable(rows, cols, borderColor, marginTop) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setBorders(table, borderColor);
  table.SetTableCellMarginTop(marginTop);
  return table;
}

let table = createFullWidthTable(1, 3, 255, 100);
let paragraph = getTableCellParagraph(table, 0, 0, 4320);
addTextToParagraph(paragraph, "PURCHASE ORDER", 36, true);
paragraph = getTableCellParagraph(table, 0, 1, 720);
addTextToParagraph(paragraph, "Serial #", 25, false, "right");
paragraph = getTableCellParagraph(table, 0, 2, 1440);
addTextFormToParagraph(paragraph, 25, "Serial", " ", 5, "left", true);
doc.Push(table);

paragraph = Api.CreateParagraph();
let pictureForm = Api.CreatePictureForm({
  key: "Photo",
  tip: "Upload Company Logo",
  required: false,
  placeholder: "Photo",
  scaleFlag: "tooBig",
  lockAspectRatio: false,
  respectBorders: false,
});
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addTextFormToParagraph(paragraph, 35, "Company Name", "Company Name", 50, "left");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addTextToParagraph(paragraph, "Date: ", 25);
addTextFormToParagraph(paragraph, 35, "Date", "DD.MM.YYYY", 10, "left", true, true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addTextToParagraph(paragraph, "To:", 35, true);
doc.Push(paragraph);

table = createFullWidthTable(1, 1, 200, 100);
paragraph = getTableCellParagraph(table, 0, 0);
addTextFormToParagraph(paragraph, 30, "Recipient", "Recipient", 32, "left", true);
doc.Push(table);

table = createFullWidthTable(10, 2, 200, 100);
table.GetRow(0).SetBackgroundColor(245, 245, 245, false);
let cell = table.GetCell(0, 0);
cell.SetWidth("percent", 30);
paragraph = getTableCellParagraph(table, 0, 0);
addTextToParagraph(paragraph, "Qty.", 30, true);
paragraph = getTableCellParagraph(table, 0, 1);
addTextToParagraph(paragraph, "Description", 30, true);

for (let i = 1; i < 10; i += 1) {
  paragraph = getTableCellParagraph(table, i, 0);
  addTextFormToParagraph(paragraph, 30, `Qty${i}`, " ", 9, "left", true);
  paragraph = getTableCellParagraph(table, i, 1);
  addTextFormToParagraph(paragraph, 30, `Description${i}`, " ", 22, "left", true);
}
doc.Push(table);
```
