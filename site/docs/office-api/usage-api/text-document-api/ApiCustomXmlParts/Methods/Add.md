# Add

Adds a new custom XML part to the XML manager.

## Syntax

```javascript
expression.Add(xml);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | Required | string |  | The XML string to be added. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## Example

This example shows how to add a new custom XML part and then access it.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("New XML part added: " + newXml.GetXml());
doc.Push(infoParagraph);
```
