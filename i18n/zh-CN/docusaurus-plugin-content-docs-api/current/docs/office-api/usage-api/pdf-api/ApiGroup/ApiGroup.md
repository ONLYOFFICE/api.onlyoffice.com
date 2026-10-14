# ApiGroup

表示绘图对象组的类。

ApiGroup 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 创建指定绘图对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetClassType](./Methods/GetClassType.md) | "group" | 返回 ApiGroup 类的类型。 |
| [GetDescription](./Methods/GetDescription.md) | string \| null | 获取当前绘图对象的描述。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | 从当前图形对象获取填充格式属性。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前绘图的内部 ID。 |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | 从当前图形对象获取轮廓属性。 |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | 返回绘图对象的纵横比是否已锁定。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) \| null \| undefined | 返回 ApiDrawing 类的类型。 |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 x 位置。 |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 y 位置。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | 返回当前图形对象的阴影。 |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回覆盖当前绘图对象全部文本的文本范围。如果绘图对象还没有文本主体，则会创建一个。 |
| [GetTitle](./Methods/GetTitle.md) | string \| null | 获取当前绘图对象的标题。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | 检查当前绘图对象是否具有文本主体。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetDescription](./Methods/SetDescription.md) | boolean | 设置当前绘图对象的描述。 |
| [SetFill](./Methods/SetFill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetLine](./Methods/SetLine.md) | boolean | 为当前图形对象设置轮廓属性。 |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | 设置是否锁定绘图对象的纵横比。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图对象的名称。如果已存在同名的其他绘图对象，则该绘图对象的名称将重置为自动生成的默认名称。OLE 对象不支持自定义名称，因此对于 OLE 对象，此方法始终返回 false。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 为当前图形对象设置轮廓属性。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在页面上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在页面上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | boolean | 设置绘图在页面上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetShadow](./Methods/SetShadow.md) | boolean | 为当前图形对象设置阴影。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetTitle](./Methods/SetTitle.md) | boolean | 设置当前绘图对象的标题。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
