# Clear

Clears the current range.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears the range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetValue("1");
oRange.Clear();
oWorksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
