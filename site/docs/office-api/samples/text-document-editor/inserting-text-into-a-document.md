---
hide_table_of_contents: true
---

# Inserting text into a document

Create a document with formatted text using different methods:

- add text to paragraphs with various formatting options ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- insert line breaks within paragraphs to create multi-line content ([ApiParagraph/AddLineBreak](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddLineBreak.md));
- apply text formatting including bold, italic, font size, and color ([ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md)).

``` ts editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Add a title
paragraph.AddText("Document Title").SetBold(true).SetFontSize(16);

// Add a subtitle as a new paragraph
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Document Subtitle").SetItalic(true).SetFontSize(14);
doc.Push(paragraph2);

// Add content with line breaks
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("First point: Introduction to the topic");
paragraph3.AddLineBreak();
paragraph3.AddText("Second point: Details and explanation");
paragraph3.AddLineBreak();
paragraph3.AddText("Third point: Summary and conclusion");
doc.Push(paragraph3);

// Add a formatted section
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("Important note: ").SetBold(true);
paragraph4.AddText("This text continues on the same line but is not bold.");
paragraph4.AddLineBreak();
paragraph4.AddText("Another important point: ").SetBold(true).SetColor(255, 0, 0);
paragraph4.AddText("This text is normal but follows red bold text.").SetColor(0, 0, 0);
doc.Push(paragraph4);
```
