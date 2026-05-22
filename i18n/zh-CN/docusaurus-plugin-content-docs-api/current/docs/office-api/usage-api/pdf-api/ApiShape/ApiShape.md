# ApiShape

ApiShape 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | 创建指定形状的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [GetClassType](./Methods/GetClassType.md) | "shape" | 返回 ApiShape 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回可以插入段落或文本块的形状内部内容。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | 从当前形状获取填充属性。 |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | 返回当前形状的几何对象。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前绘图的内部 ID。 |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | 从当前形状获取轮廓属性。 |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 返回 ApiDrawing 类的类型。 |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 x 位置。 |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 y 位置。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetFill](./Methods/SetFill.md) | boolean | 设置当前形状的填充属性。 |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | 为当前形状设置自定义几何形状。 |
| [SetLine](./Methods/SetLine.md) | boolean | 设置当前形状的轮廓属性。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在页面上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在页面上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | boolean | 设置绘图在页面上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | 设置可以插入段落或文本块的形状内容的垂直对齐方式。 |
