# ApiShape

ApiShape is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | Inserts a break at the specified location in the main document. |
| [Copy](./Methods/Copy.md) | [ApiShape](../ApiShape/ApiShape.md) | Copies the current shape. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current graphic object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "shape" | Returns a type of the ApiShape class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [GetDocContent](./Methods/GetDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the shape inner contents where a paragraph or text runs can be inserted. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill properties from the current shape. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetGeometry](./Methods/GetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Returns the geometry object from the current shape. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current shape. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the next inline drawing object if exists. |
| [GetNextShape](./Methods/GetNextShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | Returns the next inline shape if exists. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a parent content control that contains the graphic object. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a parent paragraph that contains the graphic object. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table that contains the graphic object. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a parent table cell that contains the graphic object. |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the previous inline drawing object if exists. |
| [GetPrevShape](./Methods/GetPrevShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | Returns the previous inline shape if exists. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the graphic object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Inserts a paragraph at the specified position. |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | Scales the height of the figure using the specified coefficient. |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | Scales the width of the figure using the specified coefficient. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetDistances](./Methods/SetDistances.md) | boolean | Specifies the minimum distance which will be maintained between the edges of the current drawing object and any |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | Sets the properties from another drawing to the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill properties to the current shape. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetGeometry](./Methods/SetGeometry.md) | boolean | Sets a custom geometry for the current shape. |
| [SetHorAlign](./Methods/SetHorAlign.md) | boolean | Specifies how the floating object will be horizontally aligned. |
| [SetHorFlip](./Methods/SetHorFlip.md) | boolean | Flips the current drawing horizontally. |
| [SetHorPosition](./Methods/SetHorPosition.md) | boolean | Sets the absolute measurement for the horizontal positioning of the floating object. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current shape. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | Sets the text paddings to the current shape. |
| [SetRelativeHeight](./Methods/SetRelativeHeight.md) | boolean | Sets the relative height of the object (image, shape, chart) bounding box. |
| [SetRelativeWidth](./Methods/SetRelativeWidth.md) | boolean | Sets the relative width of the object (image, shape, chart) bounding box. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetVerAlign](./Methods/SetVerAlign.md) | boolean | Specifies how the floating object will be vertically aligned. |
| [SetVerPosition](./Methods/SetVerPosition.md) | boolean | Sets the absolute measurement for the vertical positioning of the floating object. |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | Flips the current drawing vertically. |
| [SetVerticalTextAlign](./Methods/SetVerticalTextAlign.md) | boolean | Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set: |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
