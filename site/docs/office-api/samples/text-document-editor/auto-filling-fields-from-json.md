# Auto-filling fields from JSON

Create a document template with content controls and demonstrate how to automatically populate them with data from a JSON object:

- create a document template with tagged content controls ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md));
- retrieve all content controls from the document ([ApiDocument/GetAllContentControls](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md));
- match JSON keys with content control tags and populate values ([ApiBlockLvlSdt/GetTag](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/GetTag.md), [ApiBlockLvlSdt/AddText](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/AddText.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Sample JSON data (could come from CRM, API, form submission, etc.)
let jsonData = {
    "contractNumber": "CNT-2024-0156",
    "clientName": "Acme Corporation Ltd.",
    "clientAddress": "123 Business Street, Suite 400, New York, NY 10001",
    "contractDate": "2024-12-15",
    "serviceType": "Software Development Services",
    "projectDuration": "6 months",
    "totalAmount": "$75,000.00",
    "paymentTerms": "Net 30 days",
    "projectManager": "Sarah Johnson",
    "clientContact": "Michael Brown",
    "clientEmail": "michael.brown@acme.com",
    "clientPhone": "+1 (555) 123-4567",
    "deliveryDate": "2025-06-15",
    "warrantyPeriod": "12 months"
};

// Create document template with content controls
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("SERVICE AGREEMENT").SetBold(true).SetFontSize(36);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(600);

// Contract header section
let headerParagraph = Api.CreateParagraph();
headerParagraph.AddText("Contract Number: ");
headerParagraph.SetSpacingAfter(200);
doc.Push(headerParagraph);

let contractNumberControl = Api.CreateBlockLvlSdt();
contractNumberControl.SetTag("contractNumber");
contractNumberControl.SetPlaceholderText("Contract number will be filled automatically");
doc.Push(contractNumberControl);

let dateParagraph = Api.CreateParagraph();
dateParagraph.AddText("Date: ");
dateParagraph.SetSpacingAfter(400);
doc.Push(dateParagraph);

let dateControl = Api.CreateBlockLvlSdt();
dateControl.SetTag("contractDate");
dateControl.SetPlaceholderText("Date will be filled automatically");
doc.Push(dateControl);

// Client information section
let clientSectionParagraph = Api.CreateParagraph();
clientSectionParagraph.AddText("CLIENT INFORMATION").SetBold(true).SetFontSize(28);
clientSectionParagraph.SetSpacingBefore(400);
clientSectionParagraph.SetSpacingAfter(300);
doc.Push(clientSectionParagraph);

let clientFields = [
    { label: "Company Name:", tag: "clientName" },
    { label: "Address:", tag: "clientAddress" },
    { label: "Contact Person:", tag: "clientContact" },
    { label: "Email:", tag: "clientEmail" },
    { label: "Phone:", tag: "clientPhone" }
];

for (let i = 0; i < clientFields.length; i++) {
    let field = clientFields[i];
    let fieldParagraph = Api.CreateParagraph();
    fieldParagraph.AddText(field.label + " ");
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText("Will be filled from JSON data");
    
    doc.Push(fieldParagraph);
    doc.Push(fieldControl);
}

// Service details section
let serviceSectionParagraph = Api.CreateParagraph();
serviceSectionParagraph.AddText("SERVICE DETAILS").SetBold(true).SetFontSize(28);
serviceSectionParagraph.SetSpacingBefore(600);
serviceSectionParagraph.SetSpacingAfter(300);
doc.Push(serviceSectionParagraph);

let serviceFields = [
    { label: "Service Type:", tag: "serviceType" },
    { label: "Project Duration:", tag: "projectDuration" },
    { label: "Total Amount:", tag: "totalAmount" },
    { label: "Payment Terms:", tag: "paymentTerms" },
    { label: "Project Manager:", tag: "projectManager" },
    { label: "Delivery Date:", tag: "deliveryDate" },
    { label: "Warranty Period:", tag: "warrantyPeriod" }
];

for (let i = 0; i < serviceFields.length; i++) {
    let field = serviceFields[i];
    let fieldParagraph = Api.CreateParagraph();
    fieldParagraph.AddText(field.label + " ");
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText("Will be filled from JSON data");
    
    doc.Push(fieldParagraph);
    doc.Push(fieldControl);
}

// Auto-fill process
let separatorParagraph = Api.CreateParagraph();
separatorParagraph.AddText("--- AUTO-FILLING PROCESS ---").SetBold(true);
separatorParagraph.SetSpacingBefore(800);
separatorParagraph.SetSpacingAfter(400);
separatorParagraph.SetJc("center");
doc.Push(separatorParagraph);

// Get all content controls and populate them with JSON data
let allContentControls = doc.GetAllContentControls();
let filledFields = [];
let notFoundFields = [];

// Process each content control
for (let i = 0; i < allContentControls.length; i++) {
    let control = allContentControls[i];
    let tag = control.GetTag();
    
    if (tag && jsonData.hasOwnProperty(tag)) {
        let value = jsonData[tag];
        
        // Handle different data types
        if (typeof value === "string") {
            // Clear existing content and add new text
            control.RemoveAllElements();
            control.AddText(value);
            filledFields.push({ tag: tag, value: value, type: "string" });
        } else if (typeof value === "number") {
            control.RemoveAllElements();
            control.AddText(value.toString());
            filledFields.push({ tag: tag, value: value.toString(), type: "number" });
        } else if (typeof value === "boolean") {
            control.RemoveAllElements();
            control.AddText(value ? "Yes" : "No");
            filledFields.push({ tag: tag, value: value ? "Yes" : "No", type: "boolean" });
        }
    } else if (tag) {
        notFoundFields.push(tag);
    }
}

// Display auto-fill results
let resultsParagraph = Api.CreateParagraph();
resultsParagraph.AddText("Auto-fill Results:").SetBold(true);
doc.Push(resultsParagraph);

let successParagraph = Api.CreateParagraph();
successParagraph.AddText("Successfully filled " + filledFields.length + " fields:");
successParagraph.SetSpacingBefore(200);
doc.Push(successParagraph);

for (let i = 0; i < filledFields.length; i++) {
    let field = filledFields[i];
    let fieldResultParagraph = Api.CreateParagraph();
    fieldResultParagraph.AddText("• " + field.tag + " (" + field.type + "): " + field.value);
    fieldResultParagraph.SetSpacingBefore(100);
    doc.Push(fieldResultParagraph);
}

if (notFoundFields.length > 0) {
    let notFoundParagraph = Api.CreateParagraph();
    notFoundParagraph.AddText("Fields not found in JSON data (" + notFoundFields.length + "):");
    notFoundParagraph.SetSpacingBefore(300);
    doc.Push(notFoundParagraph);
    
    for (let i = 0; i < notFoundFields.length; i++) {
        let notFoundFieldParagraph = Api.CreateParagraph();
        notFoundFieldParagraph.AddText("• " + notFoundFields[i]);
        notFoundFieldParagraph.SetSpacingBefore(100);
        doc.Push(notFoundFieldParagraph);
    }
}

// Display JSON data source
let jsonSourceParagraph = Api.CreateParagraph();
jsonSourceParagraph.AddText("Source JSON Data:").SetBold(true);
jsonSourceParagraph.SetSpacingBefore(400);
doc.Push(jsonSourceParagraph);

let jsonDisplayParagraph = Api.CreateParagraph();
jsonDisplayParagraph.AddText(JSON.stringify(jsonData, null, 2));
jsonDisplayParagraph.SetSpacingBefore(200);
doc.Push(jsonDisplayParagraph);

// Add usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates automatic population of document templates from JSON data. The process matches JSON keys with content control tags and handles different data types (strings, numbers, booleans). This technique is ideal for generating contracts, reports, invoices, and other documents from external data sources like CRMs, APIs, or form submissions.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
