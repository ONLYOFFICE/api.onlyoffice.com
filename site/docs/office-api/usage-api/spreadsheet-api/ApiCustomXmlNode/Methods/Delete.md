# Delete

Deletes the current XML node.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a specific node from an embedded XML structure in a spreadsheet.

```javascript editor-xlsx
// How do I delete an unwanted element from custom XML data in a spreadsheet?

// Trim embedded XML content by eliminating a node and verifying what remains in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
worksheet.GetRange("A1").SetValue("Remaining items: " + remainingNodes.length);
```
