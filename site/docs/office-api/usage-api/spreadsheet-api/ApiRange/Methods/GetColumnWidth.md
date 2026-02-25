# GetColumnWidth

Returns the column width value.

## Syntax

```javascript
expression.GetColumnWidth();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the column width value.

```javascript editor-xlsx playground
// How to get width of a range column.

// Get a range, get its column width and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);
```
