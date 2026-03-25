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

此示例演示如何获取 ApiComment 对象的数组。

```javascript editor-xlsx
// How to get an array of comments.

// Get all comments as an array.

Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob");
let arrComments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + arrComments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + arrComments[0].GetAuthorName());
```
