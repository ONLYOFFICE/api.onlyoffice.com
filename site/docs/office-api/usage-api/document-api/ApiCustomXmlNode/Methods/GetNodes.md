# GetNodes

Returns nodes from the custom XML node based on the given XPath.

## Syntax

```javascript
expression.GetNodes(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath expression to match nodes. |

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## Example

Select child nodes from a custom XML node using a path query in a document.

```javascript editor-docx
// How do I retrieve matching child nodes from a custom XML node in a document?

// Traverse embedded XML data by querying for a set of elements under a given node in a document.

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
let nodes = animalNode.GetNodes("/*");
let paragraph = Api.CreateParagraph();
nodes.forEach(function(node, index) {
    paragraph.AddText(`Node #${index} value: ${node.GetNodeValue()}\r\n`);
});
doc.Push(paragraph);
```
