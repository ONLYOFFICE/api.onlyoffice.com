# GetEntireRow

返回表示包含指定范围的整行的 Range 对象。

## 语法

```javascript
expression.GetEntireRow();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

选择与电子表格中给定范围重叠的完整行。

```javascript editor-xlsx
// How do I highlight all the rows that a range belongs to in a spreadsheet?

// Fill the complete rows of a range with a background color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireRows = range.EntireRow;
entireRows.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire rows of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);
```
