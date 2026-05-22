# ApiOleObject

ApiOleObject 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | 创建指定 OLE 对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetApplicationId](./Methods/GetApplicationId.md) | string | 返回当前 OLE 对象的应用程序 ID。 |
| [GetClassType](./Methods/GetClassType.md) | "oleObject" | 返回 ApiOleObject 类的类型。 |
| [GetData](./Methods/GetData.md) | string | 返回当前 OLE 对象的字符串数据。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回当前绘图的父工作表。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [Select](./Methods/Select.md) | 无 | 选择当前图形对象。 |
| [SetApplicationId](./Methods/SetApplicationId.md) | boolean | 设置当前 OLE 对象的应用程序 ID。 |
| [SetData](./Methods/SetData.md) | boolean | 设置当前 OLE 对象的数据。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 更改绘图对象的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置对象（图像、形状、图表）边界框的大小。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前绘图。 |
