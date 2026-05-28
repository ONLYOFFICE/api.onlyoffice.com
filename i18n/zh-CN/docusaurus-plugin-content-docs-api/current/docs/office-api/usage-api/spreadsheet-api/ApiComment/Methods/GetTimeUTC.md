# GetTimeUTC

返回批注创建时间戳（UTC 格式）。

## 语法

```javascript
expression.GetTimeUTC();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

读取电子表格中批注以世界时间创建的时间。

```javascript editor-xlsx
// How do I find out the exact date and time a comment was posted in UTC in a spreadsheet?

// Capture the creation timestamp of a comment in a timezone-neutral format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());
```
