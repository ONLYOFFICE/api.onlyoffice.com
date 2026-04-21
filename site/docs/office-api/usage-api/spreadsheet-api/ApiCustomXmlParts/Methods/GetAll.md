# GetAll

Returns all custom XML parts from the XML manager.

## Syntax

```javascript
expression.GetAll();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)[]

## Example

Get all custom XML parts in a spreadsheet.

```javascript editor-xlsx
// How to retrieve all custom XML parts from the workbook in a spreadsheet.

// Get all for a custom XML parts in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<employees><employee>John</employee></employees>");
xmlManager.Add("<departments><department>IT</department></departments>");
xmlManager.Add("<projects><project>Website</project></projects>");
let allParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Total XML parts: " + allParts.length);
for (let i = 0; i < allParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Part " + (i + 1) + ": " + allParts[i].GetXml());
}
```
