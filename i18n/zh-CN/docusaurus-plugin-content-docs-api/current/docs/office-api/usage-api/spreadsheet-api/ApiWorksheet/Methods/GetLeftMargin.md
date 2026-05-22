# GetLeftMargin

返回工作表的左边距。

## 语法

```javascript
expression.GetLeftMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中活动工作表的左页边距。

```javascript editor-xlsx
// How do I find out the left margin width of a sheet in a spreadsheet?

// Retrieve the left margin value in millimeters and show it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
