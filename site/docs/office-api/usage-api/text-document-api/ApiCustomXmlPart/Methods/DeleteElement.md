# DeleteElement

Deletes an XML element at the specified XPath.

## Syntax

```javascript
expression.DeleteElement(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to delete. |

## Returns

boolean

## Example

This example demonstrates how to delete an XML element from a custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>example_text</text><firstNode>text inside first node</firstNode></content>");
xml.DeleteElement("/content/firstNode");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation after deletion: " + xml.GetXml());
doc.Push(infoParagraph);
```
