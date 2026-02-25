# SetAuthorName

Sets the comment reply author's name.

## Syntax

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | string |  | The comment reply author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment reply author's name.

```javascript editor-xlsx playground
// How to add author's name to the reply.

// Add a reply to the comment and set author name, then show author name in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetAuthorName("Mark Potato");
worksheet.GetRange("A3").SetValue("Comment's reply author: ");
worksheet.GetRange("B3").SetValue(reply.GetAuthorName());
```
