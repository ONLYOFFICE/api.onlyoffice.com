# SetText

Sets the comment text.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | New text for comment. |

## Returns

This method doesn't return any data.

## Example

Update the written message of an existing comment in a spreadsheet.

```javascript editor-xlsx
// How do I replace the text inside a comment with new content in a spreadsheet?

// Overwrite an outdated comment message with a revised note in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");
```
