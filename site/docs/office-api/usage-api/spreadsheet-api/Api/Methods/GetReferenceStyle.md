# GetReferenceStyle

Returns the cell reference style.

## Syntax

```javascript
expression.GetReferenceStyle();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ReferenceStyle](../../Enumeration/ReferenceStyle.md)

## Example

Get reference style in a spreadsheet.

```javascript editor-xlsx
// Get style of a reference in a spreadsheet.

// Insert a reference style into the cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
