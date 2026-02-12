---
hide_table_of_contents: true
---

# Clearing all form values

Reset all filled form fields and return the form to its initial state for reuse, input cancellation, or quick clearing:

- create a form with various field types and default values ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- implement form clearing functionality ([ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [ApiTextForm/SetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md), [ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/SetChecked.md));
- restore fields to their default state ([ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md), [ApiComboBoxForm/SetText](/docs/office-api/usage-api/text-document-api/ApiComboBoxForm/Methods/SetText.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create a registration form with various field types
function createRegistrationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("User Registration Form");
  paragraph.SetFontSize(18 * 2);
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
    maxCharacters: 50,
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
    placeholder: "your.email@example.com",
    maxCharacters: 60,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // Country Selection
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Country: ");
  paragraph.SetFontSize(12 * 2);
  let countryForm = Api.CreateComboBoxForm({
    key: "country",
    required: false,
    placeholder: "Select your country",
    editable: false,
    autoFit: true,
    items: ["United States", "Canada", "United Kingdom", "Germany", "France", "Other"]
  });
  paragraph.AddElement(countryForm);
  doc.Push(paragraph);

  // Newsletter Subscription (default checked)
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter",
    required: false,
    tip: "Subscribe to newsletter",
    checked: true
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" Subscribe to newsletter (recommended)");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Marketing Emails (default unchecked)
  paragraph = Api.CreateParagraph();
  let marketingCheckbox = Api.CreateCheckBoxForm({
    key: "marketing",
    required: false,
    tip: "Receive marketing emails",
    checked: false
  });
  paragraph.AddElement(marketingCheckbox);
  paragraph.AddText(" Receive promotional offers");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Terms Agreement (required, default unchecked)
  paragraph = Api.CreateParagraph();
  let termsCheckbox = Api.CreateCheckBoxForm({
    key: "terms_agreed",
    required: true,
    tip: "You must agree to terms",
    checked: false
  });
  paragraph.AddElement(termsCheckbox);
  paragraph.AddText(" I agree to the terms and conditions (required)");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);
}

// Function to clear all form values and restore to initial state
function clearAllFormValues() {
  let forms = doc.GetAllForms();
  let clearedCount = 0;
  
  // Define initial/default values for checkboxes
  let defaultCheckboxValues = {
    "newsletter": true,        // Newsletter should be checked by default
    "marketing": false,        // Marketing should be unchecked by default
    "terms_agreed": false      // Terms should be unchecked initially
  };
  
  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();
    
    if (formType === "textForm") {
      // Clear text forms - they will show placeholder text
      form.SetText("");
      clearedCount++;
    } else if (formType === "checkBoxForm") {
      // Reset checkboxes to their initial state
      let initialState = defaultCheckboxValues[key] !== undefined ? defaultCheckboxValues[key] : false;
      form.SetChecked(initialState);
      clearedCount++;
    } else if (formType === "comboBoxForm") {
      // Clear combo box selection - will show placeholder
      form.SetText("");
      clearedCount++;
    }
  }
  
  return clearedCount;
}

// Function to fill form with sample data (for demonstration)
function fillFormWithSampleData() {
  let forms = doc.GetAllForms();
  
  let sampleData = {
    "full_name": "John Smith",
    "email": "john.smith@email.com",
    "country": "United States",
    "newsletter": false,
    "marketing": true,
    "terms_agreed": true
  };
  
  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();
    
    if (formType === "textForm" && sampleData[key]) {
      form.SetText(sampleData[key]);
    } else if (formType === "checkBoxForm" && sampleData[key] !== undefined) {
      form.SetChecked(sampleData[key]);
    } else if (formType === "comboBoxForm" && sampleData[key]) {
      form.SetText(sampleData[key]);
    }
  }
}

// Create the registration form
createRegistrationForm();

// Add spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add Reset Button section
paragraph = Api.CreateParagraph();
paragraph.AddText("Form Controls");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Step 1: Fill form with sample data
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 1: Form filled with sample data");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

fillFormWithSampleData();

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Sample data has been entered into all form fields");
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

// Add spacing
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Step 2: Reset Button functionality
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 2: Reset Button - Clear all values");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let clearedCount = clearAllFormValues();

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Reset completed - ${clearedCount} fields cleared`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Text fields: Cleared (showing placeholder text)");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Checkboxes: Reset to initial state");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Combo boxes: Selection cleared (showing placeholder)");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// Add implementation guide
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Implementation Guide:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. Add Reset Button");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Place button at bottom of form or in control panel");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Connect button to clearAllFormValues() function");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. Reset All Fields");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Text fields: SetText('') - shows placeholder");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Checkboxes: SetChecked(defaultValue) - returns to initial state");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Combo boxes: SetText('') - shows placeholder");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Form Update");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Form displays in empty state after reset");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Ready for new input or reuse");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Maintains original form structure and validation rules");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
