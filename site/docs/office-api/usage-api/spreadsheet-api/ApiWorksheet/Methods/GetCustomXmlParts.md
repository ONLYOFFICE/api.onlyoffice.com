# GetCustomXmlParts

Retrieves the custom XML manager associated with the current sheet.
This manager allows manipulation and access to custom XML parts within the current sheet.

## Syntax

```javascript
expression.GetCustomXmlParts();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## Example

Get the custom XML manager, add a new XML part, and retrieve it by its ID in a spreadsheet.

```javascript editor-xlsx
// How to get custom XML parts from a worksheet.

// Get the custom XML parts manager in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
worksheet.GetRange("A1").SetValue("Retrieved XML: " + retrievedXml.GetXml());
```
