# GetAllComments

返回当前工作簿中的所有批注，包括所有工作表中的批注。

## 语法

```javascript
expression.GetAllComments();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)[]

## 示例

此示例演示如何从工作表获取所有批注。

```javascript editor-xlsx
// How to get all comments from the worksheet.

// Get all cell comments.

let worksheet = Api.GetActiveSheet();Api.AddComment("Comment 1", "John Smith");
worksheet.GetRange("A4").AddComment("Comment 2", "Mark Potato");
let arrComments = Api.GetAllComments();
worksheet.GetRange("A1").SetValue("Comment text: " + arrComments[1].GetText());
worksheet.GetRange("A2").SetValue("Comment author: " + arrComments[1].GetAuthorName());
```
