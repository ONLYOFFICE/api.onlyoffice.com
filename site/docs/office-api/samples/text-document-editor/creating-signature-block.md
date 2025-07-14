# Creating signature block

Create a document with a signature block containing position, name and signature line:

- add position text with bold formatting and top spacing ([ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [ApiRun/SetBold](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetBold.md));
- add name text with bold formatting ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- add signature line with underscores and bold formatting ([Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Add position paragraph with top spacing
let positionParagraph = doc.GetElement(0);
positionParagraph.SetSpacingBefore(40 * 20); // 40pt converted to twips (1pt = 20 twips)
positionParagraph.SetJc("left");
positionParagraph.AddText("Position:").SetBold(true);
positionParagraph.AddText(" Marketing Specialist");

// Add name paragraph
let nameParagraph = Api.CreateParagraph();
nameParagraph.SetJc("left");
nameParagraph.AddText("Name:").SetBold(true);
nameParagraph.AddText(" Emily Johnson");
doc.Push(nameParagraph);

// Add signature line paragraph
let signatureParagraph = Api.CreateParagraph();
signatureParagraph.SetJc("left");
signatureParagraph.AddText("Signature:").SetBold(true);
signatureParagraph.AddText(" _____________________________");
doc.Push(signatureParagraph);
```
