# ApiOleObject

Class representing an Ole object.

ApiOleObject is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | Inserts a break at the specified location in the main document. |
| [Copy](./Methods/Copy.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) \| null | Creates a copy of the current OLE object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current graphic object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetAllowOverlap](./Methods/GetAllowOverlap.md) | boolean | Returns whether the drawing object is allowed to overlap other drawing objects. |
| [GetApplicationId](./Methods/GetApplicationId.md) | string | Returns the application ID from the current OLE object. |
| [GetClassType](./Methods/GetClassType.md) | "oleObject" | Returns a type of the ApiOleObject class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) \| null \| undefined | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [GetData](./Methods/GetData.md) | string | Returns the string data from the current OLE object. |
| [GetDescription](./Methods/GetDescription.md) | string \| null | Gets the description of the current drawing. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill formatting properties from the current graphic object. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current graphic object. |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | Returns whether the aspect ratio of the drawing is locked. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the next inline drawing object if exists. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a parent content control that contains the graphic object. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a parent paragraph that contains the graphic object. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table that contains the graphic object. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a parent table cell that contains the graphic object. |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the previous inline drawing object if exists. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | Returns the shadow of the current graphic object. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Gets the title of the current drawing. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | Checks whether the drawing has an associated text body. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the graphic object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Inserts a paragraph at the specified position. |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | Scales the height of the figure using the specified coefficient. |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | Scales the width of the figure using the specified coefficient. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetAllowOverlap](./Methods/SetAllowOverlap.md) | void | Sets whether the drawing object is allowed to overlap other drawing objects. |
| [SetApplicationId](./Methods/SetApplicationId.md) | boolean | Sets the application ID to the current OLE object. |
| [SetData](./Methods/SetData.md) | boolean | Sets the data to the current OLE object. |
| [SetDescription](./Methods/SetDescription.md) | boolean | Sets the description of the current drawing. |
| [SetDistances](./Methods/SetDistances.md) | boolean | Specifies the minimum distance which will be maintained between the edges of the current drawing object and any subsequent text. |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | Sets the properties from another drawing to the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHorAlign](./Methods/SetHorAlign.md) | boolean | Specifies how the floating object will be horizontally aligned. |
| [SetHorFlip](./Methods/SetHorFlip.md) | boolean | Flips the current drawing horizontally. |
| [SetHorPosition](./Methods/SetHorPosition.md) | boolean | Sets the absolute measurement for the horizontal positioning of the floating object. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current graphic object. |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | Sets whether the aspect ratio of the drawing is locked. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetRelativeHeight](./Methods/SetRelativeHeight.md) | boolean | Sets the relative height of the object (image, shape, chart) bounding box. |
| [SetRelativeWidth](./Methods/SetRelativeWidth.md) | boolean | Sets the relative width of the object (image, shape, chart) bounding box. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShadow](./Methods/SetShadow.md) | boolean | Sets the shadow to the current graphic object. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Sets the title of the current drawing. |
| [SetVerAlign](./Methods/SetVerAlign.md) | boolean | Specifies how the floating object will be vertically aligned. |
| [SetVerPosition](./Methods/SetVerPosition.md) | boolean | Sets the absolute measurement for the vertical positioning of the floating object. |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | Flips the current drawing vertically. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | Sets the wrapping type of the current object (image, shape, chart). |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
