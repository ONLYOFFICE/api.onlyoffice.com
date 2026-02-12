---
hide_table_of_contents: true
---

# Creating form from JSON

Create forms automatically from simple JSON objects where field types and structure are determined automatically based on data context and values:

- analyze JSON data and determine appropriate field types ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- generate form fields with intelligent type detection ([ApiDocument/Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [ApiParagraph/AddElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md));
- create labels and initial values from JSON structure ([Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Sample JSON data from different sources
let employeeData = {
  "name": "Alice Johnson",
  "email": "alice.johnson@company.com",
  "phone": "+1-555-0123",
  "start_date": "2024-09-01",
  "department": "Engineering",
  "salary": 75000,
  "is_manager": false,
  "subscribe_newsletter": true,
  "emergency_contact": "Bob Johnson",
  "notes": "Experienced software developer with React expertise",
  "years_experience": 5,
  "remote_work": true
};

let projectData = {
  "project_name": "Mobile App Redesign",
  "description": "Complete redesign of the mobile application user interface",
  "start_date": "2024-10-15",
  "end_date": "2025-03-30",
  "budget": 150000,
  "priority": "High",
  "is_confidential": true,
  "team_size": 8,
  "client_email": "client@example.com",
  "requires_approval": false
};

// Function to analyze value and determine field type
function determineFieldType(key, value) {
  // Check by value type first
  if (typeof value === 'boolean') {
    return 'checkbox';
  }
  
  if (typeof value === 'number') {
    return 'number';
  }
  
  if (typeof value === 'string') {
    // Check key patterns for more specific types
    let lowerKey = key.toLowerCase();
    
    if (lowerKey.includes('email')) {
      return 'email';
    }
    
    if (lowerKey.includes('phone') || lowerKey.includes('tel')) {
      return 'phone';
    }
    
    if (lowerKey.includes('date')) {
      return 'date';
    }
    
    if (lowerKey.includes('password')) {
      return 'password';
    }
    
    if (lowerKey.includes('url') || lowerKey.includes('website')) {
      return 'url';
    }
    
    if (lowerKey.includes('description') || lowerKey.includes('notes') || lowerKey.includes('comment')) {
      return 'textarea';
    }
    
    // Check for predefined options based on key
    if (lowerKey.includes('priority')) {
      return 'select';
    }
    
    if (lowerKey.includes('department')) {
      return 'select';
    }
    
    // Check string length for textarea vs text
    if (value.length > 100) {
      return 'textarea';
    }
    
    return 'text';
  }
  
  return 'text'; // Default fallback
}

// Function to generate human-readable label from key
function generateLabel(key) {
  return key
    .replace(/_/g, ' ')           // Replace underscores with spaces
    .replace(/([A-Z])/g, ' $1')   // Add space before capital letters
    .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word
    .trim();
}

// Function to get placeholder text based on field type and key
function generatePlaceholder(key, fieldType) {
  let lowerKey = key.toLowerCase();
  
  switch (fieldType) {
    case 'email':
      return 'Enter email address';
    case 'phone':
      return 'Enter phone number';
    case 'date':
      return 'DD.MM.YYYY';
    case 'number':
      if (lowerKey.includes('salary') || lowerKey.includes('budget')) {
        return 'Enter amount';
      }
      if (lowerKey.includes('year')) {
        return 'Enter year';
      }
      return 'Enter number';
    case 'textarea':
      return 'Enter detailed information...';
    case 'url':
      return 'https://example.com';
    case 'password':
      return 'Enter password';
    default:
      return `Enter ${generateLabel(key).toLowerCase()}`;
  }
}

// Function to get select options based on key
function getSelectOptions(key) {
  let lowerKey = key.toLowerCase();
  
  if (lowerKey.includes('priority')) {
    return ['Low', 'Medium', 'High', 'Critical'];
  }
  
  if (lowerKey.includes('department')) {
    return ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
  }
  
  if (lowerKey.includes('status')) {
    return ['Active', 'Inactive', 'Pending', 'Completed'];
  }
  
  return [];
}

// Function to create form field based on type
function createFormField(key, value, fieldType) {
  let label = generateLabel(key);
  let placeholder = generatePlaceholder(key, fieldType);
  
  switch (fieldType) {
    case 'checkbox':
      return Api.CreateCheckBoxForm({
        key: key,
        required: false,
        tip: `Toggle ${label.toLowerCase()}`,
        checked: Boolean(value)
      });
      
    case 'select':
      let options = getSelectOptions(key);
      return Api.CreateComboBoxForm({
        key: key,
        required: false,
        placeholder: placeholder,
        editable: false,
        autoFit: true,
        items: options
      });
      
    case 'textarea':
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: 500,
        multiLine: true,
        autoFit: true
      });
      
    case 'number':
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: 20,
        multiLine: false,
        autoFit: true
      });
      
    default: // text, email, phone, date, url, password
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: fieldType === 'email' ? 80 : 100,
        multiLine: false,
        autoFit: true
      });
  }
}

