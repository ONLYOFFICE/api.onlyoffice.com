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

Replace an XML element's content inside a custom XML part in a document.

```javascript editor-docx
// How do I update an existing XML element within a custom XML part in a document?

// Overwrite a child element with new markup to reflect changed data in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Example</text></content>");
xml.UpdateElement("/content/", "<user>John</user>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
