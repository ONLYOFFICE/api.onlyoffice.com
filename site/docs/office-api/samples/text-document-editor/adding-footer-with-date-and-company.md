# Adding footer with date and company name

Create a document with footer containing date and company name. Used for standard document formatting: memos, reports, letters, and templates. Placed in the footer where current date is shown on one side and organization name on the other. This helps with document identification and simplifies versioning:

- activate footer for all document pages ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiSection/GetFooter](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/GetFooter.md));
- add two text blocks with different alignment ([ApiDocumentContent/AddElement](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/AddElement.md), [Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md));
- configure left alignment for company name and right alignment for date ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md));
- set standard font size 10-11 pt matching main document ([ApiRun/SetFontSize](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetFontSize.md), [ApiRun/SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetFontFamily.md));
- optionally add horizontal line above footer for visual separation ([Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Add main document content
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the main document content with footer containing date and company name.");
doc.Push(paragraph1);

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("The footer will appear on all pages with company name on the left and date on the right.");
doc.Push(paragraph2);

// Add page break to demonstrate footer on multiple pages
let paragraph3 = Api.CreateParagraph();
paragraph3.AddPageBreak();
paragraph3.AddText("Second page content - footer remains consistent across all pages.");
doc.Push(paragraph3);

// Create footer
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);

// Position date paragraph on the same line by using tabs
let footerParagraph = footer.GetElement(0);
footerParagraph.SetJc("left");
footerParagraph.SetFontFamily("Arial");
footerParagraph.SetFontSize(20);

// Add company name
footerParagraph.AddText("ONLYOFFICE Inc.");

footerParagraph.AddTabStop();
footerParagraph.AddTabStop();

// Add current date field
let range = footerParagraph.GetRange();
let endPos = range.GetEndPos();
range = footerParagraph.GetRange(endPos, endPos);
range.AddField('TIME \\@ "dddd, MMMM d, yyyy"');
```
