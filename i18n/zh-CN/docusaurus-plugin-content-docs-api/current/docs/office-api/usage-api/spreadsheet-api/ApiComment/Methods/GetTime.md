# GetTime

返回批注创建时间戳（当前时区格式）。

## 语法

```javascript
expression.GetTime();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

读取电子表格中使用本地时区创建批注的时间。

```javascript editor-xlsx
// How do I find out the exact date and time a comment was posted, in my local time, in a spreadsheet?

// Capture the creation timestamp of a comment to record the local time it was added in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp: ");
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
