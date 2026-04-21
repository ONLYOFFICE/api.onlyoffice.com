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

Set the comment text in a spreadsheet.

```javascript editor-xlsx
// How to change a comment text in a spreadsheet.

// Replace a comment text with a new text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");
```
