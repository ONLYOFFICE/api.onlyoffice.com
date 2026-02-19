---
hide_table_of_contents: true
---

# Setting default values

Automatically populate form fields based on user authentication data to reduce manual input and speed up form completion in personal dashboards, internal portals, and surveys:

- retrieve user data from authentication system ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md));
- populate form fields programmatically ([ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md), [ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md), [ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md));
- handle different field types with appropriate default values ([ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [ApiComboBoxForm/SetText](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetText.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Simulated user authentication data
let authenticatedUser = {
  id: "emp_12345",
  full_name: "Emily Johnson",
  email: "emily.johnson@example.com",
  phone: "+1-555-0198",
  department: "Marketing",
  position: "Senior Marketing Manager",
  employee_id: "EMP-2024-0198",
  start_date: "2022-03-15",
  manager: "Sarah Wilson",
  office_location: "New York",
  work_schedule: "Full-time",
  has_company_car: true,
  emergency_contact: "Michael Johnson",
  emergency_phone: "+1-555-0199",
  preferred_language: "English",
  newsletter_subscription: true,
  training_completed: false
};

// Additional user preferences and settings
let userPreferences = {
  notification_email: true,
  sms_alerts: false,
  work_from_home: true,
  parking_space: "A-15",
  dietary_restrictions: "Vegetarian",
  t_shirt_size: "M"
};

// Create employee profile update form
function createEmployeeProfileForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("Employee Profile Update Form");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // Add auto-fill notice
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Pre-filled with your current information - modify as needed");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetJc("center");
  paragraph.SetColor(128, 128, 128);
  doc.Push(paragraph);

  // Add spacing
  paragraph = Api.CreateParagraph();
  paragraph.AddText("");
  doc.Push(paragraph);

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
    placeholder: "Enter your email address",
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // Phone
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Phone: ");
  paragraph.SetFontSize(12 * 2);
  let phoneForm = Api.CreateTextForm({
    key: "phone",
    required: false,
    placeholder: "Enter your phone number",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(phoneForm);
  doc.Push(paragraph);

  // Work Information Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Work Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Department
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Department: ");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "Select your department",
    editable: false,
    autoFit: true,
    items: ["Marketing", "Sales", "Engineering", "HR", "Finance", "Operations", "Legal"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // Position
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Position: ");
  paragraph.SetFontSize(12 * 2);
  let positionForm = Api.CreateTextForm({
    key: "position",
    required: true,
    placeholder: "Enter your job title",
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(positionForm);
  doc.Push(paragraph);

  // Employee ID
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Employee ID: ");
  paragraph.SetFontSize(12 * 2);
  let empIdForm = Api.CreateTextForm({
    key: "employee_id",
    required: false,
    placeholder: "Employee ID",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(empIdForm);
  doc.Push(paragraph);

  // Manager
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Direct Manager: ");
  paragraph.SetFontSize(12 * 2);
  let managerForm = Api.CreateTextForm({
    key: "manager",
    required: false,
    placeholder: "Manager name",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(managerForm);
  doc.Push(paragraph);

  // Office Location
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Office Location: ");
  paragraph.SetFontSize(12 * 2);
  let locationForm = Api.CreateComboBoxForm({
    key: "office_location",
    required: false,
    placeholder: "Select office location",
    editable: false,
    autoFit: true,
    items: ["New York", "Los Angeles", "Chicago", "Boston", "Austin", "Seattle", "Remote"]
  });
  paragraph.AddElement(locationForm);
  doc.Push(paragraph);

  // Work Schedule
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Work Schedule: ");
  paragraph.SetFontSize(12 * 2);
  let scheduleForm = Api.CreateComboBoxForm({
    key: "work_schedule",
    required: false,
    placeholder: "Select work schedule",
    editable: false,
    autoFit: true,
    items: ["Full-time", "Part-time", "Contract", "Intern"]
  });
  paragraph.AddElement(scheduleForm);
  doc.Push(paragraph);

  // Preferences Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Preferences & Settings");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Company Car
  paragraph = Api.CreateParagraph();
  let carCheckbox = Api.CreateCheckBoxForm({
    key: "has_company_car",
    required: false,
    tip: "Company car assigned",
    checked: false
  });
  paragraph.AddElement(carCheckbox);
  paragraph.AddText(" Company car assigned");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Work from Home
  paragraph = Api.CreateParagraph();
  let wfhCheckbox = Api.CreateCheckBoxForm({
    key: "work_from_home",
    required: false,
    tip: "Work from home option",
    checked: false
  });
  paragraph.AddElement(wfhCheckbox);
  paragraph.AddText(" Work from home enabled");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Newsletter Subscription
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter_subscription",
    required: false,
    tip: "Subscribe to company newsletter",
    checked: false
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" Subscribe to company newsletter");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Emergency Contact Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Emergency Contact");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Emergency Contact Name
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Contact Name: ");
  paragraph.SetFontSize(12 * 2);
  let emergencyContactForm = Api.CreateTextForm({
    key: "emergency_contact",
    required: false,
    placeholder: "Emergency contact name",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyContactForm);
  doc.Push(paragraph);

  // Emergency Phone
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Contact Phone: ");
  paragraph.SetFontSize(12 * 2);
  let emergencyPhoneForm = Api.CreateTextForm({
    key: "emergency_phone",
    required: false,
    placeholder: "Emergency contact phone",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyPhoneForm);
  doc.Push(paragraph);

  // Additional Preferences
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Additional Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // T-Shirt Size
  paragraph = Api.CreateParagraph();
  paragraph.AddText("T-Shirt Size: ");
  paragraph.SetFontSize(12 * 2);
  let tshirtForm = Api.CreateComboBoxForm({
    key: "t_shirt_size",
    required: false,
    placeholder: "Select size",
    editable: false,
    autoFit: true,
    items: ["XS", "S", "M", "L", "XL", "XXL"]
  });
  paragraph.AddElement(tshirtForm);
  doc.Push(paragraph);

  // Dietary Restrictions
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Dietary Restrictions: ");
  paragraph.SetFontSize(12 * 2);
  let dietForm = Api.CreateTextForm({
    key: "dietary_restrictions",
    required: false,
    placeholder: "Any dietary restrictions",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(dietForm);
  doc.Push(paragraph);
}

// Function to populate form with user default values
function populateFormWithDefaults(userData, preferences) {
  let populatedCount = 0;
  let allData = { ...userData, ...preferences };
  
  for (let [key, value] of Object.entries(allData)) {
    let forms = doc.GetFormsByKey(key);
    
    if (forms.length > 0) {
      let form = forms[0];
      let formType = form.GetFormType();
      
      if (formType === "textForm") {
        if (value !== null && value !== undefined) {
          form.SetText(String(value));
          populatedCount++;
        }
      } else if (formType === "checkBoxForm") {
        form.SetChecked(Boolean(value));
        populatedCount++;
      } else if (formType === "comboBoxForm") {
        if (value !== null && value !== undefined) {
          form.SetText(String(value));
          populatedCount++;
        }
      }
    }
  }
  
  return populatedCount;
}

// Function to get user data summary
function getUserDataSummary(userData) {
  return {
    totalFields: Object.keys(userData).length,
    textFields: Object.values(userData).filter(v => typeof v === 'string').length,
    booleanFields: Object.values(userData).filter(v => typeof v === 'boolean').length,
    dateFields: Object.keys(userData).filter(k => k.includes('date')).length,
    contactFields: Object.keys(userData).filter(k => k.includes('phone') || k.includes('email')).length
  };
}

// Create the employee profile form
createEmployeeProfileForm();

// Add spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add auto-population demonstration
paragraph = Api.CreateParagraph();
paragraph.AddText("Default Values Population Demo");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Step 1: User Authentication Data
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 1: User Authentication Data");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let userSummary = getUserDataSummary(authenticatedUser);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ User: ${authenticatedUser.full_name} (${authenticatedUser.employee_id})`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Department: ${authenticatedUser.department}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Available data fields: ${userSummary.totalFields}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 2: Form Population
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 2: Automatic Form Population");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let populatedCount = populateFormWithDefaults(authenticatedUser, userPreferences);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Populated ${populatedCount} form fields with default values`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Text fields filled with user profile data");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Dropdown selections set to current values");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Checkboxes set according to user preferences");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 3: User Flexibility
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 3: User Modification Flexibility");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ All fields remain editable for user modifications");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Pre-filled values serve as starting point");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Reduces manual input while maintaining flexibility");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Add sample data display
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Sample Default Values Applied:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let sampleFields = [
  ["full_name", authenticatedUser.full_name, "Text Field"],
  ["email", authenticatedUser.email, "Text Field"],
  ["department", authenticatedUser.department, "Dropdown"],
  ["has_company_car", authenticatedUser.has_company_car ? "Yes" : "No", "Checkbox"],
  ["work_from_home", userPreferences.work_from_home ? "Yes" : "No", "Checkbox"]
];

for (let [field, value, type] of sampleFields) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${field}: "${value}" (${type})`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

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
paragraph.AddText("1. User Data Retrieval");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Obtain user data from authentication system");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Include profile information, preferences, and settings");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Validate data completeness and accuracy");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. Form Field Population");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use GetFormsByKey() to locate specific fields");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Apply SetText() for text and dropdown fields");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use SetChecked() for checkbox fields");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Flexibility Maintenance");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Keep all fields editable for user modifications");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Provide clear indication of pre-filled data");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Handle cases where default data may be outdated");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// Add benefits section
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Benefits:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Significantly reduces form completion time");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Improves user experience in personal dashboards");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Reduces data entry errors");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Increases form completion rates");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Enhances user satisfaction with internal systems");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
