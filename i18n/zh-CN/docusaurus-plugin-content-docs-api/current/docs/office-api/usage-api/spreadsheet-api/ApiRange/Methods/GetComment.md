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

读取附加到电子表格中单元格范围的批注。

```javascript editor-xlsx
// How do I retrieve the text of a comment on a cell in a spreadsheet?

// Display a cell's comment text in another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());
```
