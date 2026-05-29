# GetText

Returns the inner text of the current node and its child nodes.
For example: `\<text\>123\<one\>4\</one\>\</text\>` returns `"1234"`.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the combined text content of a custom XML node and its descendants in a document.

```javascript editor-docx
// How do I get the text from a custom XML node in a document?

// Collect all readable text nested inside an XML element, including child nodes, in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo><animal><name>Leo</name>123</animal></zoo>`;
let xml = xmlManager.Add(xmlText);
let animalNode = xml.GetNodes('/zoo/animal')[0];
let nodeText = animalNode.GetText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Node text: " + nodeText);
doc.Push(paragraph);
```
