# GetCellsCount

返回当前范围中的单元格数量。

## 语法

```javascript
expression.GetCellsCount();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取指定范围中的单元格数量。

```javascript editor-xlsx
// How to get a count of cells in the range.

// Get a count of cells in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D10");
range.SetValue("I was selected");
worksheet.GetRange("A11").SetValue("Cells count in the selected range should be 40: " + range.GetCellsCount());

```
