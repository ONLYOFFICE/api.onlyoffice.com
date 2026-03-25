# GetComment

返回当前范围的 ApiComment 对象。

## 语法

```javascript
expression.GetComment();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiComment](../../ApiComment/ApiComment.md) \| null

## 示例

此示例演示如何获取范围的 ApiComment 对象。

```javascript editor-xlsx
// How to get a range comment.

// Get a range, get its comment and show its text in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());
```
