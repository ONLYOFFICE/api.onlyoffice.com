# Calculate

在整个活动工作簿中重新计算需要重新计算的单元格（已更改、已添加或易失性单元格），类似于 VBA 中的 Application.Calculate。强制执行原本会推迟到宏结束时才进行的重新计算，以便在同一宏中读取最新的公式结果。

## 语法

```javascript
expression.Calculate();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

重新计算活动工作簿中需要重新计算的公式。

```javascript editor-xlsx
// How do I read an up-to-date formula result inside a macro?

// Force the recalculation and show the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
Api.Calculate();
let value = worksheet.GetRange("B1").GetValue();
worksheet.GetRange("A3").SetValue("Recalculated value of B1: ");
worksheet.GetRange("B3").SetValue(value);
```
