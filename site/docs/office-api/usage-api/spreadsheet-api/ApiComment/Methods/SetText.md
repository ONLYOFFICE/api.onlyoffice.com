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

This example sets the comment text.

```javascript editor-xlsx playground
// How to change a comment text.

// Replace a comment text with a new text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");
```
