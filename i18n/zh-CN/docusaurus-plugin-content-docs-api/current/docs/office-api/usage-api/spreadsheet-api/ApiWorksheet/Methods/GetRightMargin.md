# GetRightMargin

返回工作表的右边距。

## 语法

```javascript
expression.GetRightMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检查电子表格中页面布局的右边距大小。

```javascript editor-xlsx
// Measure the empty space on the right edge of a printed page in a spreadsheet?

// Show margin values in cells to understand your document boundaries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
