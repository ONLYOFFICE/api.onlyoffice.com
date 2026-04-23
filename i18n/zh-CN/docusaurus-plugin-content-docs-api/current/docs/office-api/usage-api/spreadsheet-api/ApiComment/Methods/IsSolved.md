# IsSolved

检查批注是否已解决。

## 语法

```javascript
expression.IsSolved();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查批注是否已解决。

```javascript editor-xlsx
// How to find out whether a comment is resolved.

// Add a comment resolved status to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
worksheet.GetRange("B3").SetValue(comment.IsSolved());
```
