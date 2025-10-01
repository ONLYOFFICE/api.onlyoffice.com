# Getting all form values

Collect all form field values into a single JSON object after form completion for analysis, server submission, or database storage:

- create a comprehensive form with multiple field types ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- collect all form values into a JSON object ([ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [ApiTextForm/GetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/GetText.md), [ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/IsChecked.md));
- format and display the collected data for further processing ([ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create a comprehensive survey form
function createSurveyForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("Customer Feedback Survey");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // Personal Information Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Personal Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Full Name
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

  // Email
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Email: ");
  paragraph.SetFontSize(12 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "your.email@example.com",
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // Age Group
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Age Group: ");
  paragraph.SetFontSize(12 * 2);
  let ageForm = Api.CreateComboBoxForm({
    key: "age_group",
    required: false,
    placeholder: "Select your age group",
    editable: false,
    autoFit: true,
    items: ["Under 18", "18-25", "26-35", "36-45", "46-55", "Over 55"]
  });
  paragraph.AddElement(ageForm);
  doc.Push(paragraph);

  // Feedback Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Feedback");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Service Rating
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Service Rating: ");
  paragraph.SetFontSize(12 * 2);
  let ratingForm = Api.CreateComboBoxForm({
    key: "service_rating",
    required: true,
    placeholder: "Rate our service",
    editable: false,
    autoFit: true,
    items: ["Excellent", "Good", "Average", "Poor", "Very Poor"]
  });
  paragraph.AddElement(ratingForm);
  doc.Push(paragraph);

  // Comments
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Additional Comments: ");
  paragraph.SetFontSize(12 * 2);
  let commentsForm = Api.CreateTextForm({
    key: "comments",
    required: false,
    placeholder: "Share your thoughts...",
    maxCharacters: 500,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(commentsForm);
  doc.Push(paragraph);

  // Preferences Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Preferences");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Newsletter Subscription
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter_subscription",
    required: false,
    tip: "Subscribe to our newsletter",
    checked: false
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" Subscribe to newsletter");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Marketing Emails
  paragraph = Api.CreateParagraph();
  let marketingCheckbox = Api.CreateCheckBoxForm({
    key: "marketing_emails",
    required: false,
    tip: "Receive marketing emails",
    checked: false
  });
  paragraph.AddElement(marketingCheckbox);
  paragraph.AddText(" Receive promotional offers");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Contact Permission
  paragraph = Api.CreateParagraph();
  let contactCheckbox = Api.CreateCheckBoxForm({
    key: "contact_permission",
    required: false,
    tip: "Allow us to contact you",
    checked: false
  });
  paragraph.AddElement(contactCheckbox);
  paragraph.AddText(" Allow follow-up contact");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);
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

// Function to format form data for display
function formatFormDataForDisplay(formData) {
  let formattedData = {};
  
  // Convert keys to readable labels
  let keyLabels = {
    "full_name": "Full Name",
    "email": "Email Address",
    "age_group": "Age Group",
    "service_rating": "Service Rating",
    "comments": "Comments",
    "newsletter_subscription": "Newsletter Subscription",
    "marketing_emails": "Marketing Emails",
    "contact_permission": "Contact Permission"
  };
  
  for (let key in formData) {
    let label = keyLabels[key] || key;
    let value = formData[key];
    
    // Format boolean values
    if (typeof value === 'boolean') {
      value = value ? 'Yes' : 'No';
    }
    
    // Handle empty values
    if (!value || value.trim() === '') {
      value = 'Not provided';
    }
    
    formattedData[label] = value;
  }
  
  return formattedData;
}

// Create the survey form
createSurveyForm();

// Add spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add completion section
paragraph = Api.CreateParagraph();
paragraph.AddText("Form Completion Summary");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Collect all form data
let allFormData = collectAllFormValues();
let formattedData = formatFormDataForDisplay(allFormData);

// Display collected data
paragraph = Api.CreateParagraph();
paragraph.AddText("Collected Form Data:");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Display each field and its value
for (let label in formattedData) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`${label}: ${formattedData[label]}`);
  paragraph.SetFontSize(11 * 2);
  doc.Push(paragraph);
}

// Add JSON representation
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("JSON Representation:");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(JSON.stringify(allFormData, null, 2));
paragraph.SetFontSize(10 * 2);
paragraph.SetFontFamily("Courier New");
doc.Push(paragraph);

// Add usage notes
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Usage Notes:");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• This JSON object can be sent to a server API for processing");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Data can be saved to a database or file system");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Form validation can be performed before data collection");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Empty fields are handled gracefully with default values");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);
```
