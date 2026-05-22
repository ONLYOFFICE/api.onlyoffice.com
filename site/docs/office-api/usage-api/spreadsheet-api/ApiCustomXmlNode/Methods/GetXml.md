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

Export a node and all its contents as a raw XML string in a spreadsheet.

```javascript editor-xlsx
// How do I get the full XML markup for a specific node in a spreadsheet?

// Capture a node's complete structure as text to inspect or reuse it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<book><title>JavaScript Guide</title><author>John Smith</author></book>");
let bookNode = xml.GetNodes('/book')[0];
let xmlString = bookNode.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlString);
```
