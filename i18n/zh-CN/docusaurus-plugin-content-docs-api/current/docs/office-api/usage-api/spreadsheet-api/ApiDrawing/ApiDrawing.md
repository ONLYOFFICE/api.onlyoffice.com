# ApiDrawing

表示 ApiDrawing 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | 返回 ApiDrawing 类的类型。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回当前绘图的父工作表。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [Select](./Methods/Select.md) | 无 | 选择当前图形对象。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 更改绘图对象的位置。💡 请注意，水平和垂直偏移量仅在指定的列和行单元格的限制范围内计算。如果此值超出单元格宽度或高度，将设置另一个垂直/水平位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置对象（图像、形状、图表）边界框的大小。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前绘图。 |
