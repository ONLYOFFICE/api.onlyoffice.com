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

Read the tag name of an XML node embedded in a spreadsheet.

```javascript editor-xlsx
// How do I find out the element name of a custom XML node in a spreadsheet?

// Identify which XML tag a node represents by reading its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item><item>Pen</item></inventory>");
let inventoryNode = xml.GetNodes('/inventory')[0];
let itemNodes = inventoryNode.GetNodes('/item');
let nodeName = itemNodes[0].GetNodeName();
worksheet.GetRange("A1").SetValue("Node name: " + nodeName);
```
