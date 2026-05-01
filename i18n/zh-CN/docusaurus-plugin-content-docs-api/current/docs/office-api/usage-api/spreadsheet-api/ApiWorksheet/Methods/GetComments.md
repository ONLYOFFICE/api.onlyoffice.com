# GetComments

返回当前工作表中的所有批注。

## 语法

```javascript
expression.GetComments();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)[]

## 示例

获取电子表格中的批注对象数组。

```javascript editor-xlsx
// How to get all comments in a spreadsheet.

// Get all comments from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comments = worksheet.GetComments();
worksheet.GetRange("A4").SetValue("Comment: " + comments[0].GetText());
```
