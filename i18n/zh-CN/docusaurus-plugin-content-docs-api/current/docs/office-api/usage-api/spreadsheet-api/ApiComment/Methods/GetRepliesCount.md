# GetRepliesCount

返回批注回复的数量。

## 语法

```javascript
expression.GetRepliesCount();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

获取电子表格中批注的回复数量。

```javascript editor-xlsx
// How to get a number of replies to the comment in a spreadsheet.

// Add a comment to the range and display its replies count in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());
```
