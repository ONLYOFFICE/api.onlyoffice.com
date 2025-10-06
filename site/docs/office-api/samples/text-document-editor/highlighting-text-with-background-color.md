---
hide_table_of_contents: true
---

# Highlighting text with background color

Create a document with colored highlighting inside sentences for visual emphasis:

- create paragraphs with normal text ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- apply background color highlighting to specific text fragments ([ApiRun/SetHighlight](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetHighlight.md));
- combine highlighted and normal text within the same paragraph for visual emphasis on key phrases.

``` ts editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create the first sentence with normal text
paragraph.AddText("The application deadline is approaching. ");

// Add highlighted text with yellow background
paragraph.AddText("Important").SetHighlight("yellow");

// Continue with normal text
paragraph.AddText(": all documents must be submitted no later than July 15. Late submissions will not be accepted.");

// Add a second example paragraph
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Please review the terms and conditions carefully. ");
paragraph2.AddText("Note").SetHighlight("cyan");
paragraph2.AddText(": by proceeding, you agree to all specified requirements and deadlines.");
doc.Push(paragraph2);

// Add a third example with different highlight colors
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("System maintenance is scheduled for tonight. ");
paragraph3.AddText("Warning").SetHighlight("magenta");
paragraph3.AddText(": all services will be temporarily unavailable from 2:00 AM to 4:00 AM EST.");
doc.Push(paragraph3);

// Add an example with multiple highlighted phrases
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("For technical support, contact us at ");
paragraph4.AddText("support@company.com").SetHighlight("green");
paragraph4.AddText(" or call ");
paragraph4.AddText("1-800-SUPPORT").SetHighlight("green");
paragraph4.AddText(" during business hours.");
doc.Push(paragraph4);
```
