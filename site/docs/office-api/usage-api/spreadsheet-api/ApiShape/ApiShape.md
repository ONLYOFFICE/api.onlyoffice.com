# ApiShape

Class representing a shape.

ApiShape is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a copy of the current shape. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "shape" | Returns a type of the ApiShape class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) \| null \| undefined | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetDescription](./Methods/GetDescription.md) | string \| null | Gets the description of the current drawing. |
| [GetDocContent](./Methods/GetDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) \| null \| undefined | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill formatting properties from the current graphic object. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Returns the geometry object from the current shape. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current shape. |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | Returns whether the aspect ratio of the drawing is locked. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) \| null \| undefined | Returns the parent sheet of the current drawing. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Returns the x position of the current drawing on the worksheet. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Returns the y position of the current drawing on the worksheet. |
| [GetPosition](./Methods/GetPosition.md) | [DrawingCellAnchor](../Enumeration/DrawingCellAnchor.md) \| null | Returns the cell anchor of the current drawing; the offsets are limited by the anchor cell. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | Returns the shadow of the current graphic object. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a text range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Gets the title of the current drawing. |
| [GetVerticalTextAlign](./Methods/GetVerticalTextAlign.md) | [VerticalTextAlign](../Enumeration/VerticalTextAlign.md) | Gets the vertical alignment from the shape content where a paragraph or text runs can be inserted. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | Checks whether the current drawing has a text body. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [SetDescription](./Methods/SetDescription.md) | boolean | Sets the description of the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | Sets a custom geometry for the current shape. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current shape. |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | Sets whether the aspect ratio of the drawing is locked. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | Sets the text paddings to the current shape. |
| [SetPosition](./Methods/SetPosition.md) | None | Changes the position for the drawing object. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShadow](./Methods/SetShadow.md) | boolean | Sets the shadow to the current graphic object. |
| [SetSize](./Methods/SetSize.md) | None | Sets a size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Sets the title of the current drawing. |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current drawing from the selection. |
