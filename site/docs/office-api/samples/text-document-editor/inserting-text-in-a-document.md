# Inserting text in a document

Create a document with formatted text using different methods:

- add text to paragraphs with various formatting options ([Api](../../usage-api/text-document-api/Api/Api.md), [ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiParagraph/AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- insert line breaks within paragraphs to create multi-line content ([ApiParagraph/AddLineBreak](../../usage-api/text-document-api/ApiParagraph/Methods/AddLineBreak.md));
- apply text formatting including bold, italic, font size, and color ([ApiRun](../../usage-api/text-document-api/ApiRun/ApiRun.md));

``` ts editor-docx zoom=60
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);

// Add a title
oParagraph.AddText("Document Title").SetBold(true).SetFontSize(16);

// Add a subtitle on a new paragraph
let oParagraph2 = oDocument.CreateParagraph();
oParagraph2.AddText("Document Subtitle").SetItalic(true).SetFontSize(14);
oDocument.Push(oParagraph2);

// Add content with line breaks
let oParagraph3 = oDocument.CreateParagraph();
oParagraph3.AddText("First point: Introduction to the topic");
oParagraph3.AddLineBreak();
oParagraph3.AddText("Second point: Details and explanation");
oParagraph3.AddLineBreak();
oParagraph3.AddText("Third point: Summary and conclusion");
oDocument.Push(oParagraph3);

// Add a formatted section
let oParagraph4 = oDocument.CreateParagraph();
oParagraph4.AddText("Important note: ").SetBold(true);
oParagraph4.AddText("This text continues on the same line but is not bold.");
oParagraph4.AddLineBreak();
oParagraph4.AddText("Another important point: ").SetBold(true).SetColor(255, 0, 0);
oParagraph4.AddText("This text is normal but follows red bold text.").SetColor(0, 0, 0);
oDocument.Push(oParagraph4);
```
