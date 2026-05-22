# ApiShape

ApiShape is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a copy of the specified shape. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "shape" | Returns a type of the ApiShape class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetDocContent](./Methods/GetDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill properties from the current shape. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Returns the geometry object from the current shape. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current shape. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent sheet of the current drawing. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill properties to the current shape. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | Sets a custom geometry for the current shape. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current shape. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | Sets the text paddings to the current shape. |
| [SetPosition](./Methods/SetPosition.md) | None | Changes the position for the drawing object. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSize](./Methods/SetSize.md) | None | Sets a size of the object (image, shape, chart) bounding box. |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current drawing from the selection. |
