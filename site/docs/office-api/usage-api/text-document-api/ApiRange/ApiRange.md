# ApiRange

Represents the ApiRange class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBookmark](./Methods/AddBookmark.md) | boolean | Adds a bookmark to the specified range. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current range. |
| [AddField](./Methods/AddField.md) | boolean | Adds a field to the specified range by the field instruction code. 💡  This method removes text within a range.  |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Adds a hyperlink to the specified range. |
| [AddText](./Methods/AddText.md) | boolean | Adds a text to the specified position. |
| [Delete](./Methods/Delete.md) | boolean | Deletes all the contents from the current range. |
| [ExpandTo](./Methods/ExpandTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a new range that goes beyond the specified range in any direction and spans a different range. The current range has not changed. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns a collection of paragraphs that represents all the paragraphs in the specified range. |
| [GetClassType](./Methods/GetClassType.md) | "range" | Returns a type of the ApiRange class. |
| [GetEndPage](./Methods/GetEndPage.md) | Number | Returns the end page number of the current range. |
| [GetEndPos](./Methods/GetEndPos.md) | number | Returns the end position of the current range. |
| [GetParagraph](./Methods/GetParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a paragraph from all the paragraphs that are in the range. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the document part contained in the specified range. |
| [GetStartPage](./Methods/GetStartPage.md) | Number | Returns the start page number of the current range. |
| [GetStartPos](./Methods/GetStartPos.md) | number | Returns the start position of the current range. |
| [GetText](./Methods/GetText.md) | String | Returns a text from the specified range. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the merged text properties of the entire range. |
| [IntersectWith](./Methods/IntersectWith.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a new range as the intersection of the current range with another range. The current range has not changed. |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | Moves a cursor to a specified position of the current range object. If there is any selection in the document, it will be removed. |
| [Select](./Methods/Select.md) | boolean | Sets the selection to the specified range. |
| [SetBold](./Methods/SetBold.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the bold property to the text character. |
| [SetCaps](./Methods/SetCaps.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the text color to the current text Range in the RGB format. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line. |
| [SetEndPos](./Methods/SetEndPos.md) | boolean | Sets the end position of the current range object. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the font size to the characters of the current text Range. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies a highlighting color which is applied as a background to the contents of the current Range. |
| [SetItalic](./Methods/SetItalic.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the italic property to the text character. |
| [SetPosition](./Methods/SetPosition.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies the amount by which text is raised or lowered for the current Range in relation to the default baseline of the surrounding non-positioned text. |
| [SetShd](./Methods/SetShd.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies the shading applied to the contents of the current text Range. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the text spacing measured in twentieths of a point. |
| [SetStartPos](./Methods/SetStartPos.md) | boolean | Sets the start position of the current range object. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies that the contents of the current Range are displayed with a single horizontal line through the range center. |
| [SetStyle](./Methods/SetStyle.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the style to the current Range. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Sets the text properties to the current Range. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies that the contents of the current Range are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text: **"baseline"** - the characters in the current text Range will be aligned by the default text baseline. **"subscript"** - the characters in the current text Range will be aligned below the default text baseline. **"superscript"** - the characters in the current text Range will be aligned above the default text baseline. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiRange object into the JSON object. |
