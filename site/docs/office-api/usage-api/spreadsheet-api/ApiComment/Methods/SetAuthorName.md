# SetAuthorName

Sets the comment author's name.

## Syntax

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | string |  | The comment author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment author's name.

```javascript editor-xlsx
// How to add author's name to the comment.

// Add a comment and author name to it, then show author name in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's author: ");
comment.SetAuthorName("Mark Potato");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
