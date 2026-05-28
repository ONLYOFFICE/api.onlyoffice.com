# GetCount

Returns a number of custom XML parts in the XML manager.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count how many XML blocks are stored in a workbook in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many embedded XML entries exist in a spreadsheet?

// Check the total number of saved XML blocks before iterating over them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
worksheet.GetRange("A1").SetValue("There are " + count + " custom XML parts in the workbook.");
```
