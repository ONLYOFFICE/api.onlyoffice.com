# ApiTablePr

表示 ApiTablePr 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "tablePr" | 返回 ApiTablePr 类的类型。 |
| [GetTableDescription](./Methods/GetTableDescription.md) | string | 返回表格说明。 |
| [GetTableTitle](./Methods/GetTableTitle.md) | string | 返回表格标题（题注）。 |
| [SetCellSpacing](./Methods/SetCellSpacing.md) | boolean | 指定默认表格单元格间距（相邻单元格之间以及单元格与表格边缘之间的间距）。 |
| [SetJc](./Methods/SetJc.md) | boolean | 指定当前表格相对于当前节中文本边距的对齐方式。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于当前表格范围的底纹。 |
| [SetStyleColBandSize](./Methods/SetStyleColBandSize.md) | boolean | 指定此表格样式中每个表格列带包含的列数。 |
| [SetStyleRowBandSize](./Methods/SetStyleRowBandSize.md) | boolean | 指定此表格样式中每个表格行带包含的行数。 |
| [SetTableBorderAll](./Methods/SetTableBorderAll.md) | boolean | 指定将在所有表格单元格边框上显示的边框。 |
| [SetTableBorderBottom](./Methods/SetTableBorderBottom.md) | boolean | 设置将在当前表格底部显示的边框。 |
| [SetTableBorderInsideH](./Methods/SetTableBorderInsideH.md) | boolean | 指定将在所有不在父表格最外边缘的水平表格单元格边框上显示的边框（所有非顶部或底部边框的水平边框）。 |
| [SetTableBorderInsideV](./Methods/SetTableBorderInsideV.md) | boolean | 指定将在所有不在父表格最外边缘的垂直表格单元格边框上显示的边框（所有非最左或最右边框的垂直边框）。 |
| [SetTableBorderLeft](./Methods/SetTableBorderLeft.md) | boolean | 设置将在当前表格左侧显示的边框。 |
| [SetTableBorderRight](./Methods/SetTableBorderRight.md) | boolean | 设置将在当前表格右侧显示的边框。 |
| [SetTableBorderTop](./Methods/SetTableBorderTop.md) | boolean | 设置将在当前表格顶部显示的边框。 |
| [SetTableCellMarginBottom](./Methods/SetTableCellMarginBottom.md) | boolean | 指定在父表格（或表格行）中所有表格单元格的单元格内容底部范围与边框之间保留的空间量。 |
| [SetTableCellMarginLeft](./Methods/SetTableCellMarginLeft.md) | boolean | 指定在父表格（或表格行）中所有表格单元格的单元格内容左侧范围与左边框之间保留的空间量。 |
| [SetTableCellMarginRight](./Methods/SetTableCellMarginRight.md) | boolean | 指定在父表格（或表格行）中所有表格单元格的单元格内容右侧范围与右边框之间保留的空间量。 |
| [SetTableCellMarginTop](./Methods/SetTableCellMarginTop.md) | boolean | 指定在父表格（或表格行）中所有表格单元格的单元格内容顶部范围与顶边框之间保留的空间量。 |
| [SetTableDescription](./Methods/SetTableDescription.md) | boolean | 设置表格说明。 |
| [SetTableInd](./Methods/SetTableInd.md) | boolean | 指定将在文档中当前表格的前缘之前添加的缩进（从左到右表格中的左边缘，以及从右到左表格中的右边缘）。 |
| [SetTableLayout](./Methods/SetTableLayout.md) | boolean | 指定将用于在文档中布局当前表格内容的算法。 |
| [SetTableTitle](./Methods/SetTableTitle.md) | boolean | 设置表格标题（题注）。 |
| [SetWidth](./Methods/SetWidth.md) | boolean | 设置当前表格的首选宽度。💡 表格默认使用 [ApiTable#SetWidth](../ApiTable/Methods/SetWidth.md) 方法属性创建，它始终覆盖 [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md) 方法属性。因此尝试应用 [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md) 是无效的。我们建议您改用 [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md) 方法。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTablePr 对象转换为 JSON 对象。 |
