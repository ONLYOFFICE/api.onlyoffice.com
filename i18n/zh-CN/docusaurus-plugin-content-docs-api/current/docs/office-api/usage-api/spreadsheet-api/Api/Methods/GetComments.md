# GetComments

返回与整个工作簿相关的所有批注。

## 语法

```javascript
expression.GetComments();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)[]

## 示例

检索在电子表格顶层添加的所有批注。

```javascript editor-xlsx
// How do I get a list of comments from the workbook level in a spreadsheet?

// Read the text and author of comments stored at the document level in a spreadsheet.

Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob");
let arrComments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + arrComments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + arrComments[0].GetAuthorName());
```
