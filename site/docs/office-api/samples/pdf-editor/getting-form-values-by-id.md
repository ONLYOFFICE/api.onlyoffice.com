# Getting form values by ID

Extract values from specific form fields using their unique identifiers for validation and dynamic processing:

- create a form with various input types and unique identifiers ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- retrieve specific form values by their key/ID ([ApiDocument/GetFormsByKey](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetFormsByKey.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md));
- validate form data and highlight required fields ([ApiTextForm/GetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/GetText.md), [ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/IsChecked.md), [ApiFormBase/SetBorderColor](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/SetBorderColor.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create a registration form with various field types
function createRegistrationForm() {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText("User Registration Form");
  paragraph.SetFontSize(24 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
  doc.Push(paragraph);

  // Email field (required)
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Email (required): ");
  paragraph.SetFontSize(14 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "Enter your email address",
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // Full name field
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Full Name: ");
  paragraph.SetFontSize(14 * 2);
  let nameForm = Api.CreateTextForm({
    key: "full_name",
    required: false,
    placeholder: "Enter your full name",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // Age selection
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Age Group: ");
  paragraph.SetFontSize(14 * 2);
  let ageForm = Api.CreateComboBoxForm({
    key: "age_group",
    required: false,
    placeholder: "Select age group",
    editable: false,
    autoFit: true,
    items: ["18-25", "26-35", "36-45", "46-55", "55+"]
  });
  paragraph.AddElement(ageForm);
  doc.Push(paragraph);

  // Terms agreement checkbox (required)
  paragraph = Api.CreateParagraph();
  let termsCheckbox = Api.CreateCheckBoxForm({
    key: "terms_agreed",
    required: true,
    tip: "You must agree to terms and conditions",
    checked: false
  });
  paragraph.AddElement(termsCheckbox);
  paragraph.AddText(" I agree to the terms and conditions (required)");
  paragraph.SetFontSize(14 * 2);
  doc.Push(paragraph);

  // Newsletter subscription checkbox (optional)
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter_subscription",
    required: false,
    tip: "Subscribe to our newsletter",
    checked: false
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" Subscribe to newsletter");
  paragraph.SetFontSize(14 * 2);
  doc.Push(paragraph);
}

// Function to validate form and get values by ID
function validateFormById() {
  let validationResults = {};
  let isFormValid = true;

  // Check email field (required)
  let emailForms = doc.GetFormsByKey("email");
  if (emailForms.length > 0) {
    let emailValue = emailForms[0].GetText();
    validationResults.email = emailValue;
    
    if (!emailValue || emailValue.trim() === "") {
      // Highlight field in red if empty
      emailForms[0].SetBorderColor(255, 0, 0);
      isFormValid = false;
    } else if (!emailValue.includes("@")) {
      // Highlight field in orange if invalid format
      emailForms[0].SetBorderColor(255, 165, 0);
      isFormValid = false;
    } else {
      // Set green border if valid
      emailForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // Check full name field
  let nameForms = doc.GetFormsByKey("full_name");
  if (nameForms.length > 0) {
    let nameValue = nameForms[0].GetText();
    validationResults.full_name = nameValue;
    
    if (nameValue && nameValue.trim() !== "") {
      nameForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // Check age group selection
  let ageForms = doc.GetFormsByKey("age_group");
  if (ageForms.length > 0) {
    let ageValue = ageForms[0].GetText();
    validationResults.age_group = ageValue;
    
    if (ageValue && ageValue.trim() !== "") {
      ageForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // Check terms agreement (required)
  let termsForms = doc.GetFormsByKey("terms_agreed");
  if (termsForms.length > 0) {
    let termsChecked = termsForms[0].IsChecked();
    validationResults.terms_agreed = termsChecked;
    
    if (!termsChecked) {
      // Highlight checkbox in red if not checked
      termsForms[0].SetBorderColor(255, 0, 0);
      isFormValid = false;
    } else {
      // Set green border if checked
      termsForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // Check newsletter subscription (optional)
  let newsletterForms = doc.GetFormsByKey("newsletter_subscription");
  if (newsletterForms.length > 0) {
    let newsletterChecked = newsletterForms[0].IsChecked();
    validationResults.newsletter_subscription = newsletterChecked;
    
    // Always green border for optional field
    newsletterForms[0].SetBorderColor(0, 255, 0);
  }

  return { isValid: isFormValid, data: validationResults };
}

// Create the form
createRegistrationForm();

// Add some spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add validation section
paragraph = Api.CreateParagraph();
paragraph.AddText("Form Validation Results:");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Perform validation and display results
let validation = validateFormById();

paragraph = Api.CreateParagraph();
if (validation.isValid) {
  paragraph.AddText("✓ Form is valid and ready for submission");
  paragraph.SetColor(0, 128, 0);
} else {
  paragraph.AddText("✗ Form has validation errors (check highlighted fields)");
  paragraph.SetColor(255, 0, 0);
}
paragraph.SetFontSize(14 * 2);
doc.Push(paragraph);

// Display extracted values
paragraph = Api.CreateParagraph();
paragraph.AddText("Extracted Values:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

for (let key in validation.data) {
  paragraph = Api.CreateParagraph();
  let value = validation.data[key];
  if (typeof value === 'boolean') {
    value = value ? 'Yes' : 'No';
  }
  paragraph.AddText(`${key}: ${value || 'Not provided'}`);
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);
}
```
