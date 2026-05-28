# DeleteAttribute

Deletes an attribute from the XML node at the specified XPath.

## Syntax

```javascript
expression.DeleteAttribute(xPath, name);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node from which to delete the attribute. |
| name | Required | string |  | The name of the attribute to delete. |

## Returns

boolean

## Example

Remove a specific attribute from an element in embedded XML data in a document.

```javascript editor-docx
// How do I strip an unwanted attribute from an XML element stored in a document?

// Clean up obsolete metadata on an element without altering the rest of the XML in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let deletionSuccess = xml.DeleteAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation: " + xml.GetXml());
doc.Push(infoParagraph);
```
