# GetNumberFormat

返回表示当前范围的格式代码的值。

## 语法

```javascript
expression.GetNumberFormat();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取电子表格中应用于单元格范围的数字格式代码。

```javascript editor-xlsx
// How do I find out what number format is set on a range in a spreadsheet?

// Inspect the formatting pattern a range uses to display its values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);
```
