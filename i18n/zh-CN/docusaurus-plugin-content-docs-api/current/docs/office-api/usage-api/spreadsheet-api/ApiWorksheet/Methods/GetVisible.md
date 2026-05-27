# GetVisible

返回工作表的可见性状态。

## 语法

```javascript
expression.GetVisible();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中的工作表是否隐藏或可见。

```javascript editor-xlsx
// Determine the display status of a worksheet for visibility control in a spreadsheet?

// Display the visibility state in a cell to confirm sheet access in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);
```
