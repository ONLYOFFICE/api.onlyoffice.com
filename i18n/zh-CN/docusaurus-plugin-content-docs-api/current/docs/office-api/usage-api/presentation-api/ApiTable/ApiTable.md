# ApiTable

表示表格的类。

ApiTable 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Cells | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[][] | 以按 [row][cell] 索引的二维数组形式返回当前表格的所有单元格。 |
| Rows | [ApiTableRow](../ApiTableRow/ApiTableRow.md)[] | 返回当前表格的所有行。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | 无 | 在当前表格末尾添加新列。 |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新列。 |
| [AddElement](./Methods/AddElement.md) | boolean | 按段落在单元格中的位置添加段落。 |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 向当前表格添加新行。 |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 向当前表格添加新行。 |
| [Clear](./Methods/Clear.md) | boolean | 清除表格中的内容。 |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | 创建当前表格的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 通过位置返回单元格。 |
| [GetClassType](./Methods/GetClassType.md) | "table" | 返回 ApiTable 对象的类型。 |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | 返回当前表格中指定列（按索引）的宽度。 |
| [GetColumnsCount](./Methods/GetColumnsCount.md) | number | 返回当前表格的列数。 |
| [GetDescription](./Methods/GetDescription.md) | string \| null | 获取当前绘图对象的描述。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | 从当前图形对象获取填充格式属性。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | 返回当前绘图对象（形状或图像）的超链接。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表格的内部 ID。 |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | 从当前图形对象获取轮廓属性。 |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | 返回绘图对象的纵横比是否已锁定。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 返回绘图的父对象。 |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 返回绘图的父幻灯片版式。 |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 返回绘图的父幻灯片母版。 |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | 返回绘图的父幻灯片。 |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | 返回当前绘图对象的占位符。 |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在幻灯片上的 x 位置。 |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在幻灯片上的 y 位置。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null \| undefined | 按索引返回行。 |
| [GetRowsCount](./Methods/GetRowsCount.md) | number | 返回当前表格中的行数。 |
| [GetSelectedCells](./Methods/GetSelectedCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[] | 返回当前表格中选定的单元格。 |
| [GetSelectedColumnsCells](./Methods/GetSelectedColumnsCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[] | 返回包含当前所选单元格的列中的所有单元格。此方法会确定哪些列包含所选单元格，然后返回这些列中的所有单元格，而不仅仅是所选单元格本身。 |
| [GetSelectedRows](./Methods/GetSelectedRows.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md)[] | 返回当前表格中包含当前所选单元格的行。 |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | 返回当前图形对象的阴影。 |
| [GetTableDescription](./Methods/GetTableDescription.md) | string | 返回表格说明。 |
| [GetTableLook](./Methods/GetTableLook.md) | [TableLook](../Enumeration/TableLook.md) | 获取表格外观属性 |
| [GetTableTitle](./Methods/GetTableTitle.md) | string | 返回表格标题。 |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回涵盖形状完整文本内容的 ApiTextRange。如果形状还没有文本主体，则创建一个。 |
| [GetTitle](./Methods/GetTitle.md) | string \| null | 获取当前绘图对象的标题。 |
| [GetVisitor](./Methods/GetVisitor.md) | [ApiPresentationVisitor](../ApiPresentationVisitor/ApiPresentationVisitor.md) | 返回用于遍历当前图形对象文本（包括组合中嵌套的图形对象）的访问器对象。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | 检查绘图对象是否具有关联的文本主体。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null \| undefined | 合并单元格数组。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含指定单元格的表格列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含指定单元格的表格行。删除最后一行时，整个表格将从幻灯片中删除 |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | 用幻灯片上的绘图替换占位符。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SelectRange](./Methods/SelectRange.md) | boolean | 选择当前表格中的单元格范围。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 为当前表格中的所有单元格设置背景颜色。 |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | 设置当前表格中指定列的宽度。 |
| [SetDescription](./Methods/SetDescription.md) | boolean | 设置当前绘图对象的描述。 |
| [SetFill](./Methods/SetFill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetHeight](./Methods/SetHeight.md) | boolean | 设置当前表格的总高度，并将其平均分配给各表格行。该值作为每行的最小高度应用，因此如果行内容需要更多空间，行可以更高。 |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | 为当前绘图对象（形状或图像）设置超链接。 |
| [SetLine](./Methods/SetLine.md) | boolean | 为当前图形对象设置轮廓属性。 |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | 设置是否锁定绘图对象的纵横比。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | 将指定的占位符设置到当前绘图对象。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在幻灯片上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在幻灯片上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 设置绘图在幻灯片上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetShadow](./Methods/SetShadow.md) | boolean | 为当前图形对象设置阴影。 |
| [SetShd](./Methods/SetShd.md) | 无 | 指定应用于当前表格范围的底纹。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置表格大小。 |
| [SetStyle](./Methods/SetStyle.md) | boolean | 设置当前表格的样式。 |
| [SetTableDescription](./Methods/SetTableDescription.md) | boolean | 设置表格说明。 |
| [SetTableLook](./Methods/SetTableLook.md) | 无 | 指定引用的表格样式（如果存在）的条件格式组件，这些组件将应用于具有当前表格级属性例外的表格行集。表格样式可以指定最多六种不同的可选条件格式[示例：第一列的不同格式]，然后可以应用或从父表格中的各个表格行中省略。 |
| [SetTableTitle](./Methods/SetTableTitle.md) | boolean | 设置表格标题。 |
| [SetTitle](./Methods/SetTitle.md) | boolean | 设置当前绘图对象的标题。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTable 对象转换为 JSON 对象。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
