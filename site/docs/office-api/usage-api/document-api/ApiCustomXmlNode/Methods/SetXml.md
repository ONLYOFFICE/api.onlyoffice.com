# SetXml

Sets the XML content of the current XML node.

## Syntax

```javascript
expression.SetXml(strXml);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| strXml | Required | string |  | The XML string to set as the node content. |

## Returns

boolean

## Example

Replace the full XML markup of a node embedded in a document.

```javascript editor-docx
// How do I substitute an entire node's XML structure in the data stored in a document?

// Swap in revised markup for a node when its schema or content needs a full overhaul in a document.

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
node.SetXml("<book>Updated content</book>");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
```
