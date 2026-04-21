# GetName

Returns a sheet name.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get a sheet name in a spreadsheet.

```javascript editor-xlsx
// How to get name of the sheet in a spreadsheet.

// Get a sheet name using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);
```
