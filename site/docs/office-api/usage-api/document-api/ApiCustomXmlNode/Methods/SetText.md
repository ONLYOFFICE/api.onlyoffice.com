# SetText

Sets the text content of the current XML node.

## Syntax

```javascript
expression.SetText(str);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| str | Required | string |  | The text content to set for the node. |

## Returns

boolean

## Example

Change the text content of specific XML nodes embedded in a document.

```javascript editor-docx
// How do I update the plain text inside a node in the XML data stored in a document?

// Correct or refresh the human-readable values in structured XML fields in a document.

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
let node = xml.GetNodes('/bookstore/book/title')[0];
node.SetText('Iliad');
node = xml.GetNodes('/bookstore/book/year')[0];
node.SetText('9th–8th centuries BC');
let paragraph = Api.CreateParagraph();
paragraph.AddText("\r\nContent of custom xml:\r\n");
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
```
