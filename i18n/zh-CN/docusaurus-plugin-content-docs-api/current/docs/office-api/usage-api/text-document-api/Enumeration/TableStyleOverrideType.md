# TableStyleOverrideType

此简单类型指定使用所选表格样式时将应用当前条件格式属性的表格部分的可能值。
-**「topLeftCell」** - 指定表格格式应用于左上角单元格。
-**「topRightCell」** - 指定表格格式应用于右上角单元格。
-**「bottomLeftCell」** - 指定表格格式应用于左下角单元格。
-**「bottomRightCell」** - 指定表格格式应用于右下角单元格。
-**「firstRow」** - 指定表格格式应用于第一行。
-**「lastRow」** - 指定表格格式应用于最后一行。
-**「firstColumn」** - 指定表格格式应用于第一列。任何处于*表头*（[ApiTableRowPr#SetTableHeader](../ApiTableRowPr/Methods/SetTableHeader.md)）中的后续行也将使用此条件格式。
-**「lastColumn」** - 指定表格格式应用于最后一列。
-**「bandedColumn」** - 指定表格格式应用于奇数行组。
-**「bandedColumnEven」** - 指定表格格式应用于偶数行组。
-**「bandedRow」** - 指定表格格式应用于奇数列组。
-**「bandedRowEven」** - 指定表格格式应用于偶数列组。
-**「wholeTable」** - 指定条件格式应用于整个表格。

## 类型

枚举

## 值

- "topLeftCell"
- "topRightCell"
- "bottomLeftCell"
- "bottomRightCell"
- "firstRow"
- "lastRow"
- "firstColumn"
- "lastColumn"
- "bandedColumn"
- "bandedColumnEven"
- "bandedRow"
- "bandedRowEven"
- "wholeTable"


## 示例

This example applys the created style (set shadow) to the top left cell of the table.

```javascript editor-docx
// How to change a style of the specific part of the table.

// Get table part style by condition and update it.

tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
```
