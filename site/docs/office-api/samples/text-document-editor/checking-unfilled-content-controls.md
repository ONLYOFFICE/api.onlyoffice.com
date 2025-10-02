# Checking unfilled content controls

Create a document with content controls and demonstrate how to validate and identify unfilled required fields:

- create a document template with various content controls ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md));
- scan all content controls to identify empty fields ([ApiDocument/GetAllContentControls](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md));
- validate field content and highlight unfilled controls ([ApiDocumentContent/GetText](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetText.md), [ApiBlockLvlSdt/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/SetBackgroundColor.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create employment contract template
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("EMPLOYMENT CONTRACT").SetBold(true).SetFontSize(36);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(600);

let contractNoteParagraph = Api.CreateParagraph();
contractNoteParagraph.AddText("Please fill in all required fields marked with (*) before submitting.").SetItalic(true);
contractNoteParagraph.SetJc("center");
contractNoteParagraph.SetSpacingAfter(400);
doc.Push(contractNoteParagraph);

// Employee information section
let employeeSectionParagraph = Api.CreateParagraph();
employeeSectionParagraph.AddText("EMPLOYEE INFORMATION").SetBold(true).SetFontSize(24);
employeeSectionParagraph.SetSpacingBefore(400);
employeeSectionParagraph.SetSpacingAfter(300);
doc.Push(employeeSectionParagraph);

// Define form fields with required/optional status
let formFields = [
    { label: "Full Name (*):", tag: "full_name", required: true, sampleData: "Emily Clark" },
    { label: "Email Address (*):", tag: "email", required: true, sampleData: "" }, // Intentionally empty
    { label: "Phone Number:", tag: "phone", required: false, sampleData: "+1 (555) 123-4567" },
    { label: "Position (*):", tag: "position", required: true, sampleData: "Sales Manager" },
    { label: "Department:", tag: "department", required: false, sampleData: "" }, // Intentionally empty
    { label: "Start Date (*):", tag: "start_date", required: true, sampleData: "" }, // Intentionally empty
    { label: "Salary (*):", tag: "salary", required: true, sampleData: "$65,000" },
    { label: "Agreement Date (*):", tag: "agreement_date", required: true, sampleData: "" }, // Intentionally empty
    { label: "Emergency Contact:", tag: "emergency_contact", required: false, sampleData: "John Clark - Brother" },
    { label: "Special Requirements:", tag: "special_requirements", required: false, sampleData: "" }
];

// Create form fields
for (let i = 0; i < formFields.length; i++) {
    let field = formFields[i];
    
    let labelParagraph = Api.CreateParagraph();
    labelParagraph.AddText(field.label).SetBold(true);
    labelParagraph.SetSpacingBefore(200);
    doc.Push(labelParagraph);
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText("Enter " + field.label.replace(" (*):", "").replace(":", "").toLowerCase());
    
    // Add sample data if provided
    if (field.sampleData !== "") {
        fieldControl.AddText(field.sampleData);
    }
    
    doc.Push(fieldControl);
}

// Validation section
let validationSectionParagraph = Api.CreateParagraph();
validationSectionParagraph.AddText("--- FIELD VALIDATION PROCESS ---").SetBold(true);
validationSectionParagraph.SetSpacingBefore(800);
validationSectionParagraph.SetSpacingAfter(400);
validationSectionParagraph.SetJc("center");
doc.Push(validationSectionParagraph);

// Get all content controls and validate them
let allContentControls = doc.GetAllContentControls();
let unfilledFields = [];
let filledFields = [];
let requiredFieldsMap = {};

// Create a map of required fields for easy lookup
for (let i = 0; i < formFields.length; i++) {
    let field = formFields[i];
    requiredFieldsMap[field.tag] = {
        label: field.label,
        required: field.required
    };
}

// Validate each content control
for (let i = 0; i < allContentControls.length; i++) {
    let control = allContentControls[i];
    let tag = control.GetTag();
    
    if (tag && requiredFieldsMap.hasOwnProperty(tag)) {
        let content = control.GetContent();
        let value = content.GetText().trim();
        let fieldInfo = requiredFieldsMap[tag];
        
        if (value === "" || value === fieldInfo.label) {
            // Field is empty
            unfilledFields.push({
                tag: tag,
                label: fieldInfo.label,
                required: fieldInfo.required,
                control: control
            });
            
            // Highlight unfilled required fields with yellow background
            if (fieldInfo.required) {
                control.SetBackgroundColor(255, 255, 0, false); // Yellow background
            } else {
                control.SetBackgroundColor(255, 240, 200, false); // Light orange for optional
            }
        } else {
            // Field is filled
            filledFields.push({
                tag: tag,
                label: fieldInfo.label,
                value: value,
                required: fieldInfo.required
            });
            
            // Set green background for filled fields
            control.SetBackgroundColor(200, 255, 200, false); // Light green background
        }
    }
}

// Generate validation report
let reportParagraph = Api.CreateParagraph();
reportParagraph.AddText("VALIDATION REPORT").SetBold(true).SetFontSize(20);
reportParagraph.SetSpacingBefore(400);
doc.Push(reportParagraph);

// Count required vs optional unfilled fields
let unfilledRequired = unfilledFields.filter(field => field.required);
let unfilledOptional = unfilledFields.filter(field => !field.required);

// Summary statistics
let summaryParagraph = Api.CreateParagraph();
summaryParagraph.AddText("Summary:").SetBold(true);
summaryParagraph.SetSpacingBefore(200);
doc.Push(summaryParagraph);

let statsParagraph = Api.CreateParagraph();
statsParagraph.AddText("• Total fields: " + allContentControls.length);
statsParagraph.SetSpacingBefore(100);
doc.Push(statsParagraph);

let filledStatsParagraph = Api.CreateParagraph();
filledStatsParagraph.AddText("• Filled fields: " + filledFields.length);
filledStatsParagraph.SetSpacingBefore(100);
doc.Push(filledStatsParagraph);

let unfilledStatsParagraph = Api.CreateParagraph();
unfilledStatsParagraph.AddText("• Unfilled fields: " + unfilledFields.length + " (" + unfilledRequired.length + " required, " + unfilledOptional.length + " optional)");
unfilledStatsParagraph.SetSpacingBefore(100);
doc.Push(unfilledStatsParagraph);

// Validation status
let validationStatusParagraph = Api.CreateParagraph();
if (unfilledRequired.length === 0) {
    validationStatusParagraph.AddText("✓ VALIDATION PASSED - All required fields are filled").SetBold(true).SetColor(0, 128, 0);
} else {
    validationStatusParagraph.AddText("✗ VALIDATION FAILED - " + unfilledRequired.length + " required field(s) missing").SetBold(true).SetColor(255, 0, 0);
}
validationStatusParagraph.SetSpacingBefore(200);
doc.Push(validationStatusParagraph);

// List unfilled required fields
if (unfilledRequired.length > 0) {
    let requiredFieldsParagraph = Api.CreateParagraph();
    requiredFieldsParagraph.AddText("Missing Required Fields:").SetBold(true).SetColor(255, 0, 0);
    requiredFieldsParagraph.SetSpacingBefore(300);
    doc.Push(requiredFieldsParagraph);
    
    for (let i = 0; i < unfilledRequired.length; i++) {
        let field = unfilledRequired[i];
        let fieldParagraph = Api.CreateParagraph();
        fieldParagraph.AddText("• " + field.tag + " (" + field.label.replace(" (*):", "") + ")");
        fieldParagraph.SetSpacingBefore(100);
        fieldParagraph.SetColor(255, 0, 0);
        doc.Push(fieldParagraph);
    }
}

// List unfilled optional fields
if (unfilledOptional.length > 0) {
    let optionalFieldsParagraph = Api.CreateParagraph();
    optionalFieldsParagraph.AddText("Unfilled Optional Fields:").SetBold(true).SetColor(255, 140, 0);
    optionalFieldsParagraph.SetSpacingBefore(300);
    doc.Push(optionalFieldsParagraph);
    
    for (let i = 0; i < unfilledOptional.length; i++) {
        let field = unfilledOptional[i];
        let fieldParagraph = Api.CreateParagraph();
        fieldParagraph.AddText("• " + field.tag + " (" + field.label.replace(":", "") + ")");
        fieldParagraph.SetSpacingBefore(100);
        fieldParagraph.SetColor(255, 140, 0);
        doc.Push(fieldParagraph);
    }
}

// List filled fields
let filledFieldsParagraph = Api.CreateParagraph();
filledFieldsParagraph.AddText("Successfully Filled Fields:").SetBold(true).SetColor(0, 128, 0);
filledFieldsParagraph.SetSpacingBefore(300);
doc.Push(filledFieldsParagraph);

for (let i = 0; i < filledFields.length; i++) {
    let field = filledFields[i];
    let fieldParagraph = Api.CreateParagraph();
    fieldParagraph.AddText("• " + field.tag + ": \"" + field.value + "\"" + (field.required ? " (required)" : " (optional)"));
    fieldParagraph.SetSpacingBefore(100);
    fieldParagraph.SetColor(0, 128, 0);
    doc.Push(fieldParagraph);
}

// Action recommendations
let actionsParagraph = Api.CreateParagraph();
actionsParagraph.AddText("Recommended Actions:").SetBold(true);
actionsParagraph.SetSpacingBefore(400);
doc.Push(actionsParagraph);

if (unfilledRequired.length > 0) {
    let action1Paragraph = Api.CreateParagraph();
    action1Paragraph.AddText("• Fill all required fields highlighted in yellow before proceeding");
    action1Paragraph.SetSpacingBefore(100);
    doc.Push(action1Paragraph);
    
    let action2Paragraph = Api.CreateParagraph();
    action2Paragraph.AddText("• Document submission should be blocked until validation passes");
    action2Paragraph.SetSpacingBefore(100);
    doc.Push(action2Paragraph);
} else {
    let action3Paragraph = Api.CreateParagraph();
    action3Paragraph.AddText("• Document is ready for submission or processing");
    action3Paragraph.SetSpacingBefore(100);
    doc.Push(action3Paragraph);
}

let action4Paragraph = Api.CreateParagraph();
action4Paragraph.AddText("• Consider filling optional fields highlighted in light orange for completeness");
action4Paragraph.SetSpacingBefore(100);
doc.Push(action4Paragraph);

// Color legend
let legendParagraph = Api.CreateParagraph();
legendParagraph.AddText("Color Legend:").SetBold(true);
legendParagraph.SetSpacingBefore(400);
doc.Push(legendParagraph);

let legend1Paragraph = Api.CreateParagraph();
legend1Paragraph.AddText("• Yellow background: Unfilled required field");
legend1Paragraph.SetSpacingBefore(100);
doc.Push(legend1Paragraph);

let legend2Paragraph = Api.CreateParagraph();
legend2Paragraph.AddText("• Light orange background: Unfilled optional field");
legend2Paragraph.SetSpacingBefore(100);
doc.Push(legend2Paragraph);

let legend3Paragraph = Api.CreateParagraph();
legend3Paragraph.AddText("• Light green background: Successfully filled field");
legend3Paragraph.SetSpacingBefore(100);
doc.Push(legend3Paragraph);

// Usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates comprehensive validation of content controls in a document. The system identifies unfilled required and optional fields, provides visual feedback through background colors, and generates detailed validation reports. This technique is essential for ensuring data completeness in contracts, applications, surveys, and other critical documents before processing or submission.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
