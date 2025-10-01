# Clearing all fields

Create a document with filled content controls and demonstrate how to clear all field values to reset the template:

- create a document template with various filled content controls ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiBlockLvlSdt](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/ApiBlockLvlSdt.md));
- retrieve all content controls from the document ([ApiDocument/GetAllContentControls](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md));
- clear field values while preserving structure ([ApiBlockLvlSdt/RemoveAllElements](/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/RemoveAllElements.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create job application template
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("JOB APPLICATION FORM").SetBold(true).SetFontSize(32);
titleParagraph.SetJc("center");
titleParagraph.SetSpacingAfter(600);

let instructionParagraph = Api.CreateParagraph();
instructionParagraph.AddText("This form has been pre-filled with sample data. Use the 'Clear All Fields' function to reset it for new applicants.").SetItalic(true);
instructionParagraph.SetJc("center");
instructionParagraph.SetSpacingAfter(400);
doc.Push(instructionParagraph);

// Personal information section
let personalSectionParagraph = Api.CreateParagraph();
personalSectionParagraph.AddText("PERSONAL INFORMATION").SetBold(true).SetFontSize(24);
personalSectionParagraph.SetSpacingBefore(400);
personalSectionParagraph.SetSpacingAfter(300);
doc.Push(personalSectionParagraph);

// Define form fields with sample data (simulating a filled form)
let formFields = [
    { label: "Full Name:", tag: "full_name", type: "text", sampleData: "Sarah Johnson" },
    { label: "Email Address:", tag: "email", type: "text", sampleData: "sarah.johnson@email.com" },
    { label: "Phone Number:", tag: "phone", type: "text", sampleData: "+1 (555) 987-6543" },
    { label: "Date of Birth:", tag: "birth_date", type: "date", sampleData: "1990-05-15" },
    { label: "Address:", tag: "address", type: "text", sampleData: "123 Main Street, Anytown, ST 12345" },
    { label: "Position Applied For:", tag: "position", type: "text", sampleData: "Senior Software Developer" },
    { label: "Expected Salary:", tag: "salary", type: "text", sampleData: "$85,000" },
    { label: "Available Start Date:", tag: "start_date", type: "date", sampleData: "2024-02-01" },
    { label: "Willing to Relocate:", tag: "relocate", type: "checkbox", sampleData: "Yes" },
    { label: "Has Valid Driver's License:", tag: "drivers_license", type: "checkbox", sampleData: "Yes" },
    { label: "Requires Visa Sponsorship:", tag: "visa_required", type: "checkbox", sampleData: "No" },
    { label: "Previous Experience (years):", tag: "experience_years", type: "text", sampleData: "8" },
    { label: "Preferred Work Schedule:", tag: "work_schedule", type: "text", sampleData: "Full-time" },
    { label: "Additional Skills:", tag: "additional_skills", type: "text", sampleData: "JavaScript, Python, React, Node.js, AWS" },
    { label: "References Available:", tag: "references", type: "checkbox", sampleData: "Yes" },
    { label: "Additional Comments:", tag: "comments", type: "text", sampleData: "I am excited about this opportunity and look forward to contributing to your team." }
];

// Create form fields with sample data
for (let i = 0; i < formFields.length; i++) {
    let field = formFields[i];
    
    let labelParagraph = Api.CreateParagraph();
    labelParagraph.AddText(field.label).SetBold(true);
    labelParagraph.SetSpacingBefore(200);
    doc.Push(labelParagraph);
    
    let fieldControl = Api.CreateBlockLvlSdt();
    fieldControl.SetTag(field.tag);
    fieldControl.SetPlaceholderText("Enter " + field.label.replace(":", "").toLowerCase());
    
    // Fill with sample data
    fieldControl.AddText(field.sampleData);
    
    // Set background color to indicate filled status
    fieldControl.SetBackgroundColor(230, 255, 230, false); // Light green for filled
    
    doc.Push(fieldControl);
}

// Demonstration section
let demoSectionParagraph = Api.CreateParagraph();
demoSectionParagraph.AddText("--- FIELD CLEARING DEMONSTRATION ---").SetBold(true);
demoSectionParagraph.SetSpacingBefore(800);
demoSectionParagraph.SetSpacingAfter(400);
demoSectionParagraph.SetJc("center");
doc.Push(demoSectionParagraph);

// Show current state before clearing
let beforeClearingParagraph = Api.CreateParagraph();
beforeClearingParagraph.AddText("BEFORE CLEARING - Current Field Status:").SetBold(true);
beforeClearingParagraph.SetSpacingBefore(400);
doc.Push(beforeClearingParagraph);

let allContentControls = doc.GetAllContentControls();
let filledFieldsCount = 0;
let emptyFieldsCount = 0;

// Count filled vs empty fields before clearing
for (let i = 0; i < allContentControls.length; i++) {
    let control = allContentControls[i];
    let tag = control.GetTag();
    
    if (tag) {
        let content = control.GetContent();
        let value = content.GetText().trim();
        
        if (value !== "") {
            filledFieldsCount++;
        } else {
            emptyFieldsCount++;
        }
    }
}

let beforeStatsParagraph = Api.CreateParagraph();
beforeStatsParagraph.AddText("• Total content controls: " + allContentControls.length);
beforeStatsParagraph.SetSpacingBefore(100);
doc.Push(beforeStatsParagraph);

let beforeFilledParagraph = Api.CreateParagraph();
beforeFilledParagraph.AddText("• Filled fields: " + filledFieldsCount);
beforeFilledParagraph.SetSpacingBefore(100);
beforeFilledParagraph.SetColor(0, 128, 0);
doc.Push(beforeFilledParagraph);

let beforeEmptyParagraph = Api.CreateParagraph();
beforeEmptyParagraph.AddText("• Empty fields: " + emptyFieldsCount);
beforeEmptyParagraph.SetSpacingBefore(100);
beforeEmptyParagraph.SetColor(255, 140, 0);
doc.Push(beforeEmptyParagraph);

// Function to clear all content controls
function clearAllContentControls() {
    let allControls = doc.GetAllContentControls();
    let clearedCount = 0;
    let errorCount = 0;
    let clearingResults = [];
    
    for (let i = 0; i < allControls.length; i++) {
        let control = allControls[i];
        let tag = control.GetTag();
        
        try {
            // Get current value before clearing
            let content = control.GetContent();
            let currentValue = content.GetText().trim();
            
            // Clear the content control
            control.RemoveAllElements();
            
            // Change background color to indicate cleared status
            control.SetBackgroundColor(255, 240, 240, false); // Light red for cleared
            
            clearingResults.push({
                tag: tag || "unnamed",
                previousValue: currentValue,
                status: "cleared",
                success: true
            });
            
            clearedCount++;
        } catch (error) {
            clearingResults.push({
                tag: tag || "unnamed",
                previousValue: "unknown",
                status: "error",
                success: false,
                error: "Failed to clear"
            });
            
            errorCount++;
        }
    }
    
    return {
        totalProcessed: allControls.length,
        clearedCount: clearedCount,
        errorCount: errorCount,
        results: clearingResults
    };
}

// Perform the clearing operation
let clearingOperation = clearAllContentControls();

// Show results after clearing
let afterClearingParagraph = Api.CreateParagraph();
afterClearingParagraph.AddText("AFTER CLEARING - Operation Results:").SetBold(true);
afterClearingParagraph.SetSpacingBefore(400);
doc.Push(afterClearingParagraph);

let operationSummaryParagraph = Api.CreateParagraph();
operationSummaryParagraph.AddText("Clearing Operation Summary:").SetBold(true);
operationSummaryParagraph.SetSpacingBefore(200);
doc.Push(operationSummaryParagraph);

let totalProcessedParagraph = Api.CreateParagraph();
totalProcessedParagraph.AddText("• Total fields processed: " + clearingOperation.totalProcessed);
totalProcessedParagraph.SetSpacingBefore(100);
doc.Push(totalProcessedParagraph);

let clearedCountParagraph = Api.CreateParagraph();
clearedCountParagraph.AddText("• Successfully cleared: " + clearingOperation.clearedCount);
clearedCountParagraph.SetSpacingBefore(100);
clearedCountParagraph.SetColor(0, 128, 0);
doc.Push(clearedCountParagraph);

if (clearingOperation.errorCount > 0) {
    let errorCountParagraph = Api.CreateParagraph();
    errorCountParagraph.AddText("• Errors encountered: " + clearingOperation.errorCount);
    errorCountParagraph.SetSpacingBefore(100);
    errorCountParagraph.SetColor(255, 0, 0);
    doc.Push(errorCountParagraph);
}

// Show detailed clearing results
let detailedResultsParagraph = Api.CreateParagraph();
detailedResultsParagraph.AddText("Detailed Clearing Results:").SetBold(true);
detailedResultsParagraph.SetSpacingBefore(300);
doc.Push(detailedResultsParagraph);

for (let i = 0; i < Math.min(clearingOperation.results.length, 10); i++) {
    let result = clearingOperation.results[i];
    let resultParagraph = Api.CreateParagraph();
    
    if (result.success) {
        let displayValue = result.previousValue.length > 30 ? 
                          result.previousValue.substring(0, 30) + "..." : 
                          result.previousValue;
        resultParagraph.AddText("✓ " + result.tag + ": \"" + displayValue + "\" → [CLEARED]");
        resultParagraph.SetColor(0, 128, 0);
    } else {
        resultParagraph.AddText("✗ " + result.tag + ": " + result.error);
        resultParagraph.SetColor(255, 0, 0);
    }
    
    resultParagraph.SetSpacingBefore(100);
    doc.Push(resultParagraph);
}

if (clearingOperation.results.length > 10) {
    let moreParagraph = Api.CreateParagraph();
    moreParagraph.AddText("... and " + (clearingOperation.results.length - 10) + " more fields");
    moreParagraph.SetSpacingBefore(100);
    moreParagraph.SetItalic(true);
    doc.Push(moreParagraph);
}

// Verification - count fields after clearing
let verificationParagraph = Api.CreateParagraph();
verificationParagraph.AddText("Post-Clearing Verification:").SetBold(true);
verificationParagraph.SetSpacingBefore(400);
doc.Push(verificationParagraph);

let afterFilledCount = 0;
let afterEmptyCount = 0;

for (let i = 0; i < allContentControls.length; i++) {
    let control = allContentControls[i];
    let tag = control.GetTag();
    
    if (tag) {
        let content = control.GetContent();
        let value = content.GetText().trim();
        
        if (value !== "") {
            afterFilledCount++;
        } else {
            afterEmptyCount++;
        }
    }
}

let afterStatsParagraph = Api.CreateParagraph();
afterStatsParagraph.AddText("• Filled fields remaining: " + afterFilledCount);
afterStatsParagraph.SetSpacingBefore(100);
if (afterFilledCount === 0) {
    afterStatsParagraph.SetColor(0, 128, 0);
} else {
    afterStatsParagraph.SetColor(255, 140, 0);
}
doc.Push(afterStatsParagraph);

let afterEmptyStatsParagraph = Api.CreateParagraph();
afterEmptyStatsParagraph.AddText("• Empty fields: " + afterEmptyCount);
afterEmptyStatsParagraph.SetSpacingBefore(100);
afterEmptyStatsParagraph.SetColor(0, 128, 0);
doc.Push(afterEmptyStatsParagraph);

// Success confirmation
let successParagraph = Api.CreateParagraph();
if (afterFilledCount === 0) {
    successParagraph.AddText("✓ SUCCESS: All fields have been cleared. Template is ready for reuse.").SetBold(true);
    successParagraph.SetColor(0, 128, 0);
} else {
    successParagraph.AddText("⚠ WARNING: " + afterFilledCount + " field(s) still contain data.").SetBold(true);
    successParagraph.SetColor(255, 140, 0);
}
successParagraph.SetSpacingBefore(300);
doc.Push(successParagraph);

// Use cases and benefits
let useCasesParagraph = Api.CreateParagraph();
useCasesParagraph.AddText("Use Cases for Field Clearing:").SetBold(true);
useCasesParagraph.SetSpacingBefore(400);
doc.Push(useCasesParagraph);

let useCases = [
    "Template reuse - Reset forms for new applicants/clients",
    "Data privacy - Clear sensitive information before sharing",
    "Testing - Reset forms to initial state for testing purposes",
    "Batch processing - Clear forms between automated processing runs",
    "User interface - Provide 'Clear All' functionality to users",
    "Document archiving - Remove personal data while preserving structure"
];

for (let i = 0; i < useCases.length; i++) {
    let useCaseParagraph = Api.CreateParagraph();
    useCaseParagraph.AddText("• " + useCases[i]);
    useCaseParagraph.SetSpacingBefore(100);
    doc.Push(useCaseParagraph);
}

// Color legend
let legendParagraph = Api.CreateParagraph();
legendParagraph.AddText("Visual Indicators:").SetBold(true);
legendParagraph.SetSpacingBefore(400);
doc.Push(legendParagraph);

let legend1Paragraph = Api.CreateParagraph();
legend1Paragraph.AddText("• Light green background: Originally filled fields");
legend1Paragraph.SetSpacingBefore(100);
doc.Push(legend1Paragraph);

let legend2Paragraph = Api.CreateParagraph();
legend2Paragraph.AddText("• Light red background: Cleared fields (now empty)");
legend2Paragraph.SetSpacingBefore(100);
doc.Push(legend2Paragraph);

// Usage note
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: This example demonstrates comprehensive field clearing functionality that resets all content controls to their empty state while preserving the document structure and formatting. The clearing process removes all user-entered data, making the template ready for reuse. This is essential for template management, data privacy compliance, and workflow automation where forms need to be reset between uses.").SetItalic(true);
noteParagraph.SetSpacingBefore(400);
doc.Push(noteParagraph);
```
