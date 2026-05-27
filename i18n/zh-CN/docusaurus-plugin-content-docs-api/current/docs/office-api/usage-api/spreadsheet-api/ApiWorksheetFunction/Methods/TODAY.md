# TODAY

返回 *MM/dd/yy* 格式的当前日期。

## 语法

```javascript
expression.TODAY();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中以 MM/dd/yy 格式返回当前日期。

```javascript editor-xlsx
// Retrieve the system date and display it with the built-in time format.

// Apply the TODAY function to insert the current date into a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TODAY());
```
