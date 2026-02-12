---
hide_table_of_contents: true
---

# Creating employee onboarding checklist

Creates an employee onboarding checklist form with document tracking:

- create text fields for employee information ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- create checkbox table for signed documents tracking ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md));
- style tables with custom borders ([ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md), [ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md), [ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md));
- use utility functions for consistent form creation ([ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Utility functions for form creation
function createTextForm(key, placeholder, maxCharacters, required) {
  return Api.CreateTextForm({
    key,
    required: required || false,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true,
  });
}

function createComboBox(key, placeholder, items, required) {
  return Api.CreateComboBoxForm({
    key,
    required: required || false,
    placeholder,
    editable: false,
    autoFit: true,
    items,
  });
}

function createCheckBox(key, tip, checked) {
  return Api.CreateCheckBoxForm({
    key,
    required: false,
    tip,
    checked: checked || false,
  });
}

function setBorders(table, r, g, b) {
  table.SetTableBorderTop("single", 4, 0, r, g, b);
  table.SetTableBorderBottom("single", 4, 0, r, g, b);
  table.SetTableBorderLeft("single", 4, 0, r, g, b);
  table.SetTableBorderRight("single", 4, 0, r, g, b);
  table.SetTableBorderInsideV("single", 4, 0, r, g, b);
  table.SetTableBorderInsideH("single", 4, 0, r, g, b);
}

function createTable(rows, cols, borderR, borderG, borderB) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setBorders(table, borderR, borderG, borderB);
  table.SetTableCellMarginTop(50);
  return table;
}

function getCellParagraph(table, row, col, width) {
  let cell = table.GetCell(row, col);
  if (width) {
    cell.SetWidth("twips", width);
  }
  return cell.GetContent().GetElement(0);
}

function addText(paragraph, text, fontSize, isBold, jc) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  if (jc) {
    paragraph.SetJc(jc);
  }
}

