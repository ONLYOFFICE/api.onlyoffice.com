# PI

返回数学常数 **pi**，等于 **3.14159265358979**，精确到 15 位数字。

## 语法

```javascript
expression.PI();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中将数学常数 pi 插入到单元格中。

```javascript editor-xlsx
// How do I get the value of pi for mathematical calculations in a spreadsheet?

// Use pi to calculate circles, circumference, and other geometric formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PI());
```
