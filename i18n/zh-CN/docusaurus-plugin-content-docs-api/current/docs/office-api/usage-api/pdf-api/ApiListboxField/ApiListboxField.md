# ApiListboxField

ApiListboxField 是 [ApiBaseListField](../ApiBaseListField/ApiBaseListField.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddOption](./Methods/AddOption.md) | boolean | 向列表选项添加新选项。 |
| [AddWidget](./Methods/AddWidget.md) | [ApiWidget](../Enumeration/ApiWidget.md) | 添加新控件 - 字段的可视化表示 |
| [Delete](./Methods/Delete.md) | boolean | 从文档中移除字段。 |
| [GetAllWidgets](./Methods/GetAllWidgets.md) | [ApiWidget](../Enumeration/ApiWidget.md)[] | 获取当前字段的控件数组。 |
| [GetClassType](./Methods/GetClassType.md) | "listboxField" | 返回 ApiListboxField 类的类型。 |
| [GetFullName](./Methods/GetFullName.md) | string | 获取字段完整名称。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前字段的内部 ID。 |
| [GetOption](./Methods/GetOption.md) | [ListOption](../Enumeration/ListOption.md) | 从列表选项获取选项。 |
| [GetOptions](./Methods/GetOptions.md) | [ListOption](../Enumeration/ListOption.md)[] | 获取列表中的所有选项。 |
| [GetPartialName](./Methods/GetPartialName.md) | string | 获取字段部分名称。 |
| [GetTooltip](./Methods/GetTooltip.md) | boolean | 获取字段工具提示 |
| [GetValue](./Methods/GetValue.md) | string | 获取字段值 |
| [GetValueIndexes](./Methods/GetValueIndexes.md) | number[] | 获取选定值的索引。 |
| [IsCommitOnSelChange](./Methods/IsCommitOnSelChange.md) | boolean | 检查字段是否可在选择更改时提交。 |
| [IsMultipleSelection](./Methods/IsMultipleSelection.md) | boolean | 检查字段是否支持多选。 |
| [IsReadOnly](./Methods/IsReadOnly.md) | boolean | 检查字段是否为只读 |
| [IsRequired](./Methods/IsRequired.md) | boolean | 检查字段是否为必填 |
| [MoveOption](./Methods/MoveOption.md) | boolean | 将选项移动到列表选项中的指定位置。 |
| [RemoveOption](./Methods/RemoveOption.md) | boolean | 从列表选项中移除选项。 |
| [SetCommitOnSelChange](./Methods/SetCommitOnSelChange.md) | boolean | 设置字段是否在选择更改后立即提交更改。 |
| [SetFullName](./Methods/SetFullName.md) | boolean | 如果可能，设置新的字段名称。 |
| [SetMultipleSelection](./Methods/SetMultipleSelection.md) | boolean | 设置是否可以选择多个值。 |
| [SetPartialName](./Methods/SetPartialName.md) | boolean | 设置新的字段部分名称。 |
| [SetReadOnly](./Methods/SetReadOnly.md) | boolean | 设置字段为只读 |
| [SetRequired](./Methods/SetRequired.md) | boolean | 设置字段为必填 |
| [SetTooltip](./Methods/SetTooltip.md) | boolean | 设置字段工具提示 |
| [SetValue](./Methods/SetValue.md) | boolean | 设置字段值 |
| [SetValueIndexes](./Methods/SetValueIndexes.md) | boolean | 设置选定值的索引。 |
