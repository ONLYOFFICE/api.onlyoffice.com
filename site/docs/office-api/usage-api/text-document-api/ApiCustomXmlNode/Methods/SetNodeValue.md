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

Get the XPath of a custom XML node in a document.

```javascript editor-docx
// How to set node value for a custom XML node in a document?

// Set node value and display the result in a document.

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
