# Create onboarding form

This example demonstrates how to create an onboarding checklist form using the ONLYOFFICE Office API. The script generates a document with text fields, a date field, and checkboxes for signed documents using structured tables.

```ts editor-pdf
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

function addTextToParagraph(paragraph, text, fontSize, isBold, jc) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
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

function getTableCellParagraph(table, row, col, width) {
  let cell = table.GetCell(row, col);
  cell.SetWidth("twips", width);
  return cell.GetContent().GetElement(0);
}

let doc = Api.GetDocument();

let paragraph = doc.GetElement(0);
paragraph.AddText("Onboarding Checklist");
paragraph.SetFontSize(32);

let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
setBorders(table, 255);
table.SetTableCellMarginTop(25);

paragraph = getTableCellParagraph(table, 0, 0, 300);
addTextToParagraph(paragraph, "Employee:", 24, true);
paragraph = getTableCellParagraph(table, 0, 1, 500);
addTextFormToParagraph(paragraph, 24, "Employee name", "Employee name", 25, "left", true);

paragraph = getTableCellParagraph(table, 1, 0, 300);
addTextToParagraph(paragraph, "Department:", 24, true);
paragraph = getTableCellParagraph(table, 1, 1, 500);
addTextFormToParagraph(paragraph, 24, "Department name", "Department name", 25, "left", true);

paragraph = getTableCellParagraph(table, 2, 0, 300);
addTextToParagraph(paragraph, "Start date:", 24, true);

paragraph = getTableCellParagraph(table, 2, 1, 500);
let dateForm = Api.CreateDateForm({"key": "Date", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
paragraph.AddElement(dateForm);
dateForm.SetFormat("dddd, dd MMMM yyyy");

doc.Push(table);

paragraph = Api.CreateParagraph();
addTextToParagraph(paragraph, "Signed documents", 28, false);
doc.Push(paragraph);

const signed_documents = [
    "Tax Form", "NDA", "Contract"
];
paragraph = Api.CreateParagraph();

signed_documents.forEach(sd => {
    let checkBoxForm = Api.CreateCheckBoxForm({"key": sd, "tip": "", "required": false, "placeholder": "", "radio": false});
    paragraph.AddElement(checkBoxForm);
    paragraph.AddText(` ${sd}`);
    paragraph.AddLineBreak();
});
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addTextToParagraph(paragraph, "Hiring Manager", 28, false);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addTextFormToParagraph(paragraph, 24, "HR manager name", "HR manager name", 25, "left", true);
doc.Push(paragraph);
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

  function addTextToParagraph(paragraph, text, fontSize, isBold, jc) {
    paragraph.AddText(text);
    paragraph.SetFontSize(fontSize);
    paragraph.SetBold(isBold);
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

  function getTableCellParagraph(table, row, col, width) {
    let cell = table.GetCell(row, col);
    cell.SetWidth("twips", width);
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
  let doc = Api.GetDocument();

  let paragraph = doc.GetElement(0);
  paragraph.AddText("Onboarding Checklist");
  paragraph.SetFontSize(32);

  let table = Api.CreateTable(2, 3);
  table.SetWidth("percent", 100);
  setBorders(table, 255);
  table.SetTableCellMarginTop(25);

  paragraph = getTableCellParagraph(table, 0, 0, 300);
  addTextToParagraph(paragraph, "Employee:", 24, true);
  paragraph = getTableCellParagraph(table, 0, 1, 500);
  addTextFormToParagraph(paragraph, 24, "Employee name", "Employee name", 25, "left", true);

  paragraph = getTableCellParagraph(table, 1, 0, 300);
  addTextToParagraph(paragraph, "Department:", 24, true);
  paragraph = getTableCellParagraph(table, 1, 1, 500);
  addTextFormToParagraph(paragraph, 24, "Department name", "Department name", 25, "left", true);

  paragraph = getTableCellParagraph(table, 2, 0, 300);
  addTextToParagraph(paragraph, "Start date:", 24, true);

  paragraph = getTableCellParagraph(table, 2, 1, 500);
  let dateForm = Api.CreateDateForm({"key": "Date", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
  paragraph.AddElement(dateForm);
  dateForm.SetFormat("dddd, dd MMMM yyyy");

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
  paragraph = Api.CreateParagraph();
  addTextToParagraph(paragraph, "Signed documents", 28, false);
  doc.Push(paragraph);

  const signed_documents = [
      "Tax Form", "NDA", "Contract"
  ];
  paragraph = Api.CreateParagraph();

  signed_documents.forEach(sd => {
      let checkBoxForm = Api.CreateCheckBoxForm({"key": sd, "tip": "", "required": false, "placeholder": "", "radio": false});
      paragraph.AddElement(checkBoxForm);
      paragraph.AddText(` ${sd}`);
      paragraph.AddLineBreak();
  });\
  doc.Push(paragraph);

  paragraph = Api.CreateParagraph();
  addTextToParagraph(paragraph, "Hiring Manager", 28, false);
  doc.Push(paragraph);

  paragraph = Api.CreateParagraph();
  addTextFormToParagraph(paragraph, 24, "HR manager name", "HR manager name", 25, "left", true);
  doc.Push(paragraph);
  ```

</details>