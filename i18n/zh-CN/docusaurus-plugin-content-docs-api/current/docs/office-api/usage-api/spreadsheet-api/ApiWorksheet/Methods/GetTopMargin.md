# GetTopMargin

返回工作表的顶边距。

## 语法

```javascript
expression.GetTopMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检查电子表格中页面设置的上边距距离。

```javascript editor-xlsx
// Measure the blank space above your printed content in a spreadsheet?

// Show margin dimensions in cells for layout verification in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
