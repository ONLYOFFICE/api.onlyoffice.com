# ApiOleObject

ApiOleObject is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetApplicationId](./Methods/GetApplicationId.md) | string | Returns the application ID from the current OLE object. |
| [GetClassType](./Methods/GetClassType.md) | "oleObject" | Returns a type of the ApiOleObject class. |
| [GetData](./Methods/GetData.md) | string | Returns the string data from the current OLE object. |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Returns the hyperlink from the current drawing object (shape or image). |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent object. |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns the drawing parent slide layout. |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent slide master. |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the drawing parent slide. |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | Returns a placeholder from the current drawing object. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the slide. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the slide. |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | Replaces the placeholder by a drawing on the slide. |
| [SetApplicationId](./Methods/SetApplicationId.md) | boolean | Sets the application ID to the current OLE object. |
| [SetData](./Methods/SetData.md) | boolean | Sets the data to the current OLE object. |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | Sets a hyperlink to the current drawing object (shape or image). Pass null to remove the hyperlink. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the slide. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the slide. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
