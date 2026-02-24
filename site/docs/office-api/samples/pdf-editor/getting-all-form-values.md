---
hide_table_of_contents: true
---

# Getting all form values

Collect all form field values into a single JSON object after form completion for analysis, server submission, or database storage:

- create a comprehensive form with multiple field types including radio buttons ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- pre-fill form fields with sample data ([ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md), [ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md));
- collect all form values into a JSON object ([ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create form title
let paragraph = doc.GetElement(0);
paragraph.AddText("Event Registration Form");
paragraph.SetFontSize(20 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Personal Information Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Personal Information");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Full Name field
paragraph = Api.CreateParagraph();
paragraph.AddText("Full Name: ");
paragraph.SetFontSize(12 * 2);
let nameForm = Api.CreateTextForm({
  key: "full_name",
  required: true,
  placeholder: "Enter your full name",
  maxCharacters: 100,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(nameForm);
doc.Push(paragraph);

// Email field
paragraph = Api.CreateParagraph();
paragraph.AddText("Email: ");
paragraph.SetFontSize(12 * 2);
let emailForm = Api.CreateTextForm({
  key: "email",
  required: true,
  placeholder: "Enter email address",
  maxCharacters: 100,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(emailForm);
doc.Push(paragraph);

// Experience level dropdown
paragraph = Api.CreateParagraph();
paragraph.AddText("Experience Level: ");
paragraph.SetFontSize(12 * 2);
let experienceForm = Api.CreateComboBoxForm({
  key: "experience_level",
  required: false,
  placeholder: "Select your level",
  editable: false,
  autoFit: true,
  items: ["Beginner", "Intermediate", "Advanced", "Expert"]
});
paragraph.AddElement(experienceForm);
doc.Push(paragraph);

// Session Preferences Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Session Preferences");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Session time radio group
paragraph = Api.CreateParagraph();
paragraph.AddText("Preferred Session:");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

let sessionOptions = ["Morning (9:00 AM)", "Afternoon (2:00 PM)", "Evening (6:00 PM)"];
for (let i = 0; i < sessionOptions.length; i++) {
  paragraph = Api.CreateParagraph();
  let radioButton = Api.CreateCheckBoxForm({
    key: "session_" + String.fromCharCode(65 + i),
    tip: "Select " + sessionOptions[i],
    required: false,
    radio: true
  });
  radioButton.SetRadioGroup("session_preference");
  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + sessionOptions[i]);
  paragraph.SetFontSize(11 * 2);
  doc.Push(paragraph);
}

// Additional Options Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Additional Options");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Newsletter checkbox
paragraph = Api.CreateParagraph();
let newsletterCheckbox = Api.CreateCheckBoxForm({
  key: "newsletter",
  required: false,
  tip: "Subscribe to newsletter"
});
paragraph.AddElement(newsletterCheckbox);
paragraph.AddText(" Subscribe to event newsletter");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// Lunch checkbox
paragraph = Api.CreateParagraph();
let lunchCheckbox = Api.CreateCheckBoxForm({
  key: "lunch",
  required: false,
  tip: "Request lunch"
});
paragraph.AddElement(lunchCheckbox);
paragraph.AddText(" Include lunch (vegetarian options available)");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// Comments field
paragraph = Api.CreateParagraph();
paragraph.AddText("Additional Comments: ");
paragraph.SetFontSize(12 * 2);
let commentsForm = Api.CreateTextForm({
  key: "comments",
  required: false,
  placeholder: "Any special requirements...",
  maxCharacters: 500,
  multiLine: true,
  autoFit: true,
});
paragraph.AddElement(commentsForm);
doc.Push(paragraph);

// Pre-fill form with sample data for demonstration
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  let formType = form.GetFormType();

  if (formType === "textForm") {
    if (key === "full_name") form.SetText("John Smith");
    else if (key === "email") form.SetText("john.smith@example.com");
    else if (key === "comments") form.SetText("Looking forward to the event!");
  } else if (formType === "comboBoxForm") {
    if (key === "experience_level") form.SetText("Intermediate");
  } else if (formType === "checkBoxForm") {
    if (key === "session_B") form.SetChecked(true);
    else if (key === "newsletter") form.SetChecked(true);
    else if (key === "lunch") form.SetChecked(true);
  }
}

// Function to collect all form values into JSON
function collectAllFormValues() {
  let formData = {};
  let forms = doc.GetAllForms();

  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();

    if (formType === "textForm") {
      formData[key] = form.GetText() || "";
    } else if (formType === "checkBoxForm") {
      formData[key] = form.IsChecked();
    } else if (formType === "comboBoxForm") {
      formData[key] = form.GetText() || "";
    }
  }

  return formData;
}

// Function to get selected radio option from a group
function getSelectedRadioOption(radioGroupPrefix, optionLabels) {
  let forms = doc.GetAllForms();
  for (let i = 0; i < optionLabels.length; i++) {
    let key = radioGroupPrefix + "_" + String.fromCharCode(65 + i);
    for (let form of forms) {
      if (form.GetFormKey() === key && form.GetFormType() === "checkBoxForm") {
        if (form.IsChecked()) {
          return optionLabels[i];
        }
      }
    }
  }
  return "Not selected";
}

// Collect and display form data
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Collected Form Data");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Get all form values
let allFormData = collectAllFormValues();
let selectedSession = getSelectedRadioOption("session", sessionOptions);

// Display formatted summary
paragraph = Api.CreateParagraph();
paragraph.AddText("Registration Summary:");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Name: " + allFormData["full_name"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Email: " + allFormData["email"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Experience: " + allFormData["experience_level"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Preferred Session: " + selectedSession);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Newsletter: " + (allFormData["newsletter"] ? "Yes" : "No"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Lunch: " + (allFormData["lunch"] ? "Yes" : "No"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Comments: " + (allFormData["comments"] || "None"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// Display raw JSON
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Raw JSON Data:");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Add session preference to final data
allFormData["session_preference"] = selectedSession;

paragraph = Api.CreateParagraph();
paragraph.AddText(JSON.stringify(allFormData, null, 2));
paragraph.SetFontSize(10 * 2);
paragraph.SetFontFamily("Courier New");
doc.Push(paragraph);
```
