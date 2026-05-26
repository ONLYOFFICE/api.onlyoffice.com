# ApiTable

ApiTable 是 [ApiTablePr](../ApiTablePr/ApiTablePr.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddCaption](./Methods/AddCaption.md) | boolean | 在当前表格之后（或之前）添加题注段落。 |
| [AddColumn](./Methods/AddColumn.md) | boolean | 向当前表格添加新列。 |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) | 向当前表格添加新列。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前表格的所有内容添加批注。 |
| [AddElement](./Methods/AddElement.md) | boolean | 使用在单元格中的位置添加段落、表格或块级内容控件。 |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 向当前表格添加新行。 |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) | 向当前表格添加新行。 |
| [Clear](./Methods/Clear.md) | boolean | 清除表格中的内容。 |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | 创建当前表格的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前表格。 |
| [GetAllCells](./Methods/GetAllCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[] | 返回表格中所有单元格的集合。 |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 通过位置返回单元格。 |
| [GetClassType](./Methods/GetClassType.md) | "table" | 返回 ApiTable 类的类型。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格的内部 ID。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | 返回包含当前表格的内容控件。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含当前表格的表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含当前表格的表格单元格。 |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | 返回表格在其父元素中的位置。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定表格中所包含文档部分的 Range 对象。 |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 通过在表格中的位置返回表格行。 |
| [GetRowsCount](./Methods/GetRowsCount.md) | number | 返回当前表格中的行数。 |
| [GetTableDescription](./Methods/GetTableDescription.md) | string | 返回表格说明。 |
| [GetTableTitle](./Methods/GetTableTitle.md) | string | 返回表格标题（题注）。 |
| [GetTables](./Methods/GetTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回表示嵌套在指定表格中的所有表格的数组。 |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiTable](../ApiTable/ApiTable.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 用内容控件包装当前表格对象。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 合并单元格数组。如果合并成功，将返回合并后的单元格，否则结果将为 “null”。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含指定单元格的表格列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含指定单元格的表格行。 |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | 用新元素替换当前表格。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 在表格对象的范围内搜索。搜索结果是 ApiRange 对象的集合。 |
| [Select](./Methods/Select.md) | boolean | 选择当前表格。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表格中所有单元格的背景颜色。 |
| [SetCellSpacing](./Methods/SetCellSpacing.md) | boolean | 指定默认表格单元格间距（相邻单元格之间以及单元格与表格边缘之间的间距）。 |
| [SetHAlign](./Methods/SetHAlign.md) | boolean | 设置表格的水平对齐方式。 |
| [SetJc](./Methods/SetJc.md) | boolean | 指定当前表格相对于当前节中文本边距的对齐方式。 |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | 设置表格内边距。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于当前表格范围的底纹。 |
| [SetStyle](./Methods/SetStyle.md) | boolean | 为当前表格设置样式。 |
| [SetStyleColBandSize](./Methods/SetStyleColBandSize.md) | boolean | 指定此表格样式中每个表格列带包含的列数。 |
| [SetStyleRowBandSize](./Methods/SetStyleRowBandSize.md) | boolean | 指定此表格样式中每个表格行带包含的行数。 |
| [SetTableBorderAll](./Methods/SetTableBorderAll.md) | boolean | 指定将在所有表格单元格边框上显示的边框。 |
| [SetTableBorderBottom](./Methods/SetTableBorderBottom.md) | boolean | 设置将在当前表格底部显示的边框。 |
| [SetTableBorderInsideH](./Methods/SetTableBorderInsideH.md) | boolean | 指定将在不在最外边缘的所有水平表格单元格边框上显示的边框 |
| [SetTableBorderInsideV](./Methods/SetTableBorderInsideV.md) | boolean | 指定将在不在最外边缘的所有垂直表格单元格边框上显示的边框 |
| [SetTableBorderLeft](./Methods/SetTableBorderLeft.md) | boolean | 设置将在当前表格左侧显示的边框。 |
| [SetTableBorderRight](./Methods/SetTableBorderRight.md) | boolean | 设置将在当前表格右侧显示的边框。 |
| [SetTableBorderTop](./Methods/SetTableBorderTop.md) | boolean | 设置将在当前表格顶部显示的边框。 |
| [SetTableCellMarginBottom](./Methods/SetTableCellMarginBottom.md) | boolean | 指定将在单元格内容底部边缘与边框之间保留的间距 |
| [SetTableCellMarginLeft](./Methods/SetTableCellMarginLeft.md) | boolean | 指定将在单元格内容左边缘与左 |
| [SetTableCellMarginRight](./Methods/SetTableCellMarginRight.md) | boolean | 指定将在单元格内容右边缘与右 |
| [SetTableCellMarginTop](./Methods/SetTableCellMarginTop.md) | boolean | 指定将在单元格内容顶部边缘与顶部边框之间保留的间距 |
| [SetTableDescription](./Methods/SetTableDescription.md) | boolean | 设置表格说明。 |
| [SetTableInd](./Methods/SetTableInd.md) | boolean | 指定将在文档中当前表格的前边缘之前添加的缩进 |
| [SetTableLayout](./Methods/SetTableLayout.md) | boolean | 指定将用于在文档中布局当前表格内容的算法。 |
| [SetTableLook](./Methods/SetTableLook.md) | boolean | 指定引用的表格样式的条件格式组件（如果存在） |
| [SetTableTitle](./Methods/SetTableTitle.md) | boolean | 设置表格标题（题注）。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 将文本设置应用于表格的全部内容。 |
| [SetVAlign](./Methods/SetVAlign.md) | boolean | 设置表格的垂直对齐方式。 |
| [SetWidth](./Methods/SetWidth.md) | boolean | 为当前表格设置首选宽度。 |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | 设置表格环绕样式。 |
| [Split](./Methods/Split.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 将单元格拆分为指定数量的行和列。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTable 对象转换为 JSON 对象。 |
