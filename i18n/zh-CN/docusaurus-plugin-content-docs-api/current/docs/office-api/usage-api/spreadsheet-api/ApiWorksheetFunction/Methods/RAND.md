# RAND

返回一个大于或等于 0 且小于 1 的均匀分布随机数（重新计算时会改变）。

## 语法

```javascript
expression.RAND();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中返回大于或等于 0 且小于 1 的均匀分布的随机数（重新计算时变化）。

```javascript editor-xlsx
// How to get a number between 0 and 1 in a spreadsheet.

// Use a function to return a random value more or equal to zero and less than one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RAND());
```
