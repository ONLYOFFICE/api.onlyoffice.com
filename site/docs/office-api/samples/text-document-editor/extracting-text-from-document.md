# Extracting text from document

Create a document with sample content and demonstrate how to extract all text content as a string or array of paragraphs:

- create a document with multiple paragraphs containing sample text ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md));
- extract the document content using JSON serialization ([ApiDocument/ToJSON](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/ToJSON.md));
- parse the JSON structure to retrieve text from all paragraphs ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create a document with sample content
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Welcome to the Company Handbook.");

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document outlines the core principles, communication rules, and workflow policies applicable to all departments.");
doc.Push(paragraph2);

let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Please read carefully and contact HR if you have any questions.");
doc.Push(paragraph3);

// Add a formatted paragraph to show that formatting is ignored during text extraction
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("Important: ").SetBold(true).SetColor(255, 0, 0);
paragraph4.AddText("All employees must follow the safety guidelines outlined in Section 5.");
doc.Push(paragraph4);

// Add a paragraph with special formatting
let paragraph5 = Api.CreateParagraph();
paragraph5.AddText("For technical support, contact: support@company.com").SetItalic(true);
doc.Push(paragraph5);

// Extract document content as JSON
let documentJSON = doc.ToJSON();

// Parse the JSON to extract text content
let parsedDoc = JSON.parse(documentJSON);
let extractedTexts = [];
let allTextAsString = "";

// Function to extract text from paragraph elements
function extractTextFromParagraph(paragraph) {
    let paragraphText = "";
    if (paragraph.type === "paragraph" && paragraph.content && paragraph.content.length > 0) {
        for (let i = 0; i < paragraph.content.length; i++) {
            let run = paragraph.content[i];
            if (run.type === "run" && run.content && Array.isArray(run.content)) {
                for (let j = 0; j < run.content.length; j++) {
                    if (typeof run.content[j] === "string") {
                        paragraphText += run.content[j];
                    }
                }
            }
        }
    }
    return paragraphText;
}

// Extract text from document content
if (parsedDoc.type === "document" && parsedDoc.content && parsedDoc.content.length > 0) {
    for (let i = 0; i < parsedDoc.content.length; i++) {
        let paragraph = parsedDoc.content[i];
        let paragraphText = extractTextFromParagraph(paragraph);
        if (paragraphText.trim() !== "") {
            extractedTexts.push(paragraphText);
            allTextAsString += paragraphText + "\n";
        }
    }
}

// Display the extracted text results
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("--- EXTRACTED TEXT RESULTS ---").SetBold(true);
resultParagraph.SetSpacingBefore(400);
doc.Push(resultParagraph);

// Show individual paragraphs
let arrayResultParagraph = Api.CreateParagraph();
arrayResultParagraph.AddText("Text as array of paragraphs:").SetBold(true);
doc.Push(arrayResultParagraph);

for (let i = 0; i < extractedTexts.length; i++) {
    let textParagraph = Api.CreateParagraph();
    textParagraph.AddText((i + 1) + ". " + extractedTexts[i]);
    textParagraph.SetSpacingBefore(100);
    doc.Push(textParagraph);
}

// Show combined text
let stringResultParagraph = Api.CreateParagraph();
stringResultParagraph.AddText("Text as single string:").SetBold(true);
stringResultParagraph.SetSpacingBefore(300);
doc.Push(stringResultParagraph);

let combinedTextParagraph = Api.CreateParagraph();
combinedTextParagraph.AddText(allTextAsString.trim());
combinedTextParagraph.SetSpacingBefore(100);
doc.Push(combinedTextParagraph);

// Show text count statistics
let statsParagraph = Api.CreateParagraph();
statsParagraph.AddText("Statistics:").SetBold(true);
statsParagraph.SetSpacingBefore(300);
doc.Push(statsParagraph);

let statsDetailParagraph = Api.CreateParagraph();
statsDetailParagraph.AddText("Total paragraphs: " + extractedTexts.length + 
                            ", Total characters: " + allTextAsString.length + 
                            ", Total words: " + allTextAsString.split(/\s+/).filter(word => word.length > 0).length);
doc.Push(statsDetailParagraph);
```
