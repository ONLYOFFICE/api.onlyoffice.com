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

此示例展示如何获取批注作者的姓名。

```javascript editor-xlsx
// How to remove a comment from a range.

// Get a range, add a comment to it and then remove it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
