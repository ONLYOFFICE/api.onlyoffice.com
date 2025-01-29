# GetId

Returns the current comment ID.

## Syntax

expression.GetId();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the comment ID.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: ");
oWorksheet.GetRange("B3").SetValue(oRange.GetComment().GetId());
```
