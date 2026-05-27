# ApiShape

ApiShape 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | 在主文档的指定位置插入分隔符。 |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | 复制当前形状。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前图形对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetClassType](./Methods/GetClassType.md) | "shape" | 返回 ApiShape 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回可以插入段落或文本块的绘图内部内容（如果存在）。 |
| [GetDocContent](./Methods/GetDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回可以插入段落或文本块的形状内部内容。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | 从当前形状获取填充属性。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | 返回当前形状的几何对象。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | 从当前形状获取轮廓属性。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | 返回下一个内联绘图对象（如果存在）。 |
| [GetNextShape](./Methods/GetNextShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | 返回下一个内联形状（如果存在）。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | 返回包含图形对象的父内容控件。 |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回包含图形对象的父段落。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含图形对象的父表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含图形对象的父表格单元格。 |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | 返回上一个内联绘图对象（如果存在）。 |
| [GetPrevShape](./Methods/GetPrevShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | 返回上一个内联形状（如果存在）。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 用富文本内容控件包装图形对象。 |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 在指定位置插入段落。 |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | 使用指定的系数缩放图形的高度。 |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | 使用指定的系数缩放图形的宽度。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetDistances](./Methods/SetDistances.md) | boolean | 指定将在当前绘图对象边缘与任何 |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | 将另一个绘图的属性设置到当前绘图。 |
| [SetFill](./Methods/SetFill.md) | boolean | 设置当前形状的填充属性。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | 为当前形状设置自定义几何形状。 |
| [SetHorAlign](./Methods/SetHorAlign.md) | boolean | 指定浮动对象的水平对齐方式。 |
| [SetHorFlip](./Methods/SetHorFlip.md) | boolean | 水平翻转当前绘图。 |
| [SetHorPosition](./Methods/SetHorPosition.md) | boolean | 设置浮动对象水平定位的绝对测量值。 |
| [SetLine](./Methods/SetLine.md) | boolean | 设置当前形状的轮廓属性。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | 设置当前形状的文本内边距。 |
| [SetRelativeHeight](./Methods/SetRelativeHeight.md) | boolean | 设置对象（图像、形状、图表）边界框的相对高度。 |
| [SetRelativeWidth](./Methods/SetRelativeWidth.md) | boolean | 设置对象（图像、形状、图表）边界框的相对宽度。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetVerAlign](./Methods/SetVerAlign.md) | boolean | 指定浮动对象的垂直对齐方式。 |
| [SetVerPosition](./Methods/SetVerPosition.md) | boolean | 设置浮动对象垂直定位的绝对测量值。 |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | 垂直翻转当前绘图。 |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | 设置可以插入段落或文本块的形状内容的垂直对齐方式。 |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | 设置当前对象（图像、形状、图表）的环绕类型。可以设置以下环绕样式类型之一： |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiDrawing 对象转换为 JSON 对象。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
