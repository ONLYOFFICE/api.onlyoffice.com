# Create onboarding form

This example demonstrates how to create an onboarding checklist form using the ONLYOFFICE Office API. The script generates a document with text fields, a date field, and checkboxes for signed documents using structured tables.

```ts editor-pdf zoom=60
const doc = Api.GetDocument();

// Step 1: Utilities
function addTextFormToParagraph(paragraph, fontSize, key, placeholder, maxCharacters, jc, comb, showBorder) {
  const textForm = Api.CreateTextForm({
    key,
    required: false,
    comb,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true
  });

  if (showBorder) {
    textForm.SetBorderColor(200, 200, 200);
  }

  paragraph.AddElement(textForm);
  paragraph.SetFontSize(fontSize);
  paragraph.SetJc(jc);
}

function addTextToParagraph(paragraph, text, fontSize, isBold = false, jc = "left") {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  paragraph.SetJc(jc);
}

function setTableBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

function getCellParagraph(table, row, col, widthTwips) {
  const cell = table.GetCell(row, col);
  cell.SetWidth("twips", widthTwips);
  return cell.GetContent().GetElement(0);
}

// Step 2: Heading
const heading = Api.CreateParagraph();
addTextToParagraph(heading, "Onboarding Checklist", 32, true, "center");
heading.SetSpacingAfter(600);
doc.Push(heading);

// Step 3: Table with employee data
const table = Api.CreateTable(2, 3); // 3 rows: Name, Department, Start Date
table.SetWidth("percent", 100);
table.SetTableCellMarginTop(25);
setTableBorders(table, 255);

// Row 1: Employee
let cellPara = getCellParagraph(table, 0, 0, 3000);
addTextToParagraph(cellPara, "Employee:", 24, true);

cellPara = getCellParagraph(table, 0, 1, 7000);
addTextFormToParagraph(cellPara, 24, "EmployeeName", "Employee name", 25, "left", true, true);

// Row 2: Department
cellPara = getCellParagraph(table, 1, 0, 3000);
addTextToParagraph(cellPara, "Department:", 24, true);

cellPara = getCellParagraph(table, 1, 1, 7000);
addTextFormToParagraph(cellPara, 24, "DepartmentName", "Department name", 25, "left", true, true);

// Row 3: Start Date
cellPara = getCellParagraph(table, 2, 0, 3000);
addTextToParagraph(cellPara, "Start date:", 24, true);

cellPara = getCellParagraph(table, 2, 1, 7000);
const dateField = Api.CreateDateForm({
  key: "StartDate",
  tip: "Enter current date",
  required: true,
  placeholder: "Your date here",
  format: "mm.dd.yyyy",
  lang: "en-US"
});
dateField.SetFormat("dddd, dd MMMM yyyy");
cellPara.AddElement(dateField);

doc.Push(table);

// Step 4: Signed documents checklist
const signedHeader = Api.CreateParagraph();
addTextToParagraph(signedHeader, "Signed documents", 28, false);
signedHeader.SetSpacingBefore(600);
doc.Push(signedHeader);

const signedList = Api.CreateParagraph();
["Tax Form", "NDA", "Contract"].forEach(item => {
  const checkBox = Api.CreateCheckBoxForm({
    key: item,
    required: false,
    placeholder: "",
    radio: false
  });
  signedList.AddElement(checkBox);
  signedList.AddText(` ${item}`);
  signedList.AddLineBreak();
});
doc.Push(signedList);

// Step 5: Hiring Manager block
const managerHeader = Api.CreateParagraph();
addTextToParagraph(managerHeader, "Hiring Manager", 28, false);
managerHeader.SetSpacingBefore(400);
doc.Push(managerHeader);

const managerField = Api.CreateParagraph();
addTextFormToParagraph(managerField, 24, "HRManagerName", "HR manager name", 25, "left", true, true);
doc.Push(managerField);
```

## Script execution steps

### Step 1. Define reusable layout functions

This step defines helper functions to add text, borders, and text fields inside paragraphs and table cells.

- `addTextFormToParagraph()` creates a styled text input field using [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md)
- `addTextToParagraph()` adds styled text using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- `setBorders()` applies uniform borders to tables using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md)
- `getTableCellParagraph()` retrieves a paragraph from a table cell and sets its width using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md)

