# GetXml

Returns the XML string of the current node.

## Syntax

```javascript
expression.GetXml();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the XML markup of a specific node stored in a document.

```javascript editor-docx
// How do I extract the raw XML content of a node embedded in a document?

// Inspect or export a node's full markup when working with structured data in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML Content: " + node.GetXml());
doc.Push(paragraph);
```
