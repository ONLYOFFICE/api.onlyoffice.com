# InsertAttribute

Inserts an attribute into the XML node at the specified XPath.

## Syntax

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to insert the attribute into. |
| name | Required | string |  | The name of the attribute to insert. |
| value | Required | string |  | The value of the attribute to insert. |

## Returns

boolean

## Example

Add a new attribute to an XML node in a custom XML part in a document.

```javascript editor-docx
// How do I attach an attribute to an existing XML element in a document?

// Extend an XML node with extra metadata by inserting a named attribute in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let insertionSuccess = xml.InsertAttribute("/content", "version", "1.0");
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xml.GetXml());
doc.Push(paragraph);
```
