# Adding header and footer with logo

Create a document with a professional header containing a company logo and organization name. The header is activated for all pages and includes properly positioned branding elements for official documents, reports, and corporate communications:

- activate headers and footers for all pages ([ApiSection/GetHeader](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/GetHeader.md));
- insert company logo image in the header ([ApiDocumentContent/AddDrawing](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/AddDrawing.md));
- align logo to the left edge with fixed dimensions (40×40 pt) ([ApiDrawing/SetPosition](/docs/office-api/usage-api/text-document-api/ApiDrawing/Methods/SetPosition.md));
- add organization name text with center alignment ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md));
- apply bold formatting with 14 pt font size for professional appearance ([ApiTextPr/SetBold](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [ApiTextPr/SetFontSize](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md));
- ensure consistent branding across all document pages ([ApiSection/GetHeader](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/GetHeader.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Get header for all pages
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
let paragraph = header.GetElement(0);

// Set paragraph alignment for logo (left aligned)
paragraph.SetJc("left");

// Insert logo image with fixed size (0.40 inch x 0.40 inch)
let logoDrawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 0.40 * 914400, 0.40 * 914400);
logoDrawing.SetWrappingStyle("square");
logoDrawing.SetHorPosition("column", 2.17 * 914400);
logoDrawing.SetVerPosition("paragraph", -0.21 * 914400);
paragraph.AddDrawing(logoDrawing);

// Organization name (center aligned)
paragraph.SetJc("center");
paragraph.SetSpacingLine(240 * 0.5, "auto");

// Create and format organization name text
let organizationRun = Api.CreateRun();
organizationRun.AddText("ONLYOFFICE");
let textPr = organizationRun.GetTextPr();
textPr.SetFontSize(28); // 14pt = 28 half-points
textPr.SetBold(true);
textPr.SetFontFamily("Arial");
paragraph.AddElement(organizationRun);

// Add some sample content to the document
let docContent = doc.GetElement(0);
docContent.AddText("This document demonstrates a professional header with logo and organization name.");
let newParagraph = Api.CreateParagraph();
newParagraph.AddText("The header appears on all pages with consistent branding elements.");
doc.Push(newParagraph);
```
