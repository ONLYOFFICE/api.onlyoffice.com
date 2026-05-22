# GetValue

Returns a value of the specified range.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| number \| boolean \| (string \| number \| boolean)[][]

## Example

Read the value stored in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve what a cell contains in a spreadsheet?

// Display the contents of a cell in another location in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);
```
