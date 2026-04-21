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

获取电子表格中的批注作者名称。

```javascript editor-xlsx
// How to remove a comment from a range in a spreadsheet.

// Get a range, add a comment to it and then remove it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
