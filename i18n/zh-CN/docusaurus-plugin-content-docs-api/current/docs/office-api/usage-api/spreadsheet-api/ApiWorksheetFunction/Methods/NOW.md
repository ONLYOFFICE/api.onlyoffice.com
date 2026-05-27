# NOW

返回 *MM/dd/yy hh:mm* 格式的当前日期和时间。

## 语法

```javascript
expression.NOW();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取电子表格中的当前日期和时间。

```javascript editor-xlsx
// How do I insert today's date and the current time in a spreadsheet?

// Display the current moment as a date and time value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);
```
