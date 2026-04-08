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

此示例演示如何以 MM/dd/yy hh:mm 格式返回当前日期和时间。

```javascript editor-xlsx
// How to get a current date in the specified format.

// Use a function to get a current date and time in the specified format.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);

```
