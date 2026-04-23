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

此示例演示如何返回数学常数 pi，等于 3.14159265358979，精确到 15 位数字。

```javascript editor-xlsx
// How to return the mathematical constant pi.

// Use a function to return a constant pi.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PI());
```
