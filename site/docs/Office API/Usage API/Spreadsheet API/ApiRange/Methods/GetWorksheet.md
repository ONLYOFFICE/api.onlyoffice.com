# GetWorksheet

Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode.

## Syntax

```javascript
expression.GetWorksheet();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

This example shows how to get the Worksheet object that represents the worksheet containing the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
var oSheet = oRange.GetWorksheet();
oWorksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
```
