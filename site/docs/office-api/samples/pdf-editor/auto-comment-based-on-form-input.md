# Auto-comment based on form input

This example demonstrates how to add contextual comments in a document using the ONLYOFFICE Office API based on form field input. If a specific radio button is selected (e.g. "Very dissatisfied"), the script automatically adds a comment next to that option asking the user to elaborate.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Step 1: Add title
let title = Api.CreateParagraph();
title.AddText("Job Satisfaction Survey");
title.SetFontSize(26);
title.SetBold(true);
title.SetJc("center");
doc.Push(title);

// Step 2: Add question
let question = Api.CreateParagraph();
question.SetSpacingBefore(400);
question.AddText("How satisfied are you with your current role?");
question.SetFontSize(18);
doc.Push(question);

// Step 3: Add radio options
let levels = [
  "Very satisfied",
  "Satisfied",
  "Neutral",
  "Dissatisfied",
  "Very dissatisfied"
];

let selectedKey = "Satisfaction_4";
let formParas = [];

levels.forEach((level, i) => {
  let key = "Satisfaction_" + i;
  let radio = Api.CreateCheckBoxForm({
    key: key,
    tip: "Select your satisfaction level",
    required: true,
    radio: true
  });

  let p = Api.CreateParagraph();
  p.AddElement(radio);
  p.AddText(" " + level);
  p.SetFontSize(16);
  doc.Push(p);

  formParas.push({ key, paragraph: p });
});

// Step 4: Preselect a value
doc.GetAllForms().forEach(form => {
  if (form.GetFormKey() === selectedKey) {
    form.SetChecked(true);
  }
});

// Step 5: Add contextual comment
let dissatisfiedPara = formParas.find(item => item.key === selectedKey)?.paragraph;
if (dissatisfiedPara) {
  Api.AddComment(
    dissatisfiedPara,
    "Please elaborate on your dissatisfaction.",
    "System"
  );
}
```

## Script execution steps

### Step 1. Define question rendering function
This step creates a title paragraph to label the form.

- Create a paragraph using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Add the title text using [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md)
- Set font size, bold style, and center alignment with [SetFontSize](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md), [SetBold](../../usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), and [SetJc](../../usage-api/text-document-api/ApiParagraph/Methods/SetJc.md)

```ts
let title = Api.CreateParagraph();
title.AddText("Job Satisfaction Survey");
title.SetFontSize(26);
title.SetBold(true);
title.SetJc("center");
doc.Push(title);
```

### Step 2. Insert survey question
This step inserts the main survey question.

- Use [SetSpacingBefore](../../usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md) to add spacing
- Set font size for the question line

```ts
let question = Api.CreateParagraph();
question.SetSpacingBefore(400);
question.AddText("How satisfied are you with your current role?");
question.SetFontSize(18);
doc.Push(question);
```

### Step 3. Create radio buttons for answer options
This step defines satisfaction levels as radio button options.

- Loop through each answer and create a radio form field using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)
- Set radio: true so only one can be selected
- Add each to its own paragraph and store the paragraph for later reference

```ts
levels.forEach((level, i) => {
  let key = "Satisfaction_" + i;
  let radio = Api.CreateCheckBoxForm({
    key: key,
    tip: "Select your satisfaction level",
    required: true,
    radio: true
  });

  let p = Api.CreateParagraph();
  p.AddElement(radio);
  p.AddText(" " + level);
  doc.Push(p);

  formParas.push({ key, paragraph: p });
});
```

### Step 4. Set a selected value (for demo purposes)
This step demonstrates how to programmatically check a specific radio option. This is not required in actual forms, where users select manually.

- Iterate over all form fields using ApiDocument.GetAllForms
- Match the key and call .SetChecked(true)

```ts
doc.GetAllForms().forEach(form => {
  if (form.GetFormKey() === selectedKey) {
    form.SetChecked(true);
  }
});
```

### Step 5. Add contextual comment based on input
This step adds a comment if the selected option matches a specific value.

- Find the paragraph associated with the selected form field
- Use [AddComment](../../usage-api/text-document-api/Api/Methods/AddComment.md) to attach the comment beside the paragraph

```ts
let dissatisfiedPara = formParas.find(item => item.key === selectedKey)?.paragraph;
if (dissatisfiedPara) {
  Api.AddComment(
    dissatisfiedPara,
    "Please elaborate on your dissatisfaction.",
    "System"
  );
}
```