# Finding field by tag

Create a document with various content controls and demonstrate how to find specific fields by their tags and retrieve their values:

- create a document template with tagged content controls ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md));
- search for specific content controls by tag ([ApiDocument/GetAllContentControls](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md), [ApiBlockLvlSdt/GetTag](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/GetTag.md));
- retrieve and process field values based on type ([ApiDocumentContent/GetText](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetText.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create service agreement template
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("SERVICE AGREEMENT FORM").SetBold(true).SetFontSize(32);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(600);

// Client information section
let clientSectionParagraph = Api.CreateParagraph();
clientSectionParagraph.AddText("CLIENT INFORMATION").SetBold(true).SetFontSize(24);
clientSectionParagraph.SetSpacingBefore(400);
clientSectionParagraph.SetSpacingAfter(300);
doc.Push(clientSectionParagraph);

// Create various types of content controls with sample data
let formData = [
    { label: "Client Name:", tag: "client_name", type: "text", value: "TechCorp Solutions Inc." },
    { label: "Contact Email:", tag: "contact_email", type: "text", value: "contact@techcorp.com" },
    { label: "Project Budget:", tag: "project_budget", type: "text", value: "$50,000" },
    { label: "Service Start Date:", tag: "start_date", type: "date", value: "2024-01-15" },
    { label: "Service End Date:", tag: "end_date", type: "date", value: "2024-06-15" },
    { label: "Priority Level:", tag: "priority", type: "text", value: "High" },
    { label: "Include Support:", tag: "include_support", type: "checkbox", value: "Yes" },
    { label: "Terms Agreement:", tag: "agreement", type: "checkbox", value: "Yes" },
    { label: "Marketing Consent:", tag: "marketing_consent", type: "checkbox", value: "No" },
    { label: "Special Requirements:", tag: "special_requirements", type: "text", value: "24/7 monitoring required" }
];

// Create form fields
for (let i = 0; i < formData.length; i++) {
    let field = formData[i];
    
    let labelParagraph = Api.CreateParagraph();
    labelParagraph.AddText(field.label).SetBold(true);
    labelParagraph.SetSpacingBefore(200);
    doc.Push(labelParagraph);
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText("Enter " + field.label.replace(":", "").toLowerCase());
    
    // Add sample data
    fieldControl.AddText(field.value);
    
    doc.Push(fieldControl);
}

// Demonstration section
let demoSectionParagraph = Api.CreateParagraph();
demoSectionParagraph.AddText("--- FIELD SEARCH BY TAG DEMONSTRATION ---").SetBold(true);
demoSectionParagraph.SetSpacingBefore(800);
demoSectionParagraph.SetSpacingAfter(400);
demoSectionParagraph.SetJc("center");
doc.Push(demoSectionParagraph);

// Function to find content control by tag
function findContentControlByTag(targetTag) {
    let allControls = doc.GetAllContentControls();
    
    for (let i = 0; i < allControls.length; i++) {
        let control = allControls[i];
        let tag = control.GetTag();
        
        if (tag === targetTag) {
            return control;
        }
    }
    
    return null; // Not found
}

// Function to get field value and determine type
function getFieldInfo(targetTag) {
    let control = findContentControlByTag(targetTag);
    
    if (!control) {
        return {
            tag: targetTag,
            found: false,
            error: "Content control not found"
        };
    }
    
    let content = control.GetContent();
    let value = content.GetText().trim();
    
    // Determine field type based on content
    let fieldType = "text"; // default
    
    if (value === "Yes" || value === "No" || value === "true" || value === "false") {
        fieldType = "checkbox";
    } else if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        fieldType = "date";
    } else if (value.match(/^\$[\d,]+(\.\d{2})?$/)) {
        fieldType = "currency";
    }
    
    return {
        tag: targetTag,
        found: true,
        type: fieldType,
        value: value,
        control: control
    };
}

// Example searches - demonstrate finding specific fields
let searchExamples = [
    "agreement",
    "client_name", 
    "start_date",
    "project_budget",
    "include_support",
    "marketing_consent",
    "nonexistent_field"
];

let searchResultsParagraph = Api.CreateParagraph();
searchResultsParagraph.AddText("Field Search Results:").SetBold(true);
searchResultsParagraph.SetSpacingBefore(400);
doc.Push(searchResultsParagraph);

let searchResults = [];

for (let i = 0; i < searchExamples.length; i++) {
    let searchTag = searchExamples[i];
    let fieldInfo = getFieldInfo(searchTag);
    searchResults.push(fieldInfo);
    
    let resultParagraph = Api.CreateParagraph();
    
    if (fieldInfo.found) {
        resultParagraph.AddText("✓ Found: " + searchTag + " = \"" + fieldInfo.value + "\" (type: " + fieldInfo.type + ")");
        resultParagraph.SetColor(0, 128, 0);
        
        // Highlight found field with light blue background
        if (fieldInfo.control) {
            fieldInfo.control.SetBackgroundColor(173, 216, 230, false);
        }
    } else {
        resultParagraph.AddText("✗ Not found: " + searchTag + " - " + fieldInfo.error);
        resultParagraph.SetColor(255, 0, 0);
    }
    
    resultParagraph.SetSpacingBefore(100);
    doc.Push(resultParagraph);
}

// Conditional logic example based on agreement field
let conditionalLogicParagraph = Api.CreateParagraph();
conditionalLogicParagraph.AddText("Conditional Logic Example:").SetBold(true);
conditionalLogicParagraph.SetSpacingBefore(400);
doc.Push(conditionalLogicParagraph);

let agreementInfo = getFieldInfo("agreement");
let logicResultParagraph = Api.CreateParagraph();

if (agreementInfo.found && (agreementInfo.value === "Yes" || agreementInfo.value === "true")) {
    logicResultParagraph.AddText("✓ Agreement accepted - Processing can continue");
    logicResultParagraph.SetColor(0, 128, 0);
    
    // Additional processing based on agreement
    let supportInfo = getFieldInfo("include_support");
    if (supportInfo.found && (supportInfo.value === "Yes" || supportInfo.value === "true")) {
        let supportParagraph = Api.CreateParagraph();
        supportParagraph.AddText("→ Support package will be included");
        supportParagraph.SetSpacingBefore(100);
        supportParagraph.SetColor(0, 100, 200);
        doc.Push(supportParagraph);
    }
} else {
    logicResultParagraph.AddText("✗ Agreement not accepted - Processing blocked");
    logicResultParagraph.SetColor(255, 0, 0);
}

logicResultParagraph.SetSpacingBefore(200);
doc.Push(logicResultParagraph);

// JSON-style response examples
let jsonExamplesParagraph = Api.CreateParagraph();
jsonExamplesParagraph.AddText("JSON Response Examples:").SetBold(true);
jsonExamplesParagraph.SetSpacingBefore(400);
doc.Push(jsonExamplesParagraph);

// Example 1: Agreement field
let agreementJsonParagraph = Api.CreateParagraph();
let agreementJson = {
    "tag": "agreement",
    "type": "checkbox", 
    "value": agreementInfo.found ? (agreementInfo.value === "Yes") : false,
    "found": agreementInfo.found
};
agreementJsonParagraph.AddText("Request: {\"tag\": \"agreement\"}");
agreementJsonParagraph.SetSpacingBefore(200);
doc.Push(agreementJsonParagraph);

let agreementResponseParagraph = Api.CreateParagraph();
agreementResponseParagraph.AddText("Response: " + JSON.stringify(agreementJson, null, 2));
agreementResponseParagraph.SetSpacingBefore(100);
doc.Push(agreementResponseParagraph);

// Example 2: Client name field
let clientNameInfo = getFieldInfo("client_name");
let clientNameJsonParagraph = Api.CreateParagraph();
clientNameJsonParagraph.AddText("Request: {\"tag\": \"client_name\"}");
clientNameJsonParagraph.SetSpacingBefore(300);
doc.Push(clientNameJsonParagraph);

let clientNameJson = {
    "tag": "client_name",
    "type": "text",
    "value": clientNameInfo.found ? clientNameInfo.value : null,
    "found": clientNameInfo.found
};

let clientNameResponseParagraph = Api.CreateParagraph();
clientNameResponseParagraph.AddText("Response: " + JSON.stringify(clientNameJson, null, 2));
clientNameResponseParagraph.SetSpacingBefore(100);
doc.Push(clientNameResponseParagraph);

// Example 3: Non-existent field
let nonExistentJsonParagraph = Api.CreateParagraph();
nonExistentJsonParagraph.AddText("Request: {\"tag\": \"nonexistent_field\"}");
nonExistentJsonParagraph.SetSpacingBefore(300);
doc.Push(nonExistentJsonParagraph);

let nonExistentJson = {
    "tag": "nonexistent_field",
    "type": null,
    "value": null,
    "found": false,
    "error": "Content control not found"
};

let nonExistentResponseParagraph = Api.CreateParagraph();
nonExistentResponseParagraph.AddText("Response: " + JSON.stringify(nonExistentJson, null, 2));
nonExistentResponseParagraph.SetSpacingBefore(100);
doc.Push(nonExistentResponseParagraph);

// Summary of search capabilities
let summaryParagraph = Api.CreateParagraph();
summaryParagraph.AddText("Search Capabilities Summary:").SetBold(true);
summaryParagraph.SetSpacingBefore(400);
doc.Push(summaryParagraph);

let capabilities = [
    "Find content controls by exact tag match",
    "Retrieve current field values as text",
    "Automatically detect field types (text, checkbox, date, currency)",
    "Handle missing/non-existent fields gracefully",
    "Support conditional logic based on field values",
    "Provide JSON-formatted responses for API integration",
    "Visual highlighting of found fields"
];

for (let i = 0; i < capabilities.length; i++) {
    let capabilityParagraph = Api.CreateParagraph();
    capabilityParagraph.AddText("• " + capabilities[i]);
    capabilityParagraph.SetSpacingBefore(100);
    doc.Push(capabilityParagraph);
}

// Usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates targeted field access by tag, which is essential for conditional logic, selective validation, and API integration. The system can find specific content controls, determine their types, and retrieve values for processing. Found fields are highlighted with light blue backgrounds. This technique is particularly useful for implementing business logic like 'if agreement accepted → continue processing' or for extracting specific data points from complex forms.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
