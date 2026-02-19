---
hide_table_of_contents: true
---

# Creating feedback form

Creates a customer feedback form with rating tables:

- create bordered tables for rating scale layout ([Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md), [ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md), [ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md));
- add radio button options for each satisfaction level ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md));
- style table headers with background color ([ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Helper function to set table borders
function setBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

// Helper function to get paragraph from table cell
function getCellParagraph(table, row, col) {
  return table.GetCell(row, col).GetContent().GetElement(0);
}

// Helper function to create a rating table for a question
function createRatingTable(questionText, radioGroupName) {
  let ratingLabels = ["Excellent", "Good", "Average", "Poor", "Very poor"];

  // Question paragraph
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(300);
  doc.Push(questionPara);

  // Create rating table (2 rows: header + radio buttons)
  let table = Api.CreateTable(5, 2);
  table.SetWidth("percent", 100);
  setBorders(table, 150);
  table.SetTableCellMarginTop(80);
  table.SetTableCellMarginBottom(80);

  // Style header row
  table.GetRow(0).SetBackgroundColor(240, 240, 240, false);

  // Add rating labels to header row
  for (let i = 0; i < ratingLabels.length; i++) {
    let para = getCellParagraph(table, 0, i);
    para.AddText(ratingLabels[i]);
    para.SetFontSize(10 * 2);
    para.SetBold(true);
    para.SetJc("center");
  }

  // Add radio buttons to second row
  for (let i = 0; i < ratingLabels.length; i++) {
    let para = getCellParagraph(table, 1, i);

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_" + String.fromCharCode(65 + i),
      tip: "Select " + ratingLabels[i],
      required: false,
      radio: true
    });
    radioButton.SetRadioGroup(radioGroupName);

    para.AddElement(radioButton);
    para.SetJc("center");
  }

  doc.Push(table);
}

// Create form title
let paragraph = doc.GetElement(0);
paragraph.AddText("Customer Feedback Form");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Add form description
paragraph = Api.CreateParagraph();
paragraph.AddText("Please rate your experience with our support team.");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(150);
doc.Push(paragraph);

// Question 1: Issue resolution
createRatingTable(
  "1. How satisfied are you with the resolution of your issue?",
  "issue_resolution"
);

// Question 2: Support clarity
createRatingTable(
  "2. How clear was the support provided?",
  "support_clarity"
);

// Question 3: Ease of getting help
createRatingTable(
  "3. How easy was it to get help?",
  "ease_of_help"
);

// Additional comments section
paragraph = Api.CreateParagraph();
paragraph.AddText("Additional Comments:");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
let commentsForm = Api.CreateTextForm({
  key: "additional_comments",
  required: false,
  placeholder: "Enter your comments here...",
  maxCharacters: 500,
  multiLine: true,
  autoFit: false,
});
paragraph.AddElement(commentsForm);
doc.Push(paragraph);

// Thank you message
paragraph = Api.CreateParagraph();
paragraph.AddText("Thank you for your feedback!");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);
```
