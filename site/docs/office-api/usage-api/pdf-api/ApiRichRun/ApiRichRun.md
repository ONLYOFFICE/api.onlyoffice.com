# ApiRichRun

Class representing a small text block called 'run'.

ApiRichRun is a subclass of [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddText](./Methods/AddText.md) | boolean | Adds some text to the current run. |
| [ClearContent](./Methods/ClearContent.md) | boolean | Clears the content from the current run. |
| [Copy](./Methods/Copy.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | Creates a copy of the current run. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current run. |
| [GetBold](./Methods/GetBold.md) | boolean \| null \| undefined | Gets the bold property from the current text properties. |
| [GetClassType](./Methods/GetClassType.md) | "richRun" | Returns a type of the ApiRichRun class. |
| [GetColor](./Methods/GetColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null \| undefined | Gets the RGB color from the current text properties. |
| [GetFontFamily](./Methods/GetFontFamily.md) | string \| null \| undefined | Returns the font family from the current text properties. |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) \| null \| undefined | Gets the font size from the current text properties. |
| [GetItalic](./Methods/GetItalic.md) | boolean \| null \| undefined | Gets the italic property from the current text properties. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | Returns a parent paragraph of the current run. |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean \| null \| undefined | Gets the strikeout property from the current text properties. |
| [GetText](./Methods/GetText.md) | string | Returns a text from the text run. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Returns the text properties of the current run. |
| [GetUnderline](./Methods/GetUnderline.md) | boolean \| null \| undefined | Gets the underline property from the current text properties. |
| [GetVertAlign](./Methods/GetVertAlign.md) | [TextVertAlign](../Enumeration/TextVertAlign.md) | Gets the vertical alignment type from the current text properties. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current run. |
| [SetBold](./Methods/SetBold.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets the bold property to the text character. |
| [SetColor](./Methods/SetColor.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets the text color to the current text run. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets the font size to the characters of the current text run. |
| [SetItalic](./Methods/SetItalic.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets the italic property to the text character. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Specifies that the contents of the run are displayed with a single horizontal line through the center of the line. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Sets the text properties to the current run. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Specifies that the contents of the run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text: |
