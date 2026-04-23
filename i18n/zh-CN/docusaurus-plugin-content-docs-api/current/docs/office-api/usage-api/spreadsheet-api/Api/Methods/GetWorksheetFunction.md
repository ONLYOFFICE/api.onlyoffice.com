# GetWorksheetFunction

返回 ApiWorksheetFunction 对象。

## 语法

```javascript
expression.GetWorksheetFunction();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## 示例

此示例演示如何使用工作表函数对象使用内置函数。

```javascript editor-xlsx
// How to use system functions in a spreadsheets.

// Use built-in functions in a worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
