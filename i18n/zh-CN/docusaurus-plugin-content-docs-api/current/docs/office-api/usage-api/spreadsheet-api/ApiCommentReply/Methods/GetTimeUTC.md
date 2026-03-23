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

此示例演示如何获取 UTC 格式的批注回复创建时间戳。

```javascript editor-xlsx
// How to get a time in UTC when a reply was created.

// Add a comment reply creation timestamp UTC to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
worksheet.GetRange("B3").SetValue(reply.GetTimeUTC());
```
