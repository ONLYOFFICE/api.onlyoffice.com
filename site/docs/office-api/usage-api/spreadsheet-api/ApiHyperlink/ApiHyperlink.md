# ApiHyperlink

Class representing a hyperlink.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Address | string | Returns or sets the address of the target document. |
| Name | string | Returns the name of the hyperlink. |
| Range | [ApiRange](../ApiRange/ApiRange.md) | Returns the range the hyperlink is attached to. |
| ScreenTip | string | Returns or sets the screen tip text for the hyperlink. |
| SubAddress | string | Returns or sets the subaddress of the target document. |
| TextToDisplay | string | Returns or sets the text to be displayed for the hyperlink. |
| Type | number | Returns the type of the hyperlink. |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Deletes the hyperlink. |
| [GetAddress](./Methods/GetAddress.md) | string | Returns the address of the target document. |
| [GetClassType](./Methods/GetClassType.md) | "hyperlink" | Returns a type of the ApiHyperlink class. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) \| null \| undefined | Returns the hyperlink element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current hyperlink. |
| [GetLinkedText](./Methods/GetLinkedText.md) | string | Returns the hyperlink address. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the hyperlink. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the range the hyperlink is attached to. |
| [GetScreenTip](./Methods/GetScreenTip.md) | string | Returns the screen tip text for the hyperlink. |
| [GetScreenTipText](./Methods/GetScreenTipText.md) | string | Returns the screen tip text of the hyperlink. |
| [GetSubAddress](./Methods/GetSubAddress.md) | string | Returns the subaddress of the target document. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns an ApiTextRange object that represents the part of the text contained in the current hyperlink. |
| [GetTextToDisplay](./Methods/GetTextToDisplay.md) | string | Returns the text displayed for the hyperlink. |
| [GetType](./Methods/GetType.md) | number | Returns the type of the hyperlink. |
| [SetAddress](./Methods/SetAddress.md) | None | Sets the address of the target document. |
| [SetLink](./Methods/SetLink.md) | boolean | Sets the hyperlink address. |
| [SetScreenTip](./Methods/SetScreenTip.md) | None | Sets the screen tip text for the hyperlink. |
| [SetScreenTipText](./Methods/SetScreenTipText.md) | boolean | Sets the screen tip text of the hyperlink. |
| [SetSubAddress](./Methods/SetSubAddress.md) | None | Sets the subaddress of the target document. |
| [SetTextToDisplay](./Methods/SetTextToDisplay.md) | None | Sets the text to be displayed for the hyperlink. |
