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

此示例展示如何获取表示活动单元格的对象。

```javascript editor-xlsx
// How to get selected active cell.

// Get an active cell and insert data to it.

let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");
```
