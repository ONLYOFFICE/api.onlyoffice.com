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

检查电子表格中的批注是否已标记为已解决。

```javascript editor-xlsx
// How do I tell if a comment has already been resolved or is still open in a spreadsheet?

// Verify the resolved state of a comment to decide if further action is needed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
worksheet.GetRange("B3").SetValue(comment.IsSolved());
```
