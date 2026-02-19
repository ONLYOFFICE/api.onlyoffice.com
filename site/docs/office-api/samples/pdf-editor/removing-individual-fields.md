---
hide_table_of_contents: true
---

# Removing individual fields

Remove unnecessary fields from forms by their ID or index for interface simplification, hiding internal fields, or dynamic form customization based on user roles:

- create a form with role-specific fields ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- implement field removal functionality ([ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md));
- customize forms based on user permissions ([ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Simulate user authentication and role determination
let currentUser = {
  username: "john.employee",
  role: "employee",  // Can be "admin" or "employee"
  department: "Sales"
};

// Create a comprehensive employee evaluation form
function createEmployeeEvaluationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("Employee Performance Evaluation");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // Basic Information Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Basic Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Employee Name
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Employee Name: ");
  paragraph.SetFontSize(12 * 2);
  let nameForm = Api.CreateTextForm({
    key: "employee_name",
    required: true,
    placeholder: "Enter employee name",
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // Department
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Department: ");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "Select department",
    editable: false,
    autoFit: true,
    items: ["Sales", "Marketing", "IT", "HR", "Finance"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // Performance Rating
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Overall Performance: ");
  paragraph.SetFontSize(12 * 2);
  let ratingForm = Api.CreateComboBoxForm({
    key: "performance_rating",
    required: true,
    placeholder: "Select rating",
    editable: false,
    autoFit: true,
    items: ["Excellent", "Good", "Satisfactory", "Needs Improvement"]
  });
  paragraph.AddElement(ratingForm);
  doc.Push(paragraph);

  // Public Comments (visible to all)
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Public Comments: ");
  paragraph.SetFontSize(12 * 2);
  let publicCommentsForm = Api.CreateTextForm({
    key: "public_comments",
    required: false,
    placeholder: "Enter feedback visible to employee",
    maxCharacters: 200,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(publicCommentsForm);
  doc.Push(paragraph);

  // Internal Notes (admin only)
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Internal Notes (Admin Only): ");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  let internalNotesForm = Api.CreateTextForm({
    key: "internal_notes",
    required: false,
    placeholder: "Confidential notes for management only",
    maxCharacters: 300,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(internalNotesForm);
  doc.Push(paragraph);

  // Salary Adjustment (admin only)
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Salary Adjustment: ");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  let salaryForm = Api.CreateTextForm({
    key: "salary_adjustment",
    required: false,
    placeholder: "Enter adjustment amount",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(salaryForm);
  doc.Push(paragraph);

  // Termination Risk (admin only)
  paragraph = Api.CreateParagraph();
  let terminationCheckbox = Api.CreateCheckBoxForm({
    key: "termination_risk",
    required: false,
    tip: "Employee at risk of termination",
    checked: false
  });
  paragraph.AddElement(terminationCheckbox);
  paragraph.AddText(" At risk of termination (Admin Only)");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);

  // Promotion Candidate (admin only)
  paragraph = Api.CreateParagraph();
  let promotionCheckbox = Api.CreateCheckBoxForm({
    key: "promotion_candidate",
    required: false,
    tip: "Candidate for promotion",
    checked: false
  });
  paragraph.AddElement(promotionCheckbox);
  paragraph.AddText(" Promotion candidate (Admin Only)");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);
}

// Function to remove fields based on user role
function removeFieldsByUserRole(userRole) {
  let removedFields = [];
  
  // Define admin-only fields that should be removed for non-admin users
  let adminOnlyFields = [
    "internal_notes",
    "salary_adjustment", 
    "termination_risk",
    "promotion_candidate"
  ];
  
  // If user is not admin, remove admin-only fields
  if (userRole !== "admin") {
    for (let fieldKey of adminOnlyFields) {
      let removed = removeFieldByKey(fieldKey);
      if (removed) {
        removedFields.push(fieldKey);
      }
    }
  }
  
  return removedFields;
}

// Function to remove a specific field by its key
function removeFieldByKey(fieldKey) {
  let forms = doc.GetFormsByKey(fieldKey);
  
  if (forms.length > 0) {
    let form = forms[0];
    let formType = form.GetFormType();
    
    // Mark field as removed based on form type
    if (formType === "textForm") {
      // For text forms, set removal message
      form.SetText("[FIELD REMOVED - INSUFFICIENT PERMISSIONS]");
    } else if (formType === "checkBoxForm") {
      // For checkboxes, uncheck to indicate removal
      form.SetChecked(false);
    } else if (formType === "comboBoxForm") {
      // For combo boxes, set removal message
      form.SetText("[REMOVED - NO ACCESS]");
    }
    
    // Apply strikethrough formatting to the form's text properties
    try {
      let textPr = form.GetTextPr();
      if (textPr) {
        textPr.SetStrikeout(true);
      }
    } catch (e) {
      // If GetTextPr is not available, continue without strikethrough
      console.log("Strikethrough formatting not available for this form type");
    }
    
    return true;
  }
  
  return false;
}

// Function to check if field exists in form
function checkFieldExists(fieldKey) {
  let forms = doc.GetFormsByKey(fieldKey);
  return forms.length > 0;
}

// Function to get user role (simulated authentication)
function getUserRole(username) {
  // Simulate role determination based on username
  let userRoles = {
    "admin.manager": "admin",
    "john.employee": "employee",
    "jane.supervisor": "employee",
    "mike.admin": "admin"
  };
  
  return userRoles[username] || "employee";
}

// Create the evaluation form
createEmployeeEvaluationForm();

// Add spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add role-based field removal demonstration
paragraph = Api.CreateParagraph();
paragraph.AddText("Role-Based Field Management");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Step 1: Determine user role
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 1: User Role Determination");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let userRole = getUserRole(currentUser.username);
currentUser.role = userRole;

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ User: ${currentUser.username}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Role: ${currentUser.role}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Department: ${currentUser.department}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 2: Check field existence
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 2: Field Existence Check");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let internalNotesExists = checkFieldExists("internal_notes");
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Internal Notes field exists: ${internalNotesExists ? "Yes" : "No"}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 3: Remove fields based on role
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 3: Dynamic Field Removal");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let removedFields = removeFieldsByUserRole(currentUser.role);

if (removedFields.length > 0) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`✓ Removed ${removedFields.length} admin-only fields:`);
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);
  
  for (let fieldKey of removedFields) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText(`  • ${fieldKey}`);
    paragraph.SetFontSize(10 * 2);
    doc.Push(paragraph);
  }
} else {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("✓ No fields removed - user has admin privileges");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(0, 128, 0);
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
paragraph.AddText("1. User Role Determination");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Authenticate user and determine role (admin/employee)");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Check user permissions for sensitive fields");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. Field Existence Check");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use GetFormsByKey() to find fields by ID");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Verify field exists before attempting removal");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Dynamic Field Removal");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Remove or hide fields based on user role");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Maintain form structure and validation");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Provide appropriate user feedback");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// Add use cases
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Common Use Cases:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Hide sensitive fields from non-admin users");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Simplify forms based on user experience level");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Remove department-specific fields for other departments");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Dynamic form customization based on previous selections");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
