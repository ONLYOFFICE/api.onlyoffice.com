# GetValue2

Returns the Value2 property (value without format) of the specified range.

## Syntax

```javascript
expression.GetValue2();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| string[][]

## Example

Read the unformatted raw value from a cell in a spreadsheet.

```javascript editor-xlsx
// How do I get the number stored in a cell without any formatting in a spreadsheet?

// Extract the underlying value from a formatted cell to use it elsewhere in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
let range = worksheet.GetRange("A1");
range.SetValue(format);
let value2 = range.GetValue2();
worksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + value2);
```
