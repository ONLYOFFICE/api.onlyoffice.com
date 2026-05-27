# GetUserId

返回批注回复作者的用户 ID。

## 语法

```javascript
expression.GetUserId();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取在电子表格中编写批注回复的人员的帐户标识符。

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
