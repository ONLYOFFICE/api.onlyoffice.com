# GetXPath

Returns the absolute XPath of the current XML node.

## Syntax

```javascript
expression.GetXPath();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the XPath of a custom XML node in a document.

```javascript editor-docx
// How do I get the x path in a document?

// Get the x path using a custom XML node object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo xmlns="zoo-namespace">
    <animal>
        <name>Leo</name>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal/name')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("xPath: " + node.GetXPath());
doc.Push(paragraph);
```
