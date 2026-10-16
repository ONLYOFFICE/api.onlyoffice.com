# ApiTableCell

表示表格单元格的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新列。 |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新行。 |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | 将文本追加到单元格内容的末尾。 |
| [Clear](./Methods/Clear.md) | boolean | 清除当前单元格的内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回当前表格单元格的背景颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "tableCell" | 返回 ApiTableCell 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回当前单元格的内容。 |
| [GetIndex](./Methods/GetIndex.md) | Number | 返回当前单元格的索引。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格单元格的内部 ID。 |
| [GetNext](./Methods/GetNext.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回下一个单元格（如果存在）。 |
| [GetParentRow](./Methods/GetParentRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | 返回当前单元格的父行。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回当前单元格的父表格。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回上一个单元格（如果存在）。 |
| [GetRowIndex](./Methods/GetRowIndex.md) | number \| null | 返回父行的索引。 |
| [GetText](./Methods/GetText.md) | string | 返回当前表格单元格的内部文本。 |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回涵盖表格单元格完整文本内容的 ApiTextRange。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含当前单元格的列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含当前单元格的行。 |
| [Select](./Methods/Select.md) | 无 | 在演示文稿中选择当前表格单元格。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表格单元格的背景颜色。 |
| [SetCellBorderBottom](./Methods/SetCellBorderBottom.md) | boolean | 设置应在当前表格单元格底部显示的边框。 |
| [SetCellBorderLeft](./Methods/SetCellBorderLeft.md) | boolean | 设置应在当前表格单元格左侧显示的边框。 |
| [SetCellBorderRight](./Methods/SetCellBorderRight.md) | boolean | 设置应在当前表格单元格右侧显示的边框。 |
| [SetCellBorderTop](./Methods/SetCellBorderTop.md) | boolean | 设置应在当前表格单元格顶部显示的边框。 |
| [SetCellMarginBottom](./Methods/SetCellMarginBottom.md) | 无 | 指定表格中特定单元格的单元格内容底部与边框之间应保留的空间量。 |
| [SetCellMarginLeft](./Methods/SetCellMarginLeft.md) | 无 | 指定表格中特定单元格的当前单元格内容左侧与左边框之间应保留的空间量。 |
| [SetCellMarginRight](./Methods/SetCellMarginRight.md) | 无 | 指定表格中特定单元格的当前单元格内容右侧与右边框之间应保留的空间量。 |
| [SetCellMarginTop](./Methods/SetCellMarginTop.md) | 无 | 指定表格中特定单元格的当前单元格内容顶部与顶部边框之间应保留的空间量。 |
| [SetColumnBackgroundColor](./Methods/SetColumnBackgroundColor.md) | boolean | 为包含当前单元格的列中的所有单元格设置背景颜色。 |
| [SetShd](./Methods/SetShd.md) | 无 | 指定应应用于当前表格单元格范围的底纹。 |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | 用指定文本替换当前表格单元格的所有内容，保留第一个段落的格式。 |
| [SetTextDirection](./Methods/SetTextDirection.md) | 无 | 指定当前表格单元格的文本流动方向。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 为当前单元格的内容设置文本属性。 |
| [SetVerticalAlign](./Methods/SetVerticalAlign.md) | 无 | 指定当前表格单元格内文本的垂直对齐方式。 |