// Function to generate form from JSON data
function generateFormFromJSON(jsonData, formTitle) {
  // Create form title
  let paragraph = doc.GetElement(0);
  paragraph.AddText(formTitle);
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
  
  // Add form generation info
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`Auto-generated from JSON (${Object.keys(jsonData).length} fields)`);
  paragraph.SetFontSize(12 * 2);
  paragraph.SetJc("center");
  paragraph.SetColor(128, 128, 128);
  doc.Push(paragraph);
  
  // Add spacing
  paragraph = Api.CreateParagraph();
  paragraph.AddText("");
  doc.Push(paragraph);
  
  let fieldCount = 0;
  let fieldTypes = {};
  
  // Process each key-value pair
  for (let [key, value] of Object.entries(jsonData)) {
    let fieldType = determineFieldType(key, value);
    let label = generateLabel(key);
    
    fieldTypes[key] = fieldType;
    fieldCount++;
    
    // Create label paragraph
    paragraph = Api.CreateParagraph();
    
    if (fieldType === 'checkbox') {
      // For checkboxes, create the checkbox first, then add label text
      let checkboxForm = createFormField(key, value, fieldType);
      paragraph.AddElement(checkboxForm);
      paragraph.AddText(` ${label}`);
    } else {
      // For other fields, add label text first, then the form field
      paragraph.AddText(`${label}: `);
      let formField = createFormField(key, value, fieldType);
      paragraph.AddElement(formField);
    }
    
    paragraph.SetFontSize(12 * 2);
    doc.Push(paragraph);
    
    // Set initial value if not checkbox
    if (fieldType !== 'checkbox' && value !== null && value !== undefined) {
      let forms = doc.GetFormsByKey(key);
      if (forms.length > 0) {
        let form = forms[0];
        if (fieldType === 'select') {
          // For select fields, set the value if it exists in options
          let options = getSelectOptions(key);
          if (options.includes(String(value))) {
            form.SetText(String(value));
          }
        } else {
          form.SetText(String(value));
        }
      }
    }
  }
  
  return { fieldCount, fieldTypes };
}

// Generate form from employee data
let employeeResult = generateFormFromJSON(employeeData, "Employee Information Form");

// Add spacing and analysis section
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Form Generation Analysis");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Step 1: Data Analysis
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 1: JSON Data Analysis");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Processed ${employeeResult.fieldCount} fields from JSON`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Analyzed data types and key patterns");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 2: Field Type Detection
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 2: Automatic Field Type Detection");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let typeCount = {};
for (let fieldType of Object.values(employeeResult.fieldTypes)) {
  typeCount[fieldType] = (typeCount[fieldType] || 0) + 1;
}

for (let [type, count] of Object.entries(typeCount)) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${type}: ${count} field${count > 1 ? 's' : ''}`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// Step 3: Form Generation
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 3: Dynamic Form Creation");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Generated labels from JSON keys");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Applied initial values from JSON data");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ Created appropriate placeholders for each field type");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Add second example with project data
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Second Example: Project Data");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let projectResult = generateFormFromJSON(projectData, "Project Information Form");

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
paragraph.AddText("1. Data Reception");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Accept JSON from user input, API, or database");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Validate JSON structure and data types");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. Analysis and Interpretation");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Analyze value types (string, boolean, number)");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use key patterns for intelligent field type detection");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Consider context and business logic");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Form Generation");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Create appropriate form fields based on detected types");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Generate human-readable labels from keys");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Set initial values and appropriate placeholders");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// Add field type detection rules
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Field Type Detection Rules:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let detectionRules = [
  "Boolean values → Checkbox fields",
  "Number values → Number input fields", 
  "Keys containing 'email' → Email fields",
  "Keys containing 'phone' → Phone fields",
  "Keys containing 'date' → Date fields",
  "Keys containing 'description/notes' → Textarea fields",
  "Keys containing 'priority/department' → Select fields",
  "Long strings (>100 chars) → Textarea fields",
  "Default → Text input fields"
];

for (let rule of detectionRules) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${rule}`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// Add benefits
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Benefits:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Rapid form prototyping from existing data");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Automatic field type detection reduces manual work");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Consistent form generation across applications");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Easy integration with APIs and databases");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
