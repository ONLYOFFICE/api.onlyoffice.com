# UpdateElement

Updates an XML element at the specified XPath.

## Syntax

```javascript
expression.UpdateElement(xPath, xmlStr);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to update. |
| xmlStr | Required | string |  | The XML string to replace the node content with. |

## Returns

boolean

## Example

This example shows how to update an XML element in a custom XML part.

```javascript editor-docx playground
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Example</text></content>");
xml.UpdateElement("/content/", "<user>John</user>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
