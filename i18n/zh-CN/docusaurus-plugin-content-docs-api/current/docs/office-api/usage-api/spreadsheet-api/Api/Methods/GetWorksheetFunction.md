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

访问并运行电子表格中的内置计算函数。

```javascript editor-xlsx
// How do I use built-in math and text functions in a spreadsheet?

// Apply a built-in function to a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
