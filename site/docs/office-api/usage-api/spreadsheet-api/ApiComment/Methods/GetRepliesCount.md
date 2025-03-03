# GetRepliesCount

Returns a number of the comment replies.

## Syntax

```javascript
expression.GetRepliesCount();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of the comment replies.

```javascript editor-xlsx
// How to get a number of replies to the comment.

// Add a comment to the range and display its replies count in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
oWorksheet.GetRange("A3").SetValue("Comment replies count: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetRepliesCount());
```
