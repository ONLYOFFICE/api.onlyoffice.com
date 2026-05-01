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

获取电子表格中批注回复创建的当前时区格式时间戳。

```javascript editor-xlsx
// How to get a time when a reply was created in a spreadsheet.

// Add a reply creation timestamp to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
worksheet.GetRange("B3").SetValue(reply.GetTime());
```
