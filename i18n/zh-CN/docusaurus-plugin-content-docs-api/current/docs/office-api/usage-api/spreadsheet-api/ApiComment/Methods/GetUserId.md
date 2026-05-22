# GetUserId

返回批注作者的用户 ID。

## 语法

```javascript
expression.GetUserId();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索在电子表格中编写批注的人员的唯一标识符。

```javascript editor-xlsx
// How do I look up the user ID belonging to the author of a comment in a spreadsheet?

// Identify who created a comment by reading their account identifier in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
worksheet.GetRange("B3").SetValue(comment.GetUserId());
```
