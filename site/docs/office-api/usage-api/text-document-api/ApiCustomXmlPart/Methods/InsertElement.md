# InsertElement

Inserts an XML element at the specified XPath.

## Syntax

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the parent node where the new element will be inserted. |
| xmlStr | Required | string |  | The XML string to insert. |
| index | Optional | number |  | The position at which to insert the new XML element. If omitted, the element will be appended as the last child. |

## Returns

boolean

## Example

This example shows how to insert a new XML element into the custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
xml.InsertElement("/content", "<text>example_text</text>");
xml.InsertElement("/content", "<firstNode>text inside first node</firstNode>", 0);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
