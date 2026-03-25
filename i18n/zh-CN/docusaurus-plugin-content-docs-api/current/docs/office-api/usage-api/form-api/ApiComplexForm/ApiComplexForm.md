# ApiComplexForm

表示 ApiComplexForm 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | boolean | 将给定表单的文本内容追加到当前复合表单的末尾。 |
| [Clear](./Methods/Clear.md) | boolean | 清除当前表单。 |
| [ClearContent](./Methods/ClearContent.md) | boolean | 清除当前复合表单的所有内容，将其重置为占位符状态。 |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | 复制当前表单（如果存在形状，则连同形状一起复制）。 |
| [Delete](./Methods/Delete.md) | boolean | 删除表单及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../../text-document-api/ApiColor/ApiColor.md) | 返回当前表单的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../../text-document-api/ApiColor/ApiColor.md) | 返回当前表单的边框颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "form" | 返回 ApiComplexForm 类的类型。 |
| [GetFormKey](./Methods/GetFormKey.md) | string | 返回当前表单的键。 |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | 返回当前表单的类型。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表单的内部 ID。 |
| [GetLock](./Methods/GetLock.md) | boolean | 返回当前表单的锁定状态。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前表单的占位符文本。 |
| [GetRole](./Methods/GetRole.md) | string | 返回当前表单的角色。 |
| [GetSubForms](./Methods/GetSubForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回子表单的有序列表。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前表单的标签属性。 |
| [GetText](./Methods/GetText.md) | string | 返回当前表单中的文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../text-document-api/ApiTextPr/ApiTextPr.md) | 返回当前表单的文本属性。*如果该表单类型支持则使用* |
| [GetTipText](./Methods/GetTipText.md) | string | 返回当前表单的提示文本。 |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../text-document-api/ApiShape/ApiShape.md) | 返回放置表单的形状，用于控制固定大小表单框架的位置和大小。对于内联表单将返回 null 值。 |
| [IsFixed](./Methods/IsFixed.md) | boolean | 检查当前表单是否为固定大小。 |
| [IsRequired](./Methods/IsRequired.md) | boolean | 检查当前表单是否为必填项。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前表单之前/之后。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表单的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前表单的边框颜色。 |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | 为当前表单设置键。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前表单的锁定状态。 |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 设置当前表单的占位符文本。*不能设置为复选框或单选按钮。* |
| [SetRequired](./Methods/SetRequired.md) | boolean | 指定当前表单是否为必填项。 |
| [SetRole](./Methods/SetRole.md) | boolean | 为当前表单设置角色。 |
| [SetTag](./Methods/SetTag.md) | boolean | 为当前表单设置标签属性。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置当前表单的文本属性。*如果该表单类型支持则使用* |
| [SetTipText](./Methods/SetTipText.md) | boolean | 设置当前表单的提示文本。 |
| [ToFixed](./Methods/ToFixed.md) | boolean | 将当前表单转换为固定大小的表单。 |
| [ToInline](./Methods/ToInline.md) | boolean | 将当前表单转换为内联表单。*图片表单无法转换为内联表单，它始终是固定大小的对象。* |
