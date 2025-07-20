# Inserting hyperlink into sentence

Create a document with a clickable hyperlink embedded within a regular paragraph:

- create a paragraph with text containing an embedded hyperlink ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- insert a hyperlink with custom anchor text that flows naturally within the sentence ([ApiRun/AddHyperlink](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddHyperlink.md));
- apply default hyperlink styling with blue color and underline formatting ([ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md)).

```ts editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create a paragraph with embedded hyperlink
paragraph.AddText("You can find more details in the ");
let run = Api.CreateRun();
run.AddText("official documentation");
paragraph.AddElement(run);
run.AddHyperlink("https://api.onlyoffice.com/", "api.onlyoffice.com");
paragraph.AddText(" which covers the API in depth. If you are getting started, it's a good idea to review the usage examples first.");

// Set paragraph alignment to left (default)
paragraph.SetJc("left");
```
