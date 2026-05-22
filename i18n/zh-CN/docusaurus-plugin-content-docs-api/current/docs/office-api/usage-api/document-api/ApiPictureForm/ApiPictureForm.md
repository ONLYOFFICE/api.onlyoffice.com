# ApiPictureForm

ApiPictureForm 是 [ApiFormBase](../ApiFormBase/ApiFormBase.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | 清除当前表单。 |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | 复制当前表单（如果存在形状，则连同形状一起复制）。 |
| [Delete](./Methods/Delete.md) | boolean | 删除表单及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前表单的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前表单的边框颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "pictureForm" | 返回 ApiPictureForm 类的类型。 |
| [GetFormKey](./Methods/GetFormKey.md) | string | 返回当前表单的键。 |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | 返回当前表单的类型。 |
| [GetImage](./Methods/GetImage.md) | [Base64Img](../Enumeration/Base64Img.md) | 从当前图片表单返回 base64 格式的图像。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前表单的内部 ID。 |
| [GetLock](./Methods/GetLock.md) | boolean | 返回当前表单的锁定状态。 |
| [GetPicturePosition](./Methods/GetPicturePosition.md) | [percentage](../Enumeration/percentage.md)[] | 返回当前表单中图片的位置。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前表单的占位符文本。 |
| [GetRole](./Methods/GetRole.md) | string | 返回当前表单的角色。 |
| [GetScaleFlag](./Methods/GetScaleFlag.md) | [ScaleFlag](../Enumeration/ScaleFlag.md) | 返回图片表单的当前缩放条件。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前表单的标签属性。 |
| [GetText](./Methods/GetText.md) | string | 返回当前表单中的文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回当前表单的文本属性。 |
| [GetTipText](./Methods/GetTipText.md) | string | 返回当前表单的提示文本。 |
| [GetValue](./Methods/GetValue.md) | string | 将图片表单的当前图像作为 base64 编码字符串返回。 |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../ApiShape/ApiShape.md) | 返回放置表单的形状，用于控制固定大小表单框架的位置和大小。 |
| [IsFilled](./Methods/IsFilled.md) | boolean | 检查当前表单是否已填写。 |
| [IsFixed](./Methods/IsFixed.md) | boolean | 检查当前表单是否为固定大小。 |
| [IsLockAspectRatio](./Methods/IsLockAspectRatio.md) | boolean | 检查当前图片表单的宽高比是否已锁定。 |
| [IsRequired](./Methods/IsRequired.md) | boolean | 检查当前表单是否为必填项。 |
| [IsRespectBorders](./Methods/IsRespectBorders.md) | boolean | 检查是否遵守表单边框宽度。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前表单之前/之后。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前表单的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前表单的边框颜色。 |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | 为当前表单设置键。 |
| [SetImage](./Methods/SetImage.md) | boolean | 为当前图片表单设置图像。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前表单的锁定状态。 |
| [SetLockAspectRatio](./Methods/SetLockAspectRatio.md) | boolean | 锁定当前图片表单的宽高比。 |
| [SetPicturePosition](./Methods/SetPicturePosition.md) | boolean | 设置当前表单内的图片位置： |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 为当前表单设置占位符文本。 |
| [SetRequired](./Methods/SetRequired.md) | boolean | 指定当前表单是否为必填项。 |
| [SetRespectBorders](./Methods/SetRespectBorders.md) | boolean | 缩放图像时遵守表单边框宽度。 |
| [SetRole](./Methods/SetRole.md) | boolean | 为当前表单设置角色。 |
| [SetScaleFlag](./Methods/SetScaleFlag.md) | boolean | 设置当前图片表单的缩放条件。 |
| [SetTag](./Methods/SetTag.md) | boolean | 为当前表单设置标签属性。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 为当前表单设置文本属性。 |
| [SetTipText](./Methods/SetTipText.md) | boolean | 设置当前表单的提示文本。 |
| [SetValue](./Methods/SetValue.md) | boolean | 为图片表单设置图像。 |
| [ToFixed](./Methods/ToFixed.md) | boolean | 将当前表单转换为固定大小的表单。 |
| [ToInline](./Methods/ToInline.md) | boolean | 将当前表单转换为内联表单。 |
