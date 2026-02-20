# GetNodeName

Returns the name of the current XML node.

## Syntax

```javascript
expression.GetNodeName();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the node name of a custom XML node.

```javascript editor-xlsx playground
// How to retrieve node names from custom XML node elements.

// Get node name from item element.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item><item>Pen</item></inventory>");
let inventoryNode = xml.GetNodes('/inventory')[0];
let itemNodes = inventoryNode.GetNodes('/item');
let nodeName = itemNodes[0].GetNodeName();
worksheet.GetRange("A1").SetValue("Node name: " + nodeName);
```
