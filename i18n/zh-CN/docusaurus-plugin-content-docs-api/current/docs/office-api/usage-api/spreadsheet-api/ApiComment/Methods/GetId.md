# GetId

返回当前批注 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索分配给电子表格中单元格批注的唯一标识符。

```javascript editor-xlsx
// How do I get the ID that uniquely identifies a comment on a cell in a spreadsheet?

// Look up a comment's own identifier so it can be referenced or tracked programmatically in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetId());
```
