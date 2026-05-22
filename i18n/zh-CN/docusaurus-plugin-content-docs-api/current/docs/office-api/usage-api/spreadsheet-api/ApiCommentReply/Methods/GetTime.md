# GetTime

返回当前时区格式的批注回复创建时间戳。

## 语法

```javascript
expression.GetTime();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

读取电子表格中批注回复上记录的本地创建时间。

```javascript editor-xlsx
// How do I find out exactly when a reply to a comment was posted in a spreadsheet?

// Show the date and time a reply was added to a comment thread in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
worksheet.GetRange("B3").SetValue(reply.GetTime());
```
