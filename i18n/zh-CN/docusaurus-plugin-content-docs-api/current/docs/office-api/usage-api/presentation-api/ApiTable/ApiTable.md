# ApiTable

表示 ApiTable 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | 无 | 在当前表格末尾添加新列。 |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 向当前表格添加新行。 |
| [GetClassType](./Methods/GetClassType.md) | "table" | 返回 ApiTable 对象的类型。 |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | 按索引返回行。 |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | 合并单元格数组。如果合并成功，将返回合并后的单元格，否则返回 "null"。**警告**：任何行中的单元格数量和当前表格中的行数可能会更改。 |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | 删除包含指定单元格的表格列。 |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | 删除包含指定单元格的表格行。 |
| [SetShd](./Methods/SetShd.md) | 无 | 指定应用于当前表格范围的底纹。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置表格大小。 |
| [SetTableLook](./Methods/SetTableLook.md) | 无 | 指定引用的表格样式（如果存在）的条件格式组件，这些组件将应用于具有当前表格级属性例外的表格行集。表格样式可以指定最多六种不同的可选条件格式[示例：第一列的不同格式]，然后可以应用或从父表格中的各个表格行中省略。默认设置是应用行和列条带格式，但不应用第一行、最后一行、第一列或最后一列格式。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiTable 对象转换为 JSON 对象。 |
