# GetVisible

Returns the state of sheet visibility.

## Syntax

expression.GetVisible();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the state of sheet visibility.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
var bVisible = oWorksheet.GetVisible();
oWorksheet.GetRange("A1").SetValue("Visible: ");
oWorksheet.GetRange("B1").SetValue(bVisible);
```
