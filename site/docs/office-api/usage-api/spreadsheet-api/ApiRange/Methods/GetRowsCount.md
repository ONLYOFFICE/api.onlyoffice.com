# GetRowsCount

Returns a number of rows in the current range.

## Syntax

```javascript
expression.GetRowsCount();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a count of rows in the specified range.

```javascript editor-xlsx playground
// How to get a count of rows in the range.

// Get a count of rows in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C4");
range.SetValue("I was selected");
worksheet.GetRange("A5").SetValue("Rows count in the selected range should be 4: " + range.GetRowsCount());

```
