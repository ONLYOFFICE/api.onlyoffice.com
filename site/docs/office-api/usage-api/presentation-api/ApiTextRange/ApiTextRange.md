# ApiTextRange

Class representing a text range within a presentation shape's text frame.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| End | number | Returns or sets the end position of the current range. |
| Start | number | Returns or sets the start position of the current range. |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null \| undefined | Adds a hyperlink to the current text range. |
| [AddText](./Methods/AddText.md) | boolean | Adds a text to the specified position. The current range is expanded to include the added text. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the contents of the current text range. |
| [ExpandTo](./Methods/ExpandTo.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a new range that spans both this range and the given range. The current range is not changed. |
| [Find](./Methods/Find.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Finds the first occurrence of the given text within this range and returns it as a new ApiTextRange. Returns null if the text is not found. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all Paragraph objects within this range. |
| [GetClassType](./Methods/GetClassType.md) | "textRange" | Returns the class type identifier. |
| [GetEndPos](./Methods/GetEndPos.md) | number | Returns the end position of the current range. |
| [GetParagraph](./Methods/GetParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the paragraph at the given index within this range. Returns null if the index is out of bounds. |
| [GetRange](./Methods/GetRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a new ApiTextRange that represents a sub-range of the current range. |
| [GetStartPos](./Methods/GetStartPos.md) | number | Returns the start position of the current range. |
| [GetText](./Methods/GetText.md) | string | Returns the text content of the range. Paragraph breaks are represented as "\r". |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the merged text properties of the entire range. |
| [IntersectWith](./Methods/IntersectWith.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a new range that is the intersection of this range and the given range. The current range is not changed. |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | Moves a cursor to the specified position within the current range. |
| [Replace](./Methods/Replace.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Replaces all occurrences of the specified text within this range. |
| [Select](./Methods/Select.md) | boolean | Selects the text range in the editor. |
| [SetBold](./Methods/SetBold.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Sets bold formatting for the contents of the current text range. |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Sets the text color of the current range. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line. |
| [SetEndPos](./Methods/SetEndPos.md) | boolean | Sets the end position of the current range. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Sets the font family for the current TextRange. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Sets the font size of the characters in the current text Range. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Specifies a highlighting color which is applied as a background to the contents of the current Range. |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Sets the italic property to the text character. |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Specifies the language which will be used to check spelling and grammar (if requested) when processing the contents of the current text range. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Sets the text spacing measured in twentieths of a point. |
| [SetStartPos](./Methods/SetStartPos.md) | boolean | Sets the start position of the current range. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Specifies that the contents of the current Range are displayed with a single horizontal line through the range center. |
| [SetText](./Methods/SetText.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Replaces all text content with the given string. Use "\r" to separate paragraphs. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Sets the text properties to the current text range. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | Specifies that the contents of the current Range are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text: **"baseline"** - the characters in the current text Range will be aligned by the default text baseline. **"subscript"** - the characters in the current text Range will be aligned below the default text baseline. **"superscript"** - the characters in the current text Range will be aligned above the default text baseline. |
| [ToHtml](./Methods/ToHtml.md) | string | Converts the text range to HTML. |
