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

在电子表格中生成 0 到 1 之间的随机数。

```javascript editor-xlsx
// How do I create a random decimal value in a spreadsheet?

// Insert an unpredictable number that recalculates each time the spreadsheet updates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RAND());
```
