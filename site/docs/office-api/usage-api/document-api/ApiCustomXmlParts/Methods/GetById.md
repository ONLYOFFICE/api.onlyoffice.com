# GetById

Returns a custom XML part by its ID from the XML manager.

## Syntax

```javascript
expression.GetById(xmlPartId);
```

`expression` - A variable that represents an [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | Required | string |  | The XML part ID. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## Example

Find a custom XML part by its ID in a document.

```javascript editor-docx
// How do I get a specific custom XML part using its identifier in a document?

// Read the XML content of the part returned for a given ID in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content xmlns='http://example.com'><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let foundPart = xmlManager.GetById(xmlPart.GetId());
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML part: " + foundPart.GetXml());
doc.Push(infoParagraph);
```
