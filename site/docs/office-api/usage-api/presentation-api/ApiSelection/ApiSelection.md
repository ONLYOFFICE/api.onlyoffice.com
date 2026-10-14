# ApiSelection

Class representing the selection in the presentation.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetShapes](./Methods/GetShapes.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | Returns the selected shapes. |
| [GetSlides](./Methods/GetSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | Returns the selected slides. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns the selected text as a text range. With the cursor in the text and nothing selected, the range is empty and starts at the cursor. |
| [GetType](./Methods/GetType.md) | [SelectionType](../Enumeration/SelectionType.md) | Returns the type of the current selection. |
| [IsEmpty](./Methods/IsEmpty.md) | boolean | Specifies whether the current selection is empty or not. |
