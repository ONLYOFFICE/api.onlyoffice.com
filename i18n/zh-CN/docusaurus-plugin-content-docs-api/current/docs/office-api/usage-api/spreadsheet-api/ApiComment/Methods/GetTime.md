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

此示例展示如何获取批注创建时间戳（当前时区格式）。

```javascript editor-xlsx
// How to get a time when a comment was created.

// Add a comment creation timestamp to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp: ");
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
