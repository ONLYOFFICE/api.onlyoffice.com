# GetNodeValue

Returns the XML string representation of the current node content.

## Syntax

```javascript
expression.GetNodeValue();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the value stored in a custom XML node in a document.

```javascript editor-docx
// How do I get the value of a custom XML node in a document?

// Read raw data out of a specific XML element to use or display it in a document.

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
let animalNode = xml.GetNodes('/zoo/animal')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText(animalNode.GetNodeValue());
doc.Push(paragraph);
```
