# Unfreeze

Removes all frozen panes in the current worksheet.

## Syntax

```javascript
expression.Unfreeze();
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Release all locked rows and columns so the sheet scrolls freely in a spreadsheet.

```javascript editor-xlsx
// How do I remove frozen panes and allow the entire sheet to scroll without restrictions in a spreadsheet?

// Unpin any fixed areas to restore normal scrolling behavior across the whole sheet in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");
```
