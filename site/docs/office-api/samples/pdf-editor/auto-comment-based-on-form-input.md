# Auto-comment based on form input

This example demonstrates how to add contextual comments in a document using the ONLYOFFICE Office API based on form field input. If a specific radio button is selected (e.g. "Very dissatisfied"), the script automatically adds a comment next to that option asking the user to elaborate.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Step 1: Add heading
let headingParagraph = Api.CreateParagraph();
headingParagraph.AddText("Job Satisfaction Survey");
headingParagraph.SetFontSize(26);
headingParagraph.SetBold(true);
headingParagraph.SetJc("center");
doc.Push(headingParagraph);

// Step 2: Add question paragraph
let questionParagraph = Api.CreateParagraph();
questionParagraph.SetSpacingBefore(400);
questionParagraph.AddText("How satisfied are you with your current role?");
questionParagraph.SetFontSize(18);
doc.Push(questionParagraph);

// Step 3: Define radio options
const satisfactionLevels = [
  "Very satisfied",
  "Satisfied",
  "Neutral",
  "Dissatisfied",
  "Very dissatisfied"
];

// Use level values directly as form keys for clarity
const preselectedLevel = "Very dissatisfied";
const formElementsByLevel = {};

// Step 4: Add radio buttons
satisfactionLevels.forEach(level => {
  const formKey = level;
  const radioButton = Api.CreateCheckBoxForm({
    key: formKey,
    tip: "Select your satisfaction level",
    required: true,
    radio: true
  });

  const optionParagraph = Api.CreateParagraph();
  optionParagraph.AddElement(radioButton);
  optionParagraph.AddText(" " + level);
  optionParagraph.SetFontSize(16);
  doc.Push(optionParagraph);

  formElementsByLevel[formKey] = optionParagraph;
});

// Step 5: Preselect default level
const targetForm = doc.GetAllForms().find(f => f.GetFormKey() === preselectedLevel);
if (targetForm) {
  targetForm.SetChecked(true);
}

// Step 6: Add contextual comment
const targetParagraph = formElementsByLevel[preselectedLevel];
if (targetParagraph) {
  Api.AddComment(
    targetParagraph,
    "Please leave a detailed description of your dissatisfaction.",
    "System"
  );
}
```

## Script execution steps

### Step 1. Add heading
This step creates a heading paragraph to label the form.

- Create a paragraph using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Add the heading text using [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md)
- Set font size, bold style, and center alignment with [SetFontSize](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md), [SetBold](../../usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), and [SetJc](../../usage-api/text-document-api/ApiParagraph/Methods/SetJc.md)

```ts
let headingParagraph = Api.CreateParagraph();
headingParagraph.AddText("Job Satisfaction Survey");
headingParagraph.SetFontSize(26);
headingParagraph.SetBold(true);
headingParagraph.SetJc("center");
doc.Push(headingParagraph);
```

### Step 2. Insert survey question
This step inserts the main survey question.

- Use [SetSpacingBefore](../../usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md) to add spacing
- Set font size for the question line

```ts
let questionParagraph = Api.CreateParagraph();
questionParagraph.SetSpacingBefore(400);
questionParagraph.AddText("How satisfied are you with your current role?");
questionParagraph.SetFontSize(18);
doc.Push(questionParagraph);
```

### Step 3. Create radio buttons for answer options
This step defines satisfaction levels as radio button options.

- Loop through each answer and create a radio form field using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)
- Set radio: true so only one can be selected
- Add each to its own paragraph and store the paragraph for later reference

```ts
satisfactionLevels.forEach(level => {
  const formKey = level;
  const radioButton = Api.CreateCheckBoxForm({
    key: formKey,
    tip: "Select your satisfaction level",
    required: true,
    radio: true
  });

  const optionParagraph = Api.CreateParagraph();
  optionParagraph.AddElement(radioButton);
  optionParagraph.AddText(" " + level);
  optionParagraph.SetFontSize(16);
  doc.Push(optionParagraph);

  formElementsByLevel[formKey] = optionParagraph;
});
```

### Step 4. Set a selected value (for demo purposes)
This step demonstrates how to programmatically check a specific radio option. This is not required in actual forms, where users select manually.

- Iterate over all form fields using ApiDocument.GetAllForms
- Match the key and call .SetChecked(true)

```ts
const targetForm = doc.GetAllForms().find(f => f.GetFormKey() === preselectedLevel);
if (targetForm) {
  targetForm.SetChecked(true);
}
```

### Step 5. Add contextual comment based on input
This step adds a comment if the selected option matches a specific value.

- Find the paragraph associated with the selected form field
- Use [AddComment](../../usage-api/text-document-api/Api/Methods/AddComment.md) to attach the comment beside the paragraph

```ts
const targetParagraph = formElementsByLevel[preselectedLevel];
if (targetParagraph) {
  Api.AddComment(
    targetParagraph,
    "Please leave a detailed description of your dissatisfaction.",
    "System"
  );
}
```