---
hide_table_of_contents: true
---

# Highlighting key terms

Create a document with highlighted key terms using bold formatting and color styling:

- define text content and specify key terms to highlight ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md));
- search for terms within the text and apply formatting ([ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md), [ApiRun/SetBold](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetBold.md), [ApiRun/SetColor](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetColor.md));
- create styled text runs for highlighted terms while keeping normal formatting for other text ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Define the main text content
let sText = "Each Manager is responsible for assigning a unique ProjectID to every submission. The system uses this identifier to track document versions and approvals. Any missing or duplicate ProjectID may delay the workflow. Managers should also confirm the Deadline before final submission.";

// Define key terms to highlight
let aKeyTerms = ["Manager", "ProjectID", "Deadline"];

// Create a paragraph
let oParagraph = Api.CreateParagraph();

// Split text into words and process each word
let aWords = sText.split(/(\s+)/); // Split by spaces but keep the spaces

for (let i = 0; i < aWords.length; i++) {
    let sWord = aWords[i];
    let bIsKeyTerm = false;
    
    // Check if current word (without punctuation) matches any key term
    for (let j = 0; j < aKeyTerms.length; j++) {
        let sCleanWord = sWord.replace(/[.,!?;:]/g, ""); // Remove punctuation for comparison
        if (sCleanWord === aKeyTerms[j]) {
            bIsKeyTerm = true;
            break;
        }
    }
    
    // Create text run with appropriate formatting
    let oRun = Api.CreateRun();
    oRun.AddText(sWord);
    
    if (bIsKeyTerm) {
        // Apply highlighting: bold + color #007ACC
        oRun.SetBold(true);
        oRun.SetColor(0, 122, 204); // #007ACC in RGB
    }
    
    oParagraph.AddElement(oRun);
}

// Set paragraph alignment to left
oParagraph.SetJc("left");

// Add paragraph to document
doc.Push(oParagraph);
```
