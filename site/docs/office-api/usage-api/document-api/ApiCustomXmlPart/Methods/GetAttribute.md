# GetAttribute

Returns an attribute from the XML node at the specified XPath.

## Syntax

```javascript
expression.GetAttribute(xPath, name);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node from which to get the attribute. |
| name | Required | string |  | The name of the attribute to find. |

## Returns

string \| null

## Example

Read the value of a named attribute from an element in embedded XML data in a document.

```javascript editor-docx
// How do I get the value of a specific attribute from an XML element stored in a document?

// Extract a metadata value from structured XML so it can be displayed or validated in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);
```
