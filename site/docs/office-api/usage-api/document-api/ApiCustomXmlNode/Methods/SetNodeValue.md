# SetNodeValue

Sets the XML content for the current node.

## Syntax

```javascript
expression.SetNodeValue(xml);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | Required | string |  | The XML string to set as the content of the current node. |

## Returns

boolean

## Example

Replace the raw value of an XML node stored in a document.

```javascript editor-docx
// How do I overwrite the content of a node in the embedded XML data in a document?

// Refresh a node's payload with updated markup when the stored data changes in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book>
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.SetNodeValue("<book>Updated content</book>");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
```
