# ApiCheckBoxForm

表示 ApiCheckBoxForm 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | 清除当前表单。 |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | 复制当前表单（如果存在形状，则连同形状一起复制）。 |
| [Delete](./Methods/Delete.md) | boolean | 删除表单及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前表单的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前表单的边框颜色。 |
| [GetChoiceName](./Methods/GetChoiceName.md) | string | 返回当前单选按钮的选项名称。 |
| [GetClassType](./Methods/GetClassType.md) | "checkBoxForm" | 返回 ApiCheckBoxForm 类的类型。 |
| [GetFormKey](./Methods/GetFormKey.md) | string | 返回当前表单的键。 |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | 返回当前表单的类型。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表单的内部 ID。 |
| [GetLabel](./Methods/GetLabel.md) | string | 返回当前复选框的标签。 |
| [GetLock](./Methods/GetLock.md) | boolean | 返回当前表单的锁定状态。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前表单的占位符文本。 |
| [GetRadioGroup](./Methods/GetRadioGroup.md) | string | 如果当前复选框是单选按钮，则返回单选按钮组的键。 |
| [GetRole](./Methods/GetRole.md) | string | 返回当前表单的角色。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前表单的标签属性。 |
| [GetText](./Methods/GetText.md) | string | 返回当前表单中的文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回当前表单的文本属性。*如果该表单类型支持则使用* |
| [GetTipText](./Methods/GetTipText.md) | string | 返回当前表单的提示文本。 |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../ApiShape/ApiShape.md) | 返回放置表单的形状，用于控制固定大小表单框架的位置和大小。对于内联表单将返回 null 值。 |
| [IsChecked](./Methods/IsChecked.md) | boolean | 返回当前复选框的状态（选中或未选中）。 |
| [IsFixed](./Methods/IsFixed.md) | boolean | 检查当前表单是否为固定大小。 |
| [IsRadioButton](./Methods/IsRadioButton.md) | boolean | 检查当前复选框是否为单选按钮。 |
| [IsRequired](./Methods/IsRequired.md) | boolean | 检查当前表单是否为必填项。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前表单之前/之后。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表单的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前表单的边框颜色。 |
| [SetChecked](./Methods/SetChecked.md) | boolean | 选中当前复选框。 |
| [SetChoiceName](./Methods/SetChoiceName.md) | boolean | 设置当前单选按钮的选项名称。 |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | 为当前表单设置键。 |
| [SetLabel](./Methods/SetLabel.md) | boolean | 设置当前复选框的标签。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前表单的锁定状态。 |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 设置当前表单的占位符文本。*不能设置为复选框或单选按钮。* |
| [SetRadioGroup](./Methods/SetRadioGroup.md) | boolean | 为当前单选按钮设置单选按钮组的键。 |
| [SetRequired](./Methods/SetRequired.md) | boolean | 指定当前表单是否为必填项。 |
| [SetRole](./Methods/SetRole.md) | boolean | 为当前表单设置角色。 |
| [SetTag](./Methods/SetTag.md) | boolean | 为当前表单设置标签属性。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置当前表单的文本属性。*如果该表单类型支持则使用* |
| [SetTipText](./Methods/SetTipText.md) | boolean | 设置当前表单的提示文本。 |
| [ToFixed](./Methods/ToFixed.md) | boolean | 将当前表单转换为固定大小的表单。 |
| [ToInline](./Methods/ToInline.md) | boolean | 将当前表单转换为内联表单。*图片表单无法转换为内联表单，它始终是固定大小的对象。* |
