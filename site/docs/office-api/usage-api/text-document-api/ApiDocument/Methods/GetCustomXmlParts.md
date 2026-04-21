# GetCustomXmlParts

Retrieves the custom XML manager associated with the document.
This manager allows manipulation and access to custom XML parts within the document.

## Syntax

```javascript
expression.GetCustomXmlParts();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## Example

Get the custom XML manager, add a new XML part, and retrieve it by its ID in a document.

```javascript editor-docx
// How can I get custom xml parts using a document in a document?

// Get custom xml parts for a document in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);
```
