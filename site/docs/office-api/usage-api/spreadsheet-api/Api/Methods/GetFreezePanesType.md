# GetFreezePanesType

Returns the freeze panes type.

## Syntax

```javascript
expression.GetFreezePanesType();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FreezePaneType](../../Enumeration/FreezePaneType.md)

## Example

Lock the first column and show the active freeze type in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out which rows or columns are currently frozen in a spreadsheet?

// Check what kind of pane freeze is applied and record it in a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
```
