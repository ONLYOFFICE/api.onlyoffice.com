# Inserting new content controls

Create a document template and demonstrate how to dynamically insert new content controls at different positions:

- create a basic document template with existing content controls ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md));
- insert new content controls at specific positions ([ApiDocument/AddElement](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddElement.md), [ApiDocument/Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md));
- configure new controls with tags and placeholder text ([ApiBlockLvlSdt/SetTag](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/SetTag.md), [ApiBlockLvlSdt/SetPlaceholderText](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/SetPlaceholderText.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create initial document template
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("CUSTOMER REGISTRATION FORM").SetBold(true).SetFontSize(32);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(600);

// Basic customer information section
let basicSectionParagraph = Api.CreateParagraph();
basicSectionParagraph.AddText("BASIC INFORMATION").SetBold(true).SetFontSize(24);
basicSectionParagraph.SetSpacingBefore(400);
basicSectionParagraph.SetSpacingAfter(300);
doc.Push(basicSectionParagraph);

// Create initial form fields
let initialFields = [
    { label: "Full Name:", tag: "fullName", placeholder: "Enter your full name" },
    { label: "Email Address:", tag: "email", placeholder: "Enter your email address" },
    { label: "Primary Phone:", tag: "primaryPhone", placeholder: "Enter your primary phone number" }
];

for (let i = 0; i < initialFields.length; i++) {
    let field = initialFields[i];
    
    let labelParagraph = Api.CreateParagraph();
    labelParagraph.AddText(field.label).SetBold(true);
    labelParagraph.SetSpacingBefore(200);
    doc.Push(labelParagraph);
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText(field.placeholder);
    doc.Push(fieldControl);
}

// Address section
let addressSectionParagraph = Api.CreateParagraph();
addressSectionParagraph.AddText("ADDRESS INFORMATION").SetBold(true).SetFontSize(24);
addressSectionParagraph.SetSpacingBefore(600);
addressSectionParagraph.SetSpacingAfter(300);
doc.Push(addressSectionParagraph);

let addressLabelParagraph = Api.CreateParagraph();
addressLabelParagraph.AddText("Primary Address:").SetBold(true);
addressLabelParagraph.SetSpacingBefore(200);
doc.Push(addressLabelParagraph);

let primaryAddressControl = Api.CreateBlockLvlSdt();
primaryAddressControl.SetTag("primaryAddress");
primaryAddressControl.SetPlaceholderText("Enter your primary address");
doc.Push(primaryAddressControl);

// Demonstration section
let demoSectionParagraph = Api.CreateParagraph();
demoSectionParagraph.AddText("--- DYNAMIC CONTENT CONTROL INSERTION ---").SetBold(true);
demoSectionParagraph.SetSpacingBefore(800);
demoSectionParagraph.SetSpacingAfter(400);
demoSectionParagraph.SetJc("center");
doc.Push(demoSectionParagraph);

// Example 1: Insert new field at the end of the document
let example1Paragraph = Api.CreateParagraph();
example1Paragraph.AddText("Example 1: Adding field at the end of document").SetBold(true);
example1Paragraph.SetSpacingBefore(400);
doc.Push(example1Paragraph);

let companyLabelParagraph = Api.CreateParagraph();
companyLabelParagraph.AddText("Company Name:").SetBold(true);
companyLabelParagraph.SetSpacingBefore(200);
doc.Push(companyLabelParagraph);

let companyControl = Api.CreateBlockLvlSdt();
companyControl.SetTag("companyName");
companyControl.SetPlaceholderText("Enter your company name (optional)");
doc.Push(companyControl);

// Example 2: Insert new field at a specific position (after primary phone)
let example2Paragraph = Api.CreateParagraph();
example2Paragraph.AddText("Example 2: Adding field at specific position (after primary phone)").SetBold(true);
example2Paragraph.SetSpacingBefore(400);
doc.Push(example2Paragraph);

// Find the position after primary phone field
let elementsCount = doc.GetElementsCount();
let insertPosition = -1;

// Look for the primary phone control to insert after it
for (let i = 0; i < elementsCount; i++) {
    let element = doc.GetElement(i);
    if (element.GetClassType && element.GetClassType() === "blockLvlSdt") {
        let tag = element.GetTag();
        if (tag === "primaryPhone") {
            insertPosition = i + 1;
            break;
        }
    }
}

if (insertPosition !== -1) {
    // Insert secondary phone field after primary phone
    let secondaryPhoneLabelParagraph = Api.CreateParagraph();
    secondaryPhoneLabelParagraph.AddText("Secondary Phone:").SetBold(true);
    secondaryPhoneLabelParagraph.SetSpacingBefore(200);
    doc.AddElement(insertPosition, secondaryPhoneLabelParagraph);
    
    let secondaryPhoneControl = Api.CreateBlockLvlSdt();
    secondaryPhoneControl.SetTag("secondaryPhone");
    secondaryPhoneControl.SetPlaceholderText("Enter your secondary phone number (optional)");
    doc.AddElement(insertPosition + 1, secondaryPhoneControl);
}

// Example 3: Insert additional address field after primary address
let example3Paragraph = Api.CreateParagraph();
example3Paragraph.AddText("Example 3: Adding additional address field").SetBold(true);
example3Paragraph.SetSpacingBefore(400);
doc.Push(example3Paragraph);

// Find position after primary address
elementsCount = doc.GetElementsCount();
let addressInsertPosition = -1;

for (let i = 0; i < elementsCount; i++) {
    let element = doc.GetElement(i);
    if (element.GetClassType && element.GetClassType() === "blockLvlSdt") {
        let tag = element.GetTag();
        if (tag === "primaryAddress") {
            addressInsertPosition = i + 1;
            break;
        }
    }
}

if (addressInsertPosition !== -1) {
    // Insert secondary address field
    let secondaryAddressLabelParagraph = Api.CreateParagraph();
    secondaryAddressLabelParagraph.AddText("Secondary Address:").SetBold(true);
    secondaryAddressLabelParagraph.SetSpacingBefore(200);
    doc.AddElement(addressInsertPosition, secondaryAddressLabelParagraph);
    
    let secondaryAddressControl = Api.CreateBlockLvlSdt();
    secondaryAddressControl.SetTag("secondaryAddress");
    secondaryAddressControl.SetPlaceholderText("Enter your secondary address (optional)");
    doc.AddElement(addressInsertPosition + 1, secondaryAddressControl);
}

// Example 4: Create different types of content controls
let example4Paragraph = Api.CreateParagraph();
example4Paragraph.AddText("Example 4: Different types of content controls").SetBold(true);
example4Paragraph.SetSpacingBefore(400);
doc.Push(example4Paragraph);

// Date field
let birthdateLabelParagraph = Api.CreateParagraph();
birthdateLabelParagraph.AddText("Date of Birth:").SetBold(true);
birthdateLabelParagraph.SetSpacingBefore(200);
doc.Push(birthdateLabelParagraph);

let birthdateControl = Api.CreateBlockLvlSdt();
birthdateControl.SetTag("birthdate");
birthdateControl.SetPlaceholderText("Enter your date of birth (YYYY-MM-DD)");
doc.Push(birthdateControl);

// Checkbox-like field (using text control with Yes/No)
let newsletterLabelParagraph = Api.CreateParagraph();
newsletterLabelParagraph.AddText("Subscribe to Newsletter:").SetBold(true);
newsletterLabelParagraph.SetSpacingBefore(200);
doc.Push(newsletterLabelParagraph);

let newsletterControl = Api.CreateBlockLvlSdt();
newsletterControl.SetTag("newsletter");
newsletterControl.SetPlaceholderText("Enter Yes or No");
doc.Push(newsletterControl);

// Multi-line text field
let commentsLabelParagraph = Api.CreateParagraph();
commentsLabelParagraph.AddText("Additional Comments:").SetBold(true);
commentsLabelParagraph.SetSpacingBefore(200);
doc.Push(commentsLabelParagraph);

let commentsControl = Api.CreateBlockLvlSdt();
commentsControl.SetTag("comments");
commentsControl.SetPlaceholderText("Enter any additional comments or special requirements");
doc.Push(commentsControl);

// Summary of inserted controls
let summaryParagraph = Api.CreateParagraph();
summaryParagraph.AddText("Summary of Dynamically Inserted Controls:").SetBold(true);
summaryParagraph.SetSpacingBefore(600);
doc.Push(summaryParagraph);

let insertedControls = [
    "companyName - Added at end of document",
    "secondaryPhone - Inserted after primary phone field",
    "secondaryAddress - Inserted after primary address field",
    "birthdate - Date input field",
    "newsletter - Boolean choice field",
    "comments - Multi-line text field"
];

for (let i = 0; i < insertedControls.length; i++) {
    let controlSummaryParagraph = Api.CreateParagraph();
    controlSummaryParagraph.AddText("• " + insertedControls[i]);
    controlSummaryParagraph.SetSpacingBefore(100);
    doc.Push(controlSummaryParagraph);
}

// Final count of all content controls
let finalControlCount = doc.GetAllContentControls().length;
let finalCountParagraph = Api.CreateParagraph();
finalCountParagraph.AddText("Total content controls in document: " + finalControlCount);
finalCountParagraph.SetSpacingBefore(300);
finalCountParagraph.SetBold(true);
doc.Push(finalCountParagraph);

// Usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates dynamic insertion of content controls at various positions in a document. New fields can be added at the end using Push(), at specific positions using AddElement(), or relative to existing controls. This technique is useful for creating flexible forms that can expand based on user needs, such as adding optional fields, additional contact information, or expanding sections in contracts and surveys.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
