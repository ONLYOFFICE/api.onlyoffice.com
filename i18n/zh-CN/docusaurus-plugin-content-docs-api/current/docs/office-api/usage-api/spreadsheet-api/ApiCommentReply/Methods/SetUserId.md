# SetUserId

设置批注回复作者的用户 ID。

## 语法

```javascript
expression.SetUserId(sUserId);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | 必需 | string |  | 批注回复作者的用户 ID。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中批注回复的作者分配用户标识符。

```javascript editor-xlsx
// How do I change which user is credited as the author of a comment reply in a spreadsheet?

// Update the author identity linked to an existing comment reply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetUserId("uid-2");
worksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
worksheet.GetRange("B3").SetValue(reply.GetUserId());
```
