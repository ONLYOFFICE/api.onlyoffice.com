# GetSelection

Returns an object that represents the selected range.

## Syntax

```javascript
expression.GetSelection();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get an object that represents the selected range in a spreadsheet.

```javascript editor-xlsx
// How to get selected range in a spreadsheet.

// Get selection from the worksheet and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");
```
