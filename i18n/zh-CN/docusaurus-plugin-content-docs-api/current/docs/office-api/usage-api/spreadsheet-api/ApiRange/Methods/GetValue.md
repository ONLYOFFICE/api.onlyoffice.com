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

string \| string[][]

## 示例

此示例演示如何获取指定范围的值。

```javascript editor-xlsx
// How to get a cell value.

// Get a range, get its value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);
```