<details>
  <summary>Reusable functions script</summary>

  ```ts
  function addTextFormToParagraph(paragraph, fontSize, key, placeholder, maxCharacters, jc, comb, showBorder) {
    const textForm = Api.CreateTextForm({
      key,
      required: false,
      comb,
      placeholder,
      maxCharacters,
      multiLine: false,
      autoFit: true
    });

    if (showBorder) {
      textForm.SetBorderColor(200, 200, 200);
    }

    paragraph.AddElement(textForm);
    paragraph.SetFontSize(fontSize);
    paragraph.SetJc(jc);
  }

  function addTextToParagraph(paragraph, text, fontSize, isBold = false, jc = "left") {
    paragraph.AddText(text);
    paragraph.SetFontSize(fontSize);
    paragraph.SetBold(isBold);
    paragraph.SetJc(jc);
  }

  function setTableBorders(table, color) {
    table.SetTableBorderTop("single", 4, 0, color, color, color);
    table.SetTableBorderBottom("single", 4, 0, color, color, color);
    table.SetTableBorderLeft("single", 4, 0, color, color, color);
    table.SetTableBorderRight("single", 4, 0, color, color, color);
    table.SetTableBorderInsideV("single", 4, 0, color, color, color);
    table.SetTableBorderInsideH("single", 4, 0, color, color, color);
  }

  function getCellParagraph(table, row, col, widthTwips) {
    const cell = table.GetCell(row, col);
    cell.SetWidth("twips", widthTwips);
    return cell.GetContent().GetElement(0);
  }
  ```
  
</details>

### Step 2. Create header and employee details table

This step initializes the document, inserts the main heading, and creates a structured table to collect basic employee information (name, department, start date) using form fields and a date picker.

- Initialize the document using [ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md)
- Get the first paragraph and append the title and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) and `addTextToParagraph`
- Create a table and set borders using `setBorders` function
- For each of three information lines use `getTableCellParagraph`, `addTextToParagraph` and `addTextFormToParagraph` to add text forms
- Create a date form for the last information line using [ApiDateForm](../../usage-api/form-api/ApiDateForm/ApiDateForm.md)

<details>
  <summary>Employee details script</summary>

  ```ts
  const heading = Api.CreateParagraph();
  addTextToParagraph(heading, "Onboarding Checklist", 32, true, "center");
  heading.SetSpacingAfter(600);
  doc.Push(heading);

  const table = Api.CreateTable(2, 3);
  table.SetWidth("percent", 100);
  table.SetTableCellMarginTop(25);
  setTableBorders(table, 255);

  let cellPara = getCellParagraph(table, 0, 0, 3000);
  addTextToParagraph(cellPara, "Employee:", 24, true);

  cellPara = getCellParagraph(table, 0, 1, 7000);
  addTextFormToParagraph(cellPara, 24, "EmployeeName", "Employee name", 25, "left", true, true);

  cellPara = getCellParagraph(table, 1, 0, 3000);
  addTextToParagraph(cellPara, "Department:", 24, true);

  cellPara = getCellParagraph(table, 1, 1, 7000);
  addTextFormToParagraph(cellPara, 24, "DepartmentName", "Department name", 25, "left", true, true);

  cellPara = getCellParagraph(table, 2, 0, 3000);
  addTextToParagraph(cellPara, "Start date:", 24, true);

  cellPara = getCellParagraph(table, 2, 1, 7000);
  const dateField = Api.CreateDateForm({
    key: "StartDate",
    tip: "Enter current date",
    required: true,
    placeholder: "Your date here",
    format: "mm.dd.yyyy",
    lang: "en-US"
  });
  dateField.SetFormat("dddd, dd MMMM yyyy");
  cellPara.AddElement(dateField);

  doc.Push(table);
  ```

</details>

### Step 3. Add checklist and hiring manager fields

This step appends a checkbox list of required signed documents and adds a final input field for the hiring manager’s name.

- Create a section title for signed documents using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) and `addTextToParagraph`
- Create a checklist for each signed document (NDA, Tax Form, and Contract) using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)
- Create a separate paragraph labeled "Hiring Manager" using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) and `addTextToParagraph`
- Add an text form for the hiring manager name using `addTextFormToParagraph` function

<details>
  <summary>Checklist and hiring manager script</summary>

  ```ts
  const signedHeader = Api.CreateParagraph();
  addTextToParagraph(signedHeader, "Signed documents", 28, false);
  signedHeader.SetSpacingBefore(600);
  doc.Push(signedHeader);

  const signedList = Api.CreateParagraph();
  ["Tax Form", "NDA", "Contract"].forEach(item => {
    const checkBox = Api.CreateCheckBoxForm({
      key: item,
      required: false,
      placeholder: "",
      radio: false
    });
    signedList.AddElement(checkBox);
    signedList.AddText(` ${item}`);
    signedList.AddLineBreak();
  });
  doc.Push(signedList);

  const managerHeader = Api.CreateParagraph();
  addTextToParagraph(managerHeader, "Hiring Manager", 28, false);
  managerHeader.SetSpacingBefore(400);
  doc.Push(managerHeader);

  const managerField = Api.CreateParagraph();
  addTextFormToParagraph(managerField, 24, "HRManagerName", "HR manager name", 25, "left", true, true);
  doc.Push(managerField);
  ```

</details>