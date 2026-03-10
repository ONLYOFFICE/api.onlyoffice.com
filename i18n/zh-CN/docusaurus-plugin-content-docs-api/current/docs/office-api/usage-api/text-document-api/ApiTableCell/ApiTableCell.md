# ApiTableCell

表示 ApiTableCell 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新列。 |
| [AddElement](./Methods/AddElement.md) | boolean | 使用在单元格中的位置添加段落、表格或块级内容控件。 |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新行。 |
| [Clear](./Methods/Clear.md) | boolean | 清除当前单元格的内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前表格单元格的背景颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "tableCell" | 返回 ApiTableCell 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回当前单元格的内容。 |
| [GetIndex](./Methods/GetIndex.md) | Number | 返回当前单元格的索引。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格单元格的内部 ID。 |
| [GetNext](./Methods/GetNext.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回下一个单元格（如果存在）。 |
| [GetParentRow](./Methods/GetParentRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回当前单元格的父行。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回当前单元格的父表格。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回上一个单元格（如果存在）。 |
| [GetRowIndex](./Methods/GetRowIndex.md) | number | 返回父行的索引。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含当前单元格的列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含当前单元格的行。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 在表格单元格对象的范围内搜索。搜索结果是 ApiRange 对象的集合。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表格单元格的背景颜色。 |
| [SetCellBorderBottom](./Methods/SetCellBorderBottom.md) | boolean | 设置将显示在当前表格单元格底部的边框。 |
| [SetCellBorderLeft](./Methods/SetCellBorderLeft.md) | boolean | 设置将显示在当前表格单元格左侧的边框。 |
| [SetCellBorderRight](./Methods/SetCellBorderRight.md) | boolean | 设置将显示在当前表格单元格右侧的边框。 |
| [SetCellBorderTop](./Methods/SetCellBorderTop.md) | boolean | 设置将显示在当前表格单元格顶部的边框。 |
| [SetCellMarginBottom](./Methods/SetCellMarginBottom.md) | boolean | 指定表格中特定表格单元格的内容底边与单元格边框之间的间距。 |
| [SetCellMarginLeft](./Methods/SetCellMarginLeft.md) | boolean | 指定表格中特定表格单元格的内容左边与单元格边框之间的间距。 |
| [SetCellMarginRight](./Methods/SetCellMarginRight.md) | boolean | 指定表格中特定表格单元格的内容右边与单元格边框之间的间距。 |
| [SetCellMarginTop](./Methods/SetCellMarginTop.md) | boolean | 指定表格中特定表格单元格的内容上边与单元格边框之间的间距。 |
| [SetCellPr](./Methods/SetCellPr.md) | boolean | 设置当前单元格的单元格属性。 |
| [SetColumnBackgroundColor](./Methods/SetColumnBackgroundColor.md) | boolean | 为包含当前单元格的列中的所有单元格设置背景颜色。 |
| [SetNoWrap](./Methods/SetNoWrap.md) | boolean | 指定在文档中显示父表格时当前表格单元格的布局方式。此设置仅在表格的 [ApiTablePr#SetTableLayout](../ApiTablePr/Methods/SetTableLayout.md) 表格布局设置为使用 &lt;code&gt;"autofit"&lt;/code&gt; 算法时影响单元格的行为。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于表格单元格内容的底纹。 |
| [SetTextDirection](./Methods/SetTextDirection.md) | boolean | 指定此表格单元格的文本流方向。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 将文本设置应用于当前单元格的整个内容。 |
| [SetVerticalAlign](./Methods/SetVerticalAlign.md) | boolean | 指定当前表格单元格中文本内容的垂直对齐方式。 |
| [SetWidth](./Methods/SetWidth.md) | boolean | 设置当前表格单元格的首选宽度。 |
| [Split](./Methods/Split.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 将单元格拆分为指定数量的行和列。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTableCellPr 对象转换为 JSON 对象。 |
