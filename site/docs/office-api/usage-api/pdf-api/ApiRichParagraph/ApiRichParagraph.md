# ApiRichParagraph

Class representing a rich paragraph.

ApiRichParagraph is a subclass of [ApiRichParaPr](../ApiRichParaPr/ApiRichParaPr.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the current paragraph. |
| [AddText](./Methods/AddText.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | Adds some text to the current paragraph. |
| [Copy](./Methods/Copy.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | Creates a paragraph copy. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "richParagraph" | Returns a type of the ApiRichParagraph class. |
| [GetElement](./Methods/GetElement.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) \| null \| undefined | Returns a paragraph element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current paragraph. |
| [GetJc](./Methods/GetJc.md) | [HorTextAlign](../Enumeration/HorTextAlign.md) | Returns the rich paragraph contents justification. |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the last Run with text in the current paragraph. |
| [GetNext](./Methods/GetNext.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | Returns the next paragraph. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiRichParaPr](../ApiRichParaPr/ApiRichParaPr.md) | Returns the paragraph properties. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the paragraph position within its parent element. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | Returns the previous paragraph. |
| [GetText](./Methods/GetText.md) | string | Returns the paragraph text. |
| [Last](./Methods/Last.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | Returns the last element of the paragraph. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the current paragraph. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current paragraph. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the rich paragraph contents justification. |
| [SetParaPr](./Methods/SetParaPr.md) | boolean | Sets the paragraph properties. |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | Specifies the reading order for the current paragraph. |
