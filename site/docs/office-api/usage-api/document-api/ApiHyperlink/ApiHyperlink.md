# ApiHyperlink

Class representing a Paragraph hyperlink.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "hyperlink" | Returns a type of the ApiHyperlink class. |
| [GetDisplayedText](./Methods/GetDisplayedText.md) | string | Returns the hyperlink display text. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) \| null \| undefined | Returns the hyperlink element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current hyperlink. |
| [GetLinkedText](./Methods/GetLinkedText.md) | string | Returns the hyperlink address. |
| [GetParent](./Methods/GetParent.md) | [ParagraphLikeContainer](../Enumeration/ParagraphLikeContainer.md) \| null \| undefined | Returns the parent element (a paragraph or an inline content control) that directly contains the current hyperlink. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the position (index) of the current hyperlink within its parent element. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the document part contained in the specified hyperlink. |
| [GetScreenTipText](./Methods/GetScreenTipText.md) | string | Returns the screen tip text of the hyperlink. |
| [SetDefaultStyle](./Methods/SetDefaultStyle.md) | boolean | Sets the default hyperlink style. |
| [SetDisplayedText](./Methods/SetDisplayedText.md) | boolean | Sets the hyperlink display text. |
| [SetLink](./Methods/SetLink.md) | boolean | Sets the hyperlink address. |
| [SetScreenTipText](./Methods/SetScreenTipText.md) | boolean | Sets the screen tip text of the hyperlink. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiHyperlink object into the JSON object. |
