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

This example shows how to retrieve custom XML parts by their namespace.

```javascript editor-docx playground
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content xmlns='http://example.com'><text>Example XML</text></content>";
let xml = xmlManager.Add(xmlText);
let namespace = "http://example.com";
let xmlParts = xmlManager.GetByNamespace(namespace);
let infoParagraph = Api.CreateParagraph();
xmlParts.forEach(part => {
    infoParagraph.AddText("XML part: " + part.GetXml());
});
doc.Push(infoParagraph);
```
