# GetText

返回批注回复文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中批注回复的书面内容。

```javascript editor-xlsx
// How do I retrieve the message a user left as a reply to a comment in a spreadsheet?

// Extract the reply text from a comment thread and show it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());
```
