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

检索电子表格工作表上留下的每个批注。

```javascript editor-xlsx
// How do I list all comments on a sheet in a spreadsheet?

// Read comment text by collecting all annotations from the worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comments = worksheet.GetComments();
worksheet.GetRange("A4").SetValue("Comment: " + comments[0].GetText());
```
