# SetSolved

Marks a comment as solved.

## Syntax

expression.SetSolved(bSolved);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | Required | boolean |  | Specifies if a comment is solved or not. |

## Returns

This method doesn't return any data.

## Example

This example marks a comment as solved.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oComment.SetSolved(true);
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());
```
