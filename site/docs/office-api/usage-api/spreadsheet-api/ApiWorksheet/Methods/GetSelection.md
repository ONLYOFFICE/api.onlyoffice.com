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

Operate on cells the user currently has chosen in a spreadsheet.

```javascript editor-xlsx
// Identify which cells are active and modify them regardless of their location in a spreadsheet?

// Put text into selected cells without knowing their exact position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");
```
