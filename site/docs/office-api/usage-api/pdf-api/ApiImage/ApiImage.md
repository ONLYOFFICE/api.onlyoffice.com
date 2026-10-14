# ApiImage

Class representing an image.

ApiImage is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Copy](./Methods/Copy.md) | [ApiImage](../ApiImage/ApiImage.md) | Creates a copy of the current image. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "image" | Returns the type of the ApiImage class. |
| [GetDescription](./Methods/GetDescription.md) | string \| null | Gets the description of the current drawing. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill formatting properties from the current graphic object. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current graphic object. |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | Returns whether the aspect ratio of the drawing is locked. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) \| null \| undefined | Returns the type of the ApiDrawing class. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the page. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the page. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | Returns the shadow of the current graphic object. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a text range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Gets the title of the current drawing. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | Checks whether the current drawing has a text body. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetDescription](./Methods/SetDescription.md) | boolean | Sets the description of the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current graphic object. |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | Sets whether the aspect ratio of the drawing is locked. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name. OLE objects do not support a custom name, so for them this method always returns false. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the current graphic object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the page. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the page. |
| [SetPosition](./Methods/SetPosition.md) | boolean | Sets the position of the drawing on the page. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShadow](./Methods/SetShadow.md) | boolean | Sets the shadow to the current graphic object. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Sets the title of the current drawing. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
