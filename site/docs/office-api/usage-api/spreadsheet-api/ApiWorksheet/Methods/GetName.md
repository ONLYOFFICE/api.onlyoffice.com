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

Retrieve the name of the active sheet in a spreadsheet.

```javascript editor-xlsx
// How do I read the tab name of the current sheet in a spreadsheet?

// Capture the sheet name and write it to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);
```
