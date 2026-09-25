# GetById

Returns a custom XML part by its ID from the XML manager.

## Syntax

```javascript
expression.GetById(xmlPartId);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | Required | string |  | The XML part ID. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## Example

Get a custom XML part by its ID in a document.

```javascript editor-docx
// Find a custom XML part using its unique ID in a document.

// Display the retrieved XML part's content in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory xmlns='http://example.com'><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
let paragraph = Api.CreateParagraph();
if (retrievedXml) {
    paragraph.AddText("Found XML part: " + retrievedXml.GetXml());
} else {
    paragraph.AddText("XML part not found");
}
doc.Push(paragraph);
```
