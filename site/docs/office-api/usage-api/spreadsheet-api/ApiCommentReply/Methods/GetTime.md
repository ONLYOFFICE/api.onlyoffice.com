# GetTime

Returns the timestamp of the comment reply creation in the current time zone format.

## Syntax

```javascript
expression.GetTime();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment reply creation in the current time zone format.

```javascript editor-xlsx
// How to get a time when a reply was created.

// Add a reply creation timestamp to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
worksheet.GetRange("B3").SetValue(reply.GetTime());
```
