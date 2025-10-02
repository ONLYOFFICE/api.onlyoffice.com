---
hide_table_of_contents: true
---

# Adding page numbering in footer

Create a document with page numbering in the footer. Used in multi-page documents such as reports, contracts, and instructions. Allows readers to easily navigate the document structure:

- create footer for all document pages ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiSection/GetFooter](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/GetFooter.md));
- add text field with automatic page numbering ([ApiDocumentContent/AddElement](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/AddElement.md), [Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md));
- configure center alignment for better visual perception ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md));
- set standard neutral font with 10-11 pt size ([ApiRun/SetFontSize](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetFontSize.md), [ApiRun/SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetFontFamily.md));
- automatic value updates when exporting or saving document ([ApiDocument/CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Add content to the first page
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("First page of the document");
doc.Push(paragraph1);

// Add page break
let paragraph2 = Api.CreateParagraph();
paragraph2.AddPageBreak();
doc.Push(paragraph2);

// Add content to the second page
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Second page of the document");
doc.Push(paragraph3);

// Create footer
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);

let footerParagraph = footer.GetElement(0);
footerParagraph.SetJc("center");
footerParagraph.SetFontFamily("Arial");
footerParagraph.SetFontSize(22); // 11pt in half-points

// Add page number field
footerParagraph.AddText("Page ");
footerParagraph.AddPageNumber();
footerParagraph.AddText(" of ");
footerParagraph.AddPagesCount();
```
