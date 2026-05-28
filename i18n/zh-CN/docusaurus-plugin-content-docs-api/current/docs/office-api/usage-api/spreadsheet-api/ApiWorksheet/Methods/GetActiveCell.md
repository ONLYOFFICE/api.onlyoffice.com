# GetActiveCell

返回表示活动单元格的对象。

## 语法

```javascript
expression.GetActiveCell();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

读取当前选定的单元格并在电子表格中向其写入值。

```javascript editor-xlsx
// How do I find out which cell is active and put content into it in a spreadsheet?

// Target the focused cell and populate it with custom text.

let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");
```
