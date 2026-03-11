# GetNodes

Retrieves nodes from custom XML based on the provided XPath.

## Syntax

```javascript
expression.GetNodes(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath expression to search for nodes. |

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## Example

This example shows how to update the value of an attribute in a custom XML node.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text val="123">node text</text>
    <label name="Title">label text</label>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let nodes = xml.GetNodes("/documentData/*");
let label = xml.GetNodes("/documentData/label")[0];
let paragraph = Api.CreateParagraph();
nodes.forEach(node => {
    paragraph.AddText("Node text: " + node.GetText() + "\r\n");
});
paragraph.AddText("Label attribute: " + label.GetAttribute("name"));
doc.Push(paragraph);
```
