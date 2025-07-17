# GetAttributes

Returns a list of attributes of the current XML node.

## Syntax

```javascript
expression.GetAttributes();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[CustomXmlNodeAttribute](../../Enumeration/CustomXmlNodeAttribute.md)[]

## Example

This example shows how to retrieve and display the list of attributes of the current XML node.

```javascript editor-docx
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
let node = xml.GetNodes('/zoo/animal')[0];
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of the animal node:\r\n");
attributes.forEach(function(attribute, index) {
    paragraph.AddText("name:" + attribute.name + ", value: " + attribute.value + "\r\n");
});
doc.Push(paragraph);
```
