# NA

返回 *#N/A* 错误值，表示“无可用值”。

## 语法

```javascript
expression.NA();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中向单元格插入 N/A 错误值。

```javascript editor-xlsx
// Display "no value available" in a spreadsheet using a function.

// Add an error indicator when data is not available in a spreadsheet.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);
```
