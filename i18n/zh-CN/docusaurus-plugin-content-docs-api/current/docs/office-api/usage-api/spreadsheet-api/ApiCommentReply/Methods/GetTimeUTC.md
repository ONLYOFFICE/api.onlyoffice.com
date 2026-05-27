# GetTimeUTC

返回 UTC 格式的批注回复创建时间戳。

## 语法

```javascript
expression.GetTimeUTC();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

读取电子表格中批注回复上记录的 UTC 创建时间。

```javascript editor-xlsx
// How do I get the universal timestamp for when a reply was posted to a comment in a spreadsheet?

// Retrieve the timezone-neutral posting time of a reply within a comment thread in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
worksheet.GetRange("B3").SetValue(reply.GetTimeUTC());
```
