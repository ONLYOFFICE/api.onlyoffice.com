# GetAuthorName

返回批注作者的姓名。

## 语法

```javascript
expression.GetAuthorName();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取在电子表格中编写单元格批注的人员姓名。

```javascript editor-xlsx
// How do I find out who authored a comment attached to a cell in a spreadsheet?

// Identify the contributor behind a cell annotation by retrieving the author name stored with the comment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
