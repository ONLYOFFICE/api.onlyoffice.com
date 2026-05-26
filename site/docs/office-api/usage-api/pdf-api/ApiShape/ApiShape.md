# ApiShape

ApiShape is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a copy of the specified shape. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [GetClassType](./Methods/GetClassType.md) | "shape" | Returns the type of the ApiShape class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill properties from the current shape. |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Returns the geometry object from the current shape. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current shape. |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Returns the type of the ApiDrawing class. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the page. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the page. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill properties to the current shape. |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | Sets a custom geometry for the current shape. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current shape. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the page. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the page. |
| [SetPosition](./Methods/SetPosition.md) | boolean | Sets the position of the drawing on the page. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted. |
