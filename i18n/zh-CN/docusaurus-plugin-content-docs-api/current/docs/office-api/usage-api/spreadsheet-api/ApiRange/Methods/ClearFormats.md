# ClearFormats

清除当前范围中的所有格式。

## 语法

```javascript
expression.ClearFormats();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

清除电子表格中单元格范围的所有格式，同时保留其值不变。

```javascript editor-xlsx
// How do I remove bold, colors, and other styling from cells in a spreadsheet?

// Reset the appearance of selected cells to plain default style without deleting their data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A2").SetValue("Example text")
worksheet.GetRange("A1:A2").SetBold(true);
let range = worksheet.GetRange("A1");
range.ClearFormats();
worksheet.GetRange("A3").SetValue("Result is bold format cleared for A1 cell.");
```
