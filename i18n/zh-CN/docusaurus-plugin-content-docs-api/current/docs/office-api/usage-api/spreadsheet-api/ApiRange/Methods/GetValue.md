# GetValue

返回指定范围的值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| number \| boolean \| (string \| number \| boolean)[][]

## 示例

读取电子表格中单元格存储的值。

```javascript editor-xlsx
// How do I retrieve what a cell contains in a spreadsheet?

// Display the contents of a cell in another location in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);
```
