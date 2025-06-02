# Extract form field values

This example demonstrates how to extract values from form fields created in an ONLYOFFICE document using the Office API. It renders a simple registration form with text inputs and radio options, and shows how to programmatically retrieve the entered data. Pre-filling of data is included for demonstration but is not required in real scenarios.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();
let section = doc.GetFinalSection();
section.SetPageSize(11900, 16840); // A4
section.SetPageMargins(1000, 1000, 1000, 1000);

// === Utility: Add title or field label ===
function addTextParagraph(ind, text, fontSize, bold = false, jc = "left") {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(ind);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(jc);
  paragraph.SetColor(51, 51, 51); // #333333
  doc.Push(paragraph);
}

// === Utility: Add text field ===
function addTextField(ind, key, placeholder, maxChars) {
  let p = Api.CreateParagraph();
  p.SetIndLeft(ind);
  let field = Api.CreateTextForm({
    key,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });
  field.SetBorderColor(180, 180, 180);
  field.SetBackgroundColor(247, 250, 254, false);
  p.AddElement(field);
  p.SetSpacingBefore(20);
  doc.Push(p);
}

// === Utility: Add radio group ===
function addRadioGroup(ind, label, key, options) {
  addTextParagraph(ind, label, 18, true);
  let p = Api.CreateParagraph();
  p.SetIndLeft(ind);
  options.forEach(opt => {
    let cb = Api.CreateCheckBoxForm({ key: `${key}_${opt}` });
    p.AddElement(cb);
    p.AddText(" " + opt + "    ");
  });
  doc.Push(p);
}

// === Title ===
addTextParagraph(0, "REGISTRATION FORM", 32, true, "center");

// === Block: Personal Info ===
addTextParagraph(800, "Personal information", 24, true);
addTextParagraph(800, "Full Name:", 18, true);
addTextField(800, "FullName", "e.g. John Smith", 50);

addTextParagraph(800, "E-mail:", 18, true);
addTextField(800, "Email", "you@example.com", 40);

addTextParagraph(800, "Country:", 18, true);
addTextField(800, "Country", "e.g. Germany", 30);

// === Replace Sex with Entity Type ===
addRadioGroup(800, "Entity Type:", "Entity", ["Individual", "Legal Entity"]);

// === Optional: Sample form data ===
let testData = {
  "FullName": "Anna Müller",
  "Email": "anna.mueller@example.com",
  "Country": "Germany",
  "Entity_Individual": true,
  "Entity_Legal Entity": false
};

doc.GetAllForms().forEach(form => {
  let key = form.GetFormKey();
  if (form.GetFormType() === "textForm" && testData[key]) {
    form.SetText(testData[key]);
  }
  if (form.GetFormType() === "checkBoxForm" && testData[key] !== undefined) {
    form.SetChecked(testData[key]);
  }
});

// === Get filled data ===
let result = {};
doc.GetAllForms().forEach(form => {
  let key = form.GetFormKey();
  if (form.GetFormType() === "textForm") result[key] = form.GetText();
  if (form.GetFormType() === "checkBoxForm") result[key] = form.IsChecked();
});
console.log(JSON.stringify(result, null, 2));
```

## Script execution steps

### Step 1. Define text rendering utilities
This step creates helper functions to render text paragraphs and fields in the document.

- Create a reusable function `addTextParagraph` using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Set text, font size, alignment, and indentation
- Create `addTextField` and `addRadioGroup` helpers using [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md) and [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)

<details>
  <summary>Text rendering script</summary>

```ts
function addTextParagraph(ind, text, fontSize, bold = false, jc = "left") {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(ind);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(jc);
  paragraph.SetColor(51, 51, 51); // #333333
  doc.Push(paragraph);
}

function addTextField(ind, key, placeholder, maxChars) {
  let p = Api.CreateParagraph();
  p.SetIndLeft(ind);
  let field = Api.CreateTextForm({
    key,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });
  field.SetBorderColor(180, 180, 180);
  field.SetBackgroundColor(247, 250, 254, false);
  p.AddElement(field);
  p.SetSpacingBefore(20);
  doc.Push(p);
}

function addRadioGroup(ind, label, key, options) {
  addTextParagraph(ind, label, 18, true);
  let p = Api.CreateParagraph();
  p.SetIndLeft(ind);
  options.forEach(opt => {
    let cb = Api.CreateCheckBoxForm({ key: `${key}_${opt}` });
    p.AddElement(cb);
    p.AddText(" " + opt + "    ");
  });
  doc.Push(p);
}
```

</details>

### Step 2. Build the form structure
This step initializes the form layout and renders the input blocks: name, email, country, and sex.

- Render form title and subtitles
- Add three single-line text fields
- Create a radio button group

```ts
addTextParagraph(0, "REGISTRATION FORM", 32, true, "center");
addTextParagraph(800, "Personal information", 24, true);
addTextParagraph(800, "Full Name:", 18, true);
addTextField(800, "FullName", "e.g. John Smith", 50);
addTextParagraph(800, "E-mail:", 18, true);
addTextField(800, "Email", "you@example.com", 40);
addTextParagraph(800, "Country:", 18, true);
addTextField(800, "Country", "e.g. Germany", 30);
addRadioGroup(800, "Sex:", "Sex", ["Male", "Female"]);
```

### Step 3. (Optional) Pre-fill form values
This step assigns values to the form fields for demonstration purposes only. In real use cases, the user should fill the form manually.

- Use [SetText](../../usage-api/form-api/ApiTextForm/Methods/SetText.md) for text fields
- Use [SetChecked](../../usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md) for radio fields

```ts
doc.GetAllForms().forEach(form => {
  let key = form.GetFormKey();
  if (form.GetFormType() === "textForm" && testData[key]) {
    form.SetText(testData[key]);
  }
  if (form.GetFormType() === "checkBoxForm" && testData[key] !== undefined) {
    form.SetChecked(testData[key]);
  }
});
```

### Step 4. Extract user input from the form
This step iterates over all form elements and collects the submitted data into a result object.

- Use [GetAllForms](../../usage-api/form-api/ApiDocument/Methods/GetAllForms.md) to access all form fields
- Use [GetText](../../usage-api/form-api/ApiTextForm/Methods/GetText.md) or [IsChecked](../../usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md) depending on field type
- Output the values using console.log

```ts
let result = {};
doc.GetAllForms().forEach(form => {
  let key = form.GetFormKey();
  if (form.GetFormType() === "textForm") result[key] = form.GetText();
  if (form.GetFormType() === "checkBoxForm") result[key] = form.IsChecked();
});
console.log(JSON.stringify(result, null, 2));
```