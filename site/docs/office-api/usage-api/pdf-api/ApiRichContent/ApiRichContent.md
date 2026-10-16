# ApiRichContent

Class representing a rich content.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a rich paragraph using its position in rich content. |
| [GetClassType](./Methods/GetClassType.md) | "richContent" | Returns a type of the ApiRichContent class. |
| [GetContent](./Methods/GetContent.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md)[] | Returns an array of rich paragraphs from the current rich content object. |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | Returns the current paragraph where the cursor is located. |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) \| null \| undefined | Returns the current run where the cursor is located. |
| [GetElement](./Methods/GetElement.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | Returns an rich paragraph by its position in the content. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [Push](./Methods/Push.md) | boolean | Pushes a rich paragraph to a rich content. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current rich content. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
