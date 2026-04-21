# GetId

Returns the ID of the custom XML part.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the ID of a custom XML part in a spreadsheet.

```javascript editor-xlsx
// How to get the ID of an XML part in a spreadsheet.

// Get the id and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);
```
