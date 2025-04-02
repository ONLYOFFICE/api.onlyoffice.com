# ApiDrawing

Represents the ApiDrawing class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns a type of the ApiDrawing class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent sheet of the current drawing. |
| [GetRotation](./Methods/GetRotation.md) | number | Gets the rotation angle of the current drawing object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetPosition](./Methods/SetPosition.md) | None | Changes the position for the drawing object.\ 💡 Please note that the horizontal and vertical offsets are calculated within the limits of\ the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSize](./Methods/SetSize.md) | None | Sets a size of the object (image, shape, chart) bounding box. |
