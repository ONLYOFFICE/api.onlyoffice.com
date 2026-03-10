# Delete

删除 ApiComment 对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例删除 ApiComment 对象。

```javascript editor-xlsx
// How to remove a comment from a range.

// Get a range add a comment to it and then remove it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
comment.Delete();
worksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");
```
