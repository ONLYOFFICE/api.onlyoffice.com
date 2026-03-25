# ApiTableRow

表示 ApiTableRow 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新行。 |
| [Clear](./Methods/Clear.md) | boolean | 清除当前行的内容。 |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 通过位置返回单元格。 |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | 返回当前行中的单元格数量。 |
| [GetClassType](./Methods/GetClassType.md) | "tableRow" | 返回 ApiTableRow 类的类型。 |
| [GetIndex](./Methods/GetIndex.md) | Number | 返回当前行的索引。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格行的内部 ID。 |
| [GetNext](./Methods/GetNext.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回下一行（如果存在）。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回当前行的父表格。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回上一行（如果存在）。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 合并当前行中的单元格。 |
| [Remove](./Methods/Remove.md) | boolean | 删除当前表格行。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 在表格行对象的范围内搜索。搜索结果是 ApiRange 对象的集合。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 为当前表格行中的所有单元格设置背景颜色。 |
| [SetHeight](./Methods/SetHeight.md) | boolean | 设置当前表格中当前表格行的高度。 |
| [SetTableHeader](./Methods/SetTableHeader.md) | boolean | 指定当前表格行将在显示此表格的每个新页面顶部重复显示。这使该表格行在每个页面上具有「标题」行的行为。此元素可应用于表格结构顶部的任意数量的行，以生成多行表格标题。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置当前行的文本属性。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTableRowPr 对象转换为 JSON 对象。 |
