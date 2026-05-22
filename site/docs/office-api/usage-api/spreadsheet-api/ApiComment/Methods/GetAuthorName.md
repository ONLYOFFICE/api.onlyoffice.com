# GetAuthorName

Returns the comment author's name.

## Syntax

```javascript
expression.GetAuthorName();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the name of the person who wrote a cell comment in a spreadsheet.

```javascript editor-xlsx
// How do I find out who authored a comment attached to a cell in a spreadsheet?

// Identify the contributor behind a cell annotation by retrieving the author name stored with the comment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
