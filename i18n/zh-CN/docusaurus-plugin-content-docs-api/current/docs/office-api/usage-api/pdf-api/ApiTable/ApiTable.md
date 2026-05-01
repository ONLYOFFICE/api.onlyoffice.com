# ApiTable

ApiTable 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | boolean | 在当前表格末尾添加新列。 |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 向当前表格添加新行。 |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 创建指定绘图对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [GetClassType](./Methods/GetClassType.md) | "table" | 返回 ApiTable 对象的类型。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 返回 ApiDrawing 类的类型。 |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 x 位置。 |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 y 位置。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 按索引返回行。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 合并单元格数组。如果合并成功，将返回合并后的单元格，否则返回 "null"。**警告**：任何行中的单元格数量和当前表格中的行数可能会更改。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含指定单元格的表格列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含指定单元格的表格行。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在页面上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在页面上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | boolean | 设置绘图在页面上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于当前表格范围的底纹。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetTableLook](./Methods/SetTableLook.md) | boolean | 指定引用的表格样式（如果存在）的条件格式组件，这些组件将应用于具有当前表格级属性例外的表格行集。表格样式可以指定最多六种不同的可选条件格式[示例：第一列的不同格式]，然后可以应用或从父表格中的各个表格行中省略。默认设置是应用行和列条带格式，但不应用第一行、最后一行、第一列或最后一列格式。 |
