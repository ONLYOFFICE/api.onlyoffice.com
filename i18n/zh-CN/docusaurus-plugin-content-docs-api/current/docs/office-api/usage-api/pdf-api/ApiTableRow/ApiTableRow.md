# ApiTableRow

表示表格行的类。

ApiTableRow 是 [ApiTableRowPr](../ApiTableRowPr/ApiTableRowPr.md) 的子类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新行。 |
| [Clear](./Methods/Clear.md) | boolean | 清除当前行的内容。 |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 按当前行中的位置返回单元格。 |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | 返回当前行中的单元格数量。 |
| [GetClassType](./Methods/GetClassType.md) | "tableRow" | 返回 ApiTableRow 类的类型。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 获取当前表格行的高度。 |
| [GetIndex](./Methods/GetIndex.md) | Number | 返回当前行的索引。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格行的内部 ID。 |
| [GetNext](./Methods/GetNext.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回下一行（如果存在）。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回当前行的父表格。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回上一行（如果存在）。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 合并当前行中的单元格。 |
| [Remove](./Methods/Remove.md) | boolean | 删除当前表格行。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 为当前表格行中的所有单元格设置背景颜色。 |
| [SetHeight](./Methods/SetHeight.md) | boolean | 设置当前表格行的高度。 |
| [SetRowPr](./Methods/SetRowPr.md) | boolean | 为当前表格行设置属性。 |
| [SetTableHeader](./Methods/SetTableHeader.md) | boolean | 指定在显示此表格的每个新页面顶部重复当前表格行。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置当前行的文本属性。 |