// Document title
let paragraph = doc.GetElement(0);
paragraph.AddText("EMPLOYEE ONBOARDING CHECKLIST");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Subtitle
paragraph = Api.CreateParagraph();
paragraph.AddText("New Hire Documentation & Orientation Tracking");
paragraph.SetFontSize(12 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
doc.Push(paragraph);

// Employee Information Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Employee Information");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let infoTable = createTable(4, 4, 100, 100, 100);
infoTable.GetRow(0).SetBackgroundColor(240, 240, 240, false);

// Row 0: Headers
paragraph = getCellParagraph(infoTable, 0, 0, 1500);
addText(paragraph, "Field", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 1, 3000);
addText(paragraph, "Value", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 2, 1500);
addText(paragraph, "Field", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 3, 3000);
addText(paragraph, "Value", 11 * 2, true, "center");

// Row 1: Name and Employee ID
paragraph = getCellParagraph(infoTable, 1, 0);
addText(paragraph, "Full Name:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 1, 1);
paragraph.AddElement(createTextForm("employee_name", "Enter full name", 50, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 1, 2);
addText(paragraph, "Employee ID:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 1, 3);
paragraph.AddElement(createTextForm("employee_id", "EMP-XXXX", 15, true));
paragraph.SetFontSize(11 * 2);

// Row 2: Department and Position
paragraph = getCellParagraph(infoTable, 2, 0);
addText(paragraph, "Department:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 2, 1);
paragraph.AddElement(createComboBox("department", "Select department",
  ["Human Resources", "Engineering", "Sales", "Marketing", "Finance", "Operations", "IT Support"], true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 2, 2);
addText(paragraph, "Position:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 2, 3);
paragraph.AddElement(createTextForm("position", "Job title", 40, true));
paragraph.SetFontSize(11 * 2);

// Row 3: Start Date and Manager
paragraph = getCellParagraph(infoTable, 3, 0);
addText(paragraph, "Start Date:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 3, 1);
paragraph.AddElement(createTextForm("start_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 3, 2);
addText(paragraph, "Manager:", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 3, 3);
paragraph.AddElement(createTextForm("manager_name", "Manager name", 40, false));
paragraph.SetFontSize(11 * 2);

doc.Push(infoTable);

// Required Documents Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Required Documents - Signed & Received");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let docsTable = createTable(9, 4, 50, 100, 150);
docsTable.GetRow(0).SetBackgroundColor(50, 100, 150, false);

// Header row
paragraph = getCellParagraph(docsTable, 0, 0, 4000);
addText(paragraph, "Document", 11 * 2, true, "left");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 1, 1200);
addText(paragraph, "Signed", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 2, 1200);
addText(paragraph, "Received", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 3, 2000);
addText(paragraph, "Date", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);

// Document rows
let documents = [
  "Employment Contract",
  "Non-Disclosure Agreement (NDA)",
  "Tax Forms (W-4 / W-9)",
  "Direct Deposit Authorization",
  "Emergency Contact Form",
  "Employee Handbook Acknowledgment",
  "IT Security Policy Agreement",
  "Benefits Enrollment Form"
];

for (let i = 0; i < documents.length; i++) {
  let rowIndex = i + 1;

  // Alternate row colors
  if (i % 2 === 1) {
    docsTable.GetRow(rowIndex).SetBackgroundColor(245, 248, 250, false);
  }

  // Document name
  paragraph = getCellParagraph(docsTable, rowIndex, 0);
  addText(paragraph, documents[i], 10 * 2, false, "left");

  // Signed checkbox
  paragraph = getCellParagraph(docsTable, rowIndex, 1);
  paragraph.AddElement(createCheckBox(`doc_${i}_signed`, `Mark when ${documents[i]} is signed`, false));
  paragraph.SetJc("center");

  // Received checkbox
  paragraph = getCellParagraph(docsTable, rowIndex, 2);
  paragraph.AddElement(createCheckBox(`doc_${i}_received`, `Mark when ${documents[i]} is received`, false));
  paragraph.SetJc("center");

  // Date field
  paragraph = getCellParagraph(docsTable, rowIndex, 3);
  paragraph.AddElement(createTextForm(`doc_${i}_date`, "DD.MM.YYYY", 10, false));
  paragraph.SetFontSize(10 * 2);
  paragraph.SetJc("center");
}

doc.Push(docsTable);

// Orientation Checklist Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Orientation Checklist");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let orientationTable = createTable(8, 3, 100, 150, 50);
orientationTable.GetRow(0).SetBackgroundColor(100, 150, 50, false);

// Header row
paragraph = getCellParagraph(orientationTable, 0, 0, 4500);
addText(paragraph, "Task", 11 * 2, true, "left");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(orientationTable, 0, 1, 1200);
addText(paragraph, "Completed", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(orientationTable, 0, 2, 2500);
addText(paragraph, "Notes", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);

// Orientation tasks
let orientationTasks = [
  "Office tour and facility introduction",
  "Workstation setup and equipment issued",
  "IT systems access and email setup",
  "Introduction to team members",
  "Review of company policies and procedures",
  "Safety and emergency procedures briefing",
  "Initial training schedule provided"
];

for (let i = 0; i < orientationTasks.length; i++) {
  let rowIndex = i + 1;

  // Alternate row colors
  if (i % 2 === 1) {
    orientationTable.GetRow(rowIndex).SetBackgroundColor(248, 252, 245, false);
  }

  // Task name
  paragraph = getCellParagraph(orientationTable, rowIndex, 0);
  addText(paragraph, orientationTasks[i], 10 * 2, false, "left");

  // Completed checkbox
  paragraph = getCellParagraph(orientationTable, rowIndex, 1);
  paragraph.AddElement(createCheckBox(`orientation_${i}_done`, `Mark when "${orientationTasks[i]}" is completed`, false));
  paragraph.SetJc("center");

  // Notes field
  paragraph = getCellParagraph(orientationTable, rowIndex, 2);
  paragraph.AddElement(createTextForm(`orientation_${i}_notes`, "Add notes", 50, false));
  paragraph.SetFontSize(10 * 2);
}

doc.Push(orientationTable);

// Signatures Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Signatures");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let signatureTable = createTable(2, 4, 80, 80, 80);

// Row labels and fields
paragraph = getCellParagraph(signatureTable, 0, 0, 1500);
addText(paragraph, "Employee:", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 0, 1, 3500);
paragraph.AddElement(createTextForm("employee_signature", "Employee signature", 40, true));
paragraph.SetFontSize(11 * 2);
paragraph = getCellParagraph(signatureTable, 0, 2, 800);
addText(paragraph, "Date:", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 0, 3, 2000);
paragraph.AddElement(createTextForm("employee_sign_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(signatureTable, 1, 0);
addText(paragraph, "HR Representative:", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 1, 1);
paragraph.AddElement(createTextForm("hr_signature", "HR signature", 40, true));
paragraph.SetFontSize(11 * 2);
paragraph = getCellParagraph(signatureTable, 1, 2);
addText(paragraph, "Date:", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 1, 3);
paragraph.AddElement(createTextForm("hr_sign_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

doc.Push(signatureTable);

// Footer note
paragraph = Api.CreateParagraph();
paragraph.AddText("This checklist must be completed within the first week of employment.");
paragraph.SetFontSize(10 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);
```
