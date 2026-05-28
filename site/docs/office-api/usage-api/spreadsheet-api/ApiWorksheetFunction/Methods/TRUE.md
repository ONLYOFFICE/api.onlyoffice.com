# TRUE

Returns the - **true** logical value.

## Syntax

```javascript
expression.TRUE();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Return a logical true value in a spreadsheet.

```javascript editor-xlsx
// How do I insert the logical true value into a cell in a spreadsheet?

// Set a cell to the boolean true value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let logical1 = 1 > 0;
let logical2 = 2 > 0;

let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2); //Works on XOR gate logic

worksheet.GetRange("C1").SetValue(ans);
```
