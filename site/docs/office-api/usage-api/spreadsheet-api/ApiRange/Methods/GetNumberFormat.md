# GetNumberFormat

Returns a value that represents the format code for the current range.

## Syntax

```javascript
expression.GetNumberFormat();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get a value that represents the format code for the current range.

```javascript editor-xlsx
// How to find out a number format of a range.

// Get a range, get its cell number format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);
```
