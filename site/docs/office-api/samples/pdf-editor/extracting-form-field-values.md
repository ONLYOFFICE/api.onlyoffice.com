---
hide_table_of_contents: true
---

# Extracting form field values

Demonstrates extracting values from form fields programmatically:

- create a registration form with text inputs and radio button groups ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md));
- pre-fill form fields with sample data for demonstration ([ApiTextForm/SetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md));
- retrieve entered data using utility functions ([ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md)).

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
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

// First Name field
paragraph = Api.CreateParagraph();
paragraph.AddText("First Name: ");
paragraph.SetFontSize(12 * 2);
let firstNameForm = Api.CreateTextForm({
  key: "first_name",
  required: true,
  placeholder: "Enter first name",
  maxCharacters: 50,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(firstNameForm);
doc.Push(paragraph);

// Last Name field
paragraph = Api.CreateParagraph();
paragraph.AddText("Last Name: ");
paragraph.SetFontSize(12 * 2);
let lastNameForm = Api.CreateTextForm({
  key: "last_name",
  required: true,
  placeholder: "Enter last name",
  maxCharacters: 50,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(lastNameForm);
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

// Event Preferences Section
paragraph = Api.CreateParagraph();
paragraph.AddText("Event Preferences");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

// Session preference radio group
paragraph = Api.CreateParagraph();
paragraph.AddText("Preferred Session:");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(150);
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
  paragraph.SetSpacingBefore(80);
  doc.Push(paragraph);
}

// Experience level radio group
paragraph = Api.CreateParagraph();
paragraph.AddText("Experience Level:");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

let experienceOptions = ["Beginner", "Intermediate", "Advanced"];
for (let i = 0; i < experienceOptions.length; i++) {
  paragraph = Api.CreateParagraph();
  let radioButton = Api.CreateCheckBoxForm({
    key: "experience_" + String.fromCharCode(65 + i),
    tip: "Select " + experienceOptions[i],
    required: false,
    radio: true
  });
  radioButton.SetRadioGroup("experience_level");
  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + experienceOptions[i]);
  paragraph.SetFontSize(11 * 2);
  paragraph.SetSpacingBefore(80);
  doc.Push(paragraph);
}

// Pre-fill form data for demonstration
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  let formType = form.GetFormType();

  // Pre-fill text fields
  if (formType === "textForm") {
    if (key === "first_name") {
      form.SetText("John");
    } else if (key === "last_name") {
      form.SetText("Smith");
    } else if (key === "email") {
      form.SetText("john.smith@example.com");
    }
  }

  // Pre-select radio options
  if (formType === "checkBoxForm") {
    if (key === "session_B") {
      form.SetChecked(true);
    } else if (key === "experience_B") {
      form.SetChecked(true);
    }
  }
}

// Utility function to get text field value by key
function getTextFieldValue(fieldKey) {
  let forms = doc.GetAllForms();
  for (let form of forms) {
    if (form.GetFormKey() === fieldKey && form.GetFormType() === "textForm") {
      return form.GetText() || "";
    }
  }
  return "";
}

// Utility function to get selected radio option from a group
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

// Extract and display form values
paragraph = Api.CreateParagraph();
paragraph.AddText("Extracted Form Data");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

// Display text field values
let firstName = getTextFieldValue("first_name");
let lastName = getTextFieldValue("last_name");
let email = getTextFieldValue("email");

paragraph = Api.CreateParagraph();
paragraph.AddText("Name: " + firstName + " " + lastName);
paragraph.SetFontSize(11 * 2);
paragraph.SetSpacingBefore(100);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Email: " + email);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// Display radio group selections
let selectedSession = getSelectedRadioOption("session", sessionOptions);
let selectedExperience = getSelectedRadioOption("experience", experienceOptions);

paragraph = Api.CreateParagraph();
paragraph.AddText("Preferred Session: " + selectedSession);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Experience Level: " + selectedExperience);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// Display raw form data as JSON
paragraph = Api.CreateParagraph();
paragraph.AddText("Raw Form Data (JSON):");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

let formData = {
  first_name: firstName,
  last_name: lastName,
  email: email,
  session_preference: selectedSession,
  experience_level: selectedExperience
};

paragraph = Api.CreateParagraph();
paragraph.AddText(JSON.stringify(formData, null, 2));
paragraph.SetFontSize(10 * 2);
paragraph.SetFontFamily("Courier New");
doc.Push(paragraph);
```
