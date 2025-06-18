# GetText

Returns the inner text of the current node and its child nodes.
For example: `&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` returns `"1234"`.

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

This example shows how to get the text content of a custom XML node and its children.

```javascript editor-docx
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
