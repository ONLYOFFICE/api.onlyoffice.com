# ApiDrawing

Represents the ApiDrawing class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns a type of the ApiDrawing class. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent sheet of the current drawing. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPosition](./Methods/SetPosition.md) | None | Changes the position for the drawing object. 💡 Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSize](./Methods/SetSize.md) | None | Sets a size of the object (image, shape, chart) bounding box. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current drawing from the selection. |
