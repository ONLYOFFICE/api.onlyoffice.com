# GetUserId

Returns the user ID of the comment author.

## Syntax

```javascript
expression.GetUserId();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the user ID of the comment author.

```javascript editor-xlsx
// How to get a comment author's user ID.

// Add a comment author's ID to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
worksheet.GetRange("B3").SetValue(comment.GetUserId());
```
