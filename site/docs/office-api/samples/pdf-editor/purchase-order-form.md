# Create purchase order form

This example demonstrates how to create a purchase order template using the ONLYOFFICE Office API. The script builds a layout with a title, company details, logo upload, and a line-item table with quantity and description fields.

```ts editor-pdf zoom=60
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

let doc = Api.GetDocument();

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

## Script execution steps

### Step 1. Define reusable layout functions

This step defines helper functions to create styled text, form fields, and table layouts.

- `addTextFormToParagraph()` adds a styled text field using [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md)
- `addTextToParagraph()` inserts styled text using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- `setBorders()` sets table borders using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md)
- `getTableCellParagraph()` retrieves and sizes a paragraph inside a table cell using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md)
- `createFullWidthTable()` builds full-width tables with consistent margin and borders using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md)

<details>
  <summary>Reusable function script</summary>

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
  ```

</details>

### Step 2. Create header with title and serial number field

This step initializes the document and adds a table.

- Add the form title "PURCHASE ORDER" using `addTextFormToParagraph()` function
- Add a serial number input using `addTextToParagraph()` function for the text and `addTextFormToParagraph()` function for the text form

<details>
  <summary>Header layout script</summary>

  ```ts
  let doc = Api.GetDocument();

  let table = createFullWidthTable(1, 3, 255, 100);
  let paragraph = getTableCellParagraph(table, 0, 0, 4320);
  addTextToParagraph(paragraph, "PURCHASE ORDER", 36, true);

  paragraph = getTableCellParagraph(table, 0, 1, 720);
  addTextToParagraph(paragraph, "Serial #", 25, false, "right");

  paragraph = getTableCellParagraph(table, 0, 2, 1440);
  addTextFormToParagraph(paragraph, 25, "Serial", " ", 5, "left", true);

  doc.Push(table);
  ```

</details>

### Step 3. Add logo image and company information

This step adds a picture form for company logo upload with two text forms for company name and date.

- Add a picture form for company logo upload using [ApiPictureForm](../../usage-api/form-api/ApiPictureForm/ApiPictureForm.md)
- Add a text from for company name using `addTextFormToParagraph()`function
- Add a date form using `addTextFormToParagraph()` function

<details>
  <summary>Company info script</summary>

  ```ts
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
  ```

</details>

### Step 4. Add recipient field

This step adds a title "To:" followed by a text field for the recipient name.

- Add a title "To:" using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Add a text form for the recipient name using `addTextFormToParagraph()`function

<details>
  <summary>Recipient script</summary>

  ```ts
  paragraph = Api.CreateParagraph();
  addTextToParagraph(paragraph, "To:", 35, true);
  doc.Push(paragraph);

  table = createFullWidthTable(1, 1, 200, 100);
  paragraph = getTableCellParagraph(table, 0, 0);
  addTextFormToParagraph(paragraph, 30, "Recipient", "Recipient", 32, "left", true);
  doc.Push(table);
  ```

</details>

### Step 5. Build table for quantity and description

This step creates a 10-row table for ordered products.

- Create a full width table for products using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md), set background color, percent for cells and add table columns titles
- For each product row add a quantity input field in the first column using [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md)
- For each product row add a description input field in the second column using [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md)

<details>
  <summary>Line-item table script</summary>

  ```ts
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

</details>
