# GetUserId

Returns the user ID of the comment reply author.

## Syntax

```javascript
expression.GetUserId();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the account identifier of the person who wrote a comment reply in a spreadsheet.

```javascript editor-xlsx
// How do I look up the user ID tied to someone who replied to a comment in a spreadsheet?

// Retrieve the unique user reference linked to a reply author in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
worksheet.GetRange("B3").SetValue(reply.GetUserId());
```
