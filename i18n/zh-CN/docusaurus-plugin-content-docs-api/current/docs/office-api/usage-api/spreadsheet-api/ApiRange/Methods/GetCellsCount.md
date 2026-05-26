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

计算电子表格中选定范围内的单元格总数。

```javascript editor-xlsx
// How do I find out how many cells are in a range in a spreadsheet?

// Confirm the expected cell count by writing the total next to the filled range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D10");
range.SetValue("I was selected");
worksheet.GetRange("A11").SetValue("Cells count in the selected range should be 40: " + range.GetCellsCount());
```
