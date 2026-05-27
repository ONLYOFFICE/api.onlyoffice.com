# ApiShape

ApiShape 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | 创建指定形状的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetClassType](./Methods/GetClassType.md) | "shape" | 返回 ApiShape 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回可以插入段落或文本块的形状内部内容。 |
| [GetDocContent](./Methods/GetDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 在 6.2 中已弃用。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | 从当前形状获取填充属性。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | 返回当前形状的几何对象。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | 返回当前绘图对象（形状或图像）的超链接。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前绘图对象的内部 ID。 |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | 从当前形状获取轮廓属性。 |
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
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | 用幻灯片上的绘图替换占位符。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetFill](./Methods/SetFill.md) | boolean | 设置当前形状的填充属性。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | 为当前形状设置自定义几何形状。 |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | 为当前绘图对象（形状或图像）设置超链接。 |
| [SetLine](./Methods/SetLine.md) | boolean | 设置当前形状的轮廓属性。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | 设置当前形状的文本内边距。 |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | 将指定的占位符设置到当前绘图对象。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在幻灯片上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在幻灯片上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 设置绘图在幻灯片上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | 无 | 设置可以插入段落或文本块的形状内容的垂直对齐方式。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiDrawing 对象转换为 JSON 对象。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
