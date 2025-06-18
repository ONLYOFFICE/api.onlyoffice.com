# Extract form field values

This example demonstrates how to extract values from form fields created in an ONLYOFFICE document using the Office API. It renders a simple registration form with text inputs and radio options, and shows how to programmatically retrieve the entered data. Pre-filling of data is included for demonstration but is not required in real scenarios.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();
let section = doc.GetFinalSection();
section.SetPageSize(11900, 16840); // A4
section.SetPageMargins(1000, 1000, 1000, 1000);

// === Utility: Add title or field label ===
function addTextParagraph(indent, text, fontSize, bold = false, alignment = "left") {
  const paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(indent);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(alignment);
  paragraph.SetColor(51, 51, 51); // #333333
  doc.Push(paragraph);
}

// === Utility: Add text field ===
function addTextField(indent, key, placeholder, maxChars) {
  const paragraph = Api.CreateParagraph();
  paragraph.SetIndLeft(indent);

  const textField = Api.CreateTextForm({
    key,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });

  textField.SetBorderColor(180, 180, 180);
  textField.SetBackgroundColor(247, 250, 254, false);
  paragraph.AddElement(textField);
  paragraph.SetSpacingBefore(20);
  doc.Push(paragraph);
}

// === Utility: Add radio group ===
function addRadioGroup(indent, label, groupKey, options) {
  addTextParagraph(indent, label, 18, true);

  const radioGroupParagraph = Api.CreateParagraph();
  radioGroupParagraph.SetIndLeft(indent);

  options.forEach(option => {
    const checkbox = Api.CreateCheckBoxForm({ key: `${groupKey}_${option}`, radio: true });
    checkbox.SetRadioGroup(groupKey);

    radioGroupParagraph.AddElement(checkbox);
    radioGroupParagraph.AddText(" " + option + "    ");
  });

  doc.Push(radioGroupParagraph);
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

// === Entity Type Block ===
addRadioGroup(800, "Entity Type:", "Entity", ["Individual", "Legal Entity"]);

// === Optional: Sample form data (pre-fill) ===
const sampleFormData = {
  FullName: "Anna Müller",
  Email: "anna.mueller@example.com",
  Country: "Germany",
  "Entity_Individual": true,
  "Entity_Legal Entity": false
};

doc.GetAllForms().forEach(form => {
  const key = form.GetFormKey();
  const type = form.GetFormType();

  if (type === "textForm" && sampleFormData[key]) {
    form.SetText(sampleFormData[key]);
  }
  if (type === "checkBoxForm" && sampleFormData[key] !== undefined) {
    form.SetChecked(sampleFormData[key]);
  }
});

// === Extract filled values into result object ===
const result = {};
doc.GetAllForms().forEach(form => {
  const key = form.GetFormKey();
  const type = form.GetFormType();

  if (type === "textForm") {
    result[key] = form.GetText();
  }
  if (type === "checkBoxForm") {
    result[key] = form.IsChecked();
  }
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
// === Utility: Add title or field label ===
function addTextParagraph(indent, text, fontSize, bold = false, alignment = "left") {
  const paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(indent);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(alignment);
  paragraph.SetColor(51, 51, 51); // #333333
  doc.Push(paragraph);
}

// === Utility: Add text field ===
function addTextField(indent, key, placeholder, maxChars) {
  const paragraph = Api.CreateParagraph();
  paragraph.SetIndLeft(indent);

  const textField = Api.CreateTextForm({
    key,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });

  textField.SetBorderColor(180, 180, 180);
  textField.SetBackgroundColor(247, 250, 254, false);
  paragraph.AddElement(textField);
  paragraph.SetSpacingBefore(20);
  doc.Push(paragraph);
}

// === Utility: Add radio group ===
function addRadioGroup(indent, label, groupKey, options) {
  addTextParagraph(indent, label, 18, true);

  const radioGroupParagraph = Api.CreateParagraph();
  radioGroupParagraph.SetIndLeft(indent);

  options.forEach(option => {
    const checkbox = Api.CreateCheckBoxForm({ key: `${groupKey}_${option}`, radio: true });
    checkbox.SetRadioGroup(groupKey);

    radioGroupParagraph.AddElement(checkbox);
    radioGroupParagraph.AddText(" " + option + "    ");
  });

  doc.Push(radioGroupParagraph);
}
```

</details>

### Step 2. Build the form structure
This step initializes the form layout and renders the input blocks: name, email, country, and entity type.

- Render form title and subtitles
- Add three single-line text fields
- Create a radio button group

```ts
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

// === Entity Type Block ===
addRadioGroup(800, "Entity Type:", "Entity", ["Individual", "Legal Entity"]);
```

### Step 3. (Optional) Pre-fill form values
This step assigns values to the form fields for demonstration purposes only. In real use cases, the user should fill the form manually.

- Use [SetText](../../usage-api/form-api/ApiTextForm/Methods/SetText.md) for text fields
- Use [SetChecked](../../usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md) for radio fields

```ts
// === Optional: Sample form data (pre-fill) ===
const sampleFormData = {
  FullName: "Anna Müller",
  Email: "anna.mueller@example.com",
  Country: "Germany",
  "Entity_Individual": true,
  "Entity_Legal Entity": false
};

doc.GetAllForms().forEach(form => {
  const key = form.GetFormKey();
  const type = form.GetFormType();

  if (type === "textForm" && sampleFormData[key]) {
    form.SetText(sampleFormData[key]);
  }
  if (type === "checkBoxForm" && sampleFormData[key] !== undefined) {
    form.SetChecked(sampleFormData[key]);
  }
});
```

### Step 4. Extract user input from the form
This step iterates over all form elements and collects the submitted data into a result object.

- Use [GetAllForms](../../usage-api/form-api/ApiDocument/Methods/GetAllForms.md) to access all form fields
- Use [GetText](../../usage-api/form-api/ApiTextForm/Methods/GetText.md) or [IsChecked](../../usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md) depending on field type
- Output the values using console.log

```ts
// === Extract filled values into result object ===
const result = {};
doc.GetAllForms().forEach(form => {
  const key = form.GetFormKey();
  const type = form.GetFormType();

  if (type === "textForm") {
    result[key] = form.GetText();
  }
  if (type === "checkBoxForm") {
    result[key] = form.IsChecked();
  }
});

console.log(JSON.stringify(result, null, 2));
```