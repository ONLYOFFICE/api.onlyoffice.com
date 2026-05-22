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

Access the custom XML storage on a worksheet to add and look up XML parts in a spreadsheet.

```javascript editor-xlsx
// How do I store and retrieve custom XML data on a sheet in a spreadsheet?

// Manage structured XML content attached to a worksheet by adding a part and fetching it by ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
worksheet.GetRange("A1").SetValue("Retrieved XML: " + retrievedXml.GetXml());
```
