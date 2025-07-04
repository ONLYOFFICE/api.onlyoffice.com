# GetRightMargin

Returns the right margin of the sheet.

## Syntax

```javascript
expression.GetRightMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the right margin of the sheet.

```javascript editor-xlsx
// How to get margin of the sheet's right side.

// Get the size of the right margin of the sheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
