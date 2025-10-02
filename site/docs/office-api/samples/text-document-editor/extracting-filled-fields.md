# Extracting filled fields

Create a document with various content controls (form fields) and demonstrate how to extract all filled values with their tags:

- create content controls with different types and tags ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md), [ApiInlineLvlSdt](/docs/office-api/usage-api/text-document-api/ApiInlineLvlSdt/ApiInlineLvlSdt.md));
- retrieve all content controls from the document ([ApiDocument/GetAllContentControls](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md));
- extract tag and value pairs from each control ([ApiBlockLvlSdt/GetTag](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/GetTag.md), [ApiDocumentContent/GetText](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetText.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create a form with various content controls
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Employee Information Form").SetBold(true).SetFontSize(32);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(400);

// Create content controls for different form fields
let formFields = [
    { label: "Full Name:", tag: "fullName", placeholder: "Enter your full name" },
    { label: "Employee ID:", tag: "employeeId", placeholder: "Enter your employee ID" },
    { label: "Department:", tag: "department", placeholder: "Enter your department" },
    { label: "Position:", tag: "position", placeholder: "Enter your position" },
    { label: "Email:", tag: "email", placeholder: "Enter your email address" },
    { label: "Phone:", tag: "phone", placeholder: "Enter your phone number" }
];

// Add form fields to the document
for (let i = 0; i < formFields.length; i++) {
    let field = formFields[i];
    
    // Add label paragraph
    let labelParagraph = Api.CreateParagraph();
    labelParagraph.AddText(field.label).SetBold(true);
    labelParagraph.SetSpacingBefore(200);
    doc.Push(labelParagraph);
    
    // Create content control for input
    let contentControl = Api.CreateBlockLvlSdt();
    contentControl.SetTag(field.tag);
    contentControl.SetPlaceholderText(field.placeholder);
    
    // Add sample data to some fields (simulating user input)
    let sampleData = "";
    switch (field.tag) {
        case "fullName":
            sampleData = "John Smith";
            break;
        case "employeeId":
            sampleData = "EMP-2024-001";
            break;
        case "department":
            sampleData = "Information Technology";
            break;
        case "position":
            sampleData = "Senior Developer";
            break;
        case "email":
            sampleData = "john.smith@company.com";
            break;
        case "phone":
            // Leave this empty to demonstrate filtering
            sampleData = "";
            break;
    }
    
    if (sampleData !== "") {
        contentControl.AddText(sampleData);
    }
    
    doc.Push(contentControl);
}

// Add a separator
let separatorParagraph = Api.CreateParagraph();
separatorParagraph.AddText("--- EXTRACTED FORM DATA ---").SetBold(true);
separatorParagraph.SetSpacingBefore(600);
separatorParagraph.SetSpacingAfter(400);
separatorParagraph.SetJc("center");
doc.Push(separatorParagraph);

// Extract all content controls and their values
let allContentControls = doc.GetAllContentControls();
let extractedData = {};
let filledFieldsCount = 0;

// Process each content control
for (let i = 0; i < allContentControls.length; i++) {
    let control = allContentControls[i];
    let tag = control.GetTag();
    let content = control.GetContent();
    let value = content.GetText().trim();
    
    // Only include non-empty values
    if (tag && value !== "") {
        extractedData[tag] = value;
        filledFieldsCount++;
    }
}

// Display extracted data as JSON
let jsonResultParagraph = Api.CreateParagraph();
jsonResultParagraph.AddText("Extracted data as JSON:").SetBold(true);
doc.Push(jsonResultParagraph);

let jsonParagraph = Api.CreateParagraph();
jsonParagraph.AddText(JSON.stringify(extractedData, null, 2));
jsonParagraph.SetSpacingBefore(200);
jsonParagraph.SetSpacingAfter(400);
doc.Push(jsonParagraph);

// Display individual field-value pairs
let fieldsResultParagraph = Api.CreateParagraph();
fieldsResultParagraph.AddText("Individual field-value pairs:").SetBold(true);
doc.Push(fieldsResultParagraph);

let fieldIndex = 1;
for (let tag in extractedData) {
    let fieldParagraph = Api.CreateParagraph();
    fieldParagraph.AddText(fieldIndex + ". " + tag + ": " + extractedData[tag]);
    fieldParagraph.SetSpacingBefore(100);
    doc.Push(fieldParagraph);
    fieldIndex++;
}

// Display statistics
let statsParagraph = Api.CreateParagraph();
statsParagraph.AddText("Form Statistics:").SetBold(true);
statsParagraph.SetSpacingBefore(400);
doc.Push(statsParagraph);

let statsDetailParagraph = Api.CreateParagraph();
statsDetailParagraph.AddText("Total content controls: " + allContentControls.length + 
                            ", Filled fields: " + filledFieldsCount + 
                            ", Empty fields: " + (allContentControls.length - filledFieldsCount));
statsDetailParagraph.SetSpacingBefore(100);
doc.Push(statsDetailParagraph);

// Add usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates automatic extraction of form data from content controls. Empty fields are excluded from the results. This technique is useful for processing surveys, contracts, feedback forms, and other structured documents.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
