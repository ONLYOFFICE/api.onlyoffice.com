# ApiTable

ApiTable 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | 无 | 在当前表格末尾添加新列。 |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 向当前表格添加新行。 |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 创建指定绘图对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetClassType](./Methods/GetClassType.md) | "table" | 返回 ApiTable 对象的类型。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | 返回当前绘图对象（形状或图像）的超链接。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前绘图对象的内部 ID。 |
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
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 按索引返回行。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 合并单元格数组。如果合并成功，将返回合并后的单元格，否则返回 "null"。**警告**：任何行中的单元格数量和当前表格中的行数可能会更改。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含指定单元格的表格列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含指定单元格的表格行。 |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | 用幻灯片上的绘图替换占位符。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | 为当前绘图对象（形状或图像）设置超链接。传递 null 以删除超链接。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | 将指定的占位符设置到当前绘图对象。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在幻灯片上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在幻灯片上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 设置绘图在幻灯片上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetShd](./Methods/SetShd.md) | 无 | 指定应用于当前表格范围的底纹。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置表格大小。 |
| [SetTableLook](./Methods/SetTableLook.md) | 无 | 指定引用的表格样式（如果存在）的条件格式组件，这些组件将应用于具有当前表格级属性例外的表格行集。表格样式可以指定最多六种不同的可选条件格式[示例：第一列的不同格式]，然后可以应用或从父表格中的各个表格行中省略。默认设置是应用行和列条带格式，但不应用第一行、最后一行、第一列或最后一列格式。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTable 对象转换为 JSON 对象。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
