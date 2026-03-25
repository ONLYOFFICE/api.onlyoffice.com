# ApiTextForm

表示 ApiTextForm 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | 清除当前表单。 |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | 复制当前表单（如果存在形状，则连同形状一起复制）。 |
| [Delete](./Methods/Delete.md) | boolean | 删除表单及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../../text-document-api/ApiColor/ApiColor.md) | 返回当前表单的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../../text-document-api/ApiColor/ApiColor.md) | 返回当前表单的边框颜色。 |
| [GetCharactersLimit](./Methods/GetCharactersLimit.md) | number | 返回文本字段的字符数限制。 |
| [GetClassType](./Methods/GetClassType.md) | "textForm" | 返回 ApiTextForm 类的类型。 |
| [GetFormKey](./Methods/GetFormKey.md) | string | 返回当前表单的键。 |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | 返回当前表单的类型。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表单的内部 ID。 |
| [GetLock](./Methods/GetLock.md) | boolean | 返回当前表单的锁定状态。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前表单的占位符文本。 |
| [GetRole](./Methods/GetRole.md) | string | 返回当前表单的角色。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前表单的标签属性。 |
| [GetText](./Methods/GetText.md) | string | 返回当前表单中的文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../text-document-api/ApiTextPr/ApiTextPr.md) | 返回当前表单的文本属性。*如果该表单类型支持则使用* |
| [GetTipText](./Methods/GetTipText.md) | string | 返回当前表单的提示文本。 |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../text-document-api/ApiShape/ApiShape.md) | 返回放置表单的形状，用于控制固定大小表单框架的位置和大小。对于内联表单将返回 null 值。 |
| [IsAutoFit](./Methods/IsAutoFit.md) | boolean | 检查文本字段内容是否自动适应，即字体大小是否根据固定大小表单的尺寸进行调整。 |
| [IsComb](./Methods/IsComb.md) | boolean | 检查文本字段是否为具有相同单元格宽度的字符梳。 |
| [IsFixed](./Methods/IsFixed.md) | boolean | 检查当前表单是否为固定大小。 |
| [IsMultiline](./Methods/IsMultiline.md) | boolean | 检查当前文本字段是否为多行。 |
| [IsRequired](./Methods/IsRequired.md) | boolean | 检查当前表单是否为必填项。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前表单之前/之后。 |
| [SetAutoFit](./Methods/SetAutoFit.md) | boolean | 指定文本字段内容是否应自动适应，即字体大小是否根据固定大小表单的尺寸进行调整。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表单的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前表单的边框颜色。 |
| [SetCellWidth](./Methods/SetCellWidth.md) | boolean | 为已应用的字符梳设置单元格宽度。 |
| [SetCharactersLimit](./Methods/SetCharactersLimit.md) | boolean | 设置文本字段的字符数限制。 |
| [SetComb](./Methods/SetComb.md) | boolean | 指定文本字段是否应为具有相同单元格宽度的字符梳。最大字符数必须设置为正值。 |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | 为当前表单设置键。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前表单的锁定状态。 |
| [SetMultiline](./Methods/SetMultiline.md) | boolean | 指定当前文本字段是否应为多行。 |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 设置当前表单的占位符文本。*不能设置为复选框或单选按钮。* |
| [SetRequired](./Methods/SetRequired.md) | boolean | 指定当前表单是否为必填项。 |
| [SetRole](./Methods/SetRole.md) | boolean | 为当前表单设置角色。 |
| [SetTag](./Methods/SetTag.md) | boolean | 为当前表单设置标签属性。 |
| [SetText](./Methods/SetText.md) | boolean | 设置当前文本字段的文本。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置当前表单的文本属性。*如果该表单类型支持则使用* |
| [SetTipText](./Methods/SetTipText.md) | boolean | 设置当前表单的提示文本。 |
| [ToFixed](./Methods/ToFixed.md) | boolean | 将当前表单转换为固定大小的表单。 |
| [ToInline](./Methods/ToInline.md) | boolean | 将当前表单转换为内联表单。*图片表单无法转换为内联表单，它始终是固定大小的对象。* |
