# Redraw

重绘编辑器屏幕，使宏已做出的更改立即可见，而无需等待宏执行完毕。仅可在异步代码中观察到效果。仅重绘而不重新计算：如果公式结果必须是最新的，请先调用 [ApiWorkbook#Calculate](../../ApiWorkbook/Methods/Calculate.md)。

## 语法

```javascript
expression.Redraw();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

重绘屏幕，使目前为止所做的更改可见。

```javascript editor-xlsx
// How do I show intermediate results while a macro is still running?

// Write the data, force the recalculation and repaint the canvas.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
workbook.Calculate();
workbook.Redraw();
worksheet.GetRange("A3").SetValue("The value of B1 is already on the screen: ");
worksheet.GetRange("B3").SetValue(worksheet.GetRange("B1").GetValue());
```
