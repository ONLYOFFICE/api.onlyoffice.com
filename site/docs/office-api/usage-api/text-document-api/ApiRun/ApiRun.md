# ApiRun

Represents the ApiRun class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumnBreak](./Methods/AddColumnBreak.md) | boolean | Adds a column break to the current run position and starts the next element from a new column. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current run. 💡 Please note that this run must be in the document. |
| [AddDrawing](./Methods/AddDrawing.md) | boolean | Adds a drawing object (image, shape or chart) to the current text run. |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Adds a hyperlink to the current run. |
| [AddLineBreak](./Methods/AddLineBreak.md) | boolean | Adds a line break to the current run position and starts the next element from a new line. |
| [AddPageBreak](./Methods/AddPageBreak.md) | boolean | Adds a page break and starts the next element from a new page. |
| [AddTabStop](./Methods/AddTabStop.md) | boolean | Adds a tab stop to the current run. |
| [AddText](./Methods/AddText.md) | boolean | Adds some text to the current run. |
| [ClearContent](./Methods/ClearContent.md) | boolean | Clears the content from the current run. |
| [Copy](./Methods/Copy.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a copy of the current run. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current run. |
| [GetBold](./Methods/GetBold.md) | boolean | Gets the bold property from the current text properties. |
| [GetCaps](./Methods/GetCaps.md) | boolean | Specifies whether the text with the current text properties are capitalized. |
| [GetClassType](./Methods/GetClassType.md) | "run" | Returns a type of the ApiRun class. |
| [GetColor](./Methods/GetColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Gets the RGB color from the current text properties. |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean | Gets the double strikeout property from the current text properties. |
| [GetFontFamily](./Methods/GetFontFamily.md) | string | Returns the font family from the current text properties. The method automatically calculates the font from the theme if the font was set via the theme. |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | Returns all font names from all elements inside the current run. |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) | Gets the font size from the current text properties. |
| [GetHighlight](./Methods/GetHighlight.md) | string | Gets the highlight property from the current text properties. |
| [GetItalic](./Methods/GetItalic.md) | boolean | Gets the italic property from the current text properties. |
| [GetLanguage](./Methods/GetLanguage.md) | string | Gets the language from the current text properties. |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Gets the text outline from the current text properties. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns a content control that contains the current run. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns a parent paragraph of the current run. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current run. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current run. |
| [GetPosition](./Methods/GetPosition.md) | [hps](../Enumeration/hps.md) | Gets the text position from the current text properties measured in half-points (1/144 of an inch). |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified run. |
| [GetShd](./Methods/GetShd.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Gets the text shading from the current text properties. |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean | Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size. |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) | Gets the text spacing from the current text properties measured in twentieths of a point. |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean | Gets the strikeout property from the current text properties. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Gets the style of the current text properties. |
| [GetText](./Methods/GetText.md) | string | Returns a text from the text run. |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Gets the text fill from the current text properties. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties of the current run. |
| [GetUnderline](./Methods/GetUnderline.md) | boolean | Gets the underline property from the current text properties. |
| [GetVertAlign](./Methods/GetVertAlign.md) | string | Gets the vertical alignment type from the current text properties. |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | Moves a cursor to a specified position of the current text run. If the current run is not assigned to any document part, then **false** is returned. Otherwise, this method returns **true**. If there is any selection in the document, it will be removed. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current run. |
| [Select](./Methods/Select.md) | boolean | Selects the current run. |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the bold property to the text character. |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that any lowercase characters in the current text run are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text color for the current text run in the RGB format. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the current run are displayed with two horizontal lines through each character displayed on the line. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the font size to the characters of the current text run. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies a highlighting color which is applied as a background to the contents of the current run. |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the italic property to the text character. |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run. |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text outline to the current text run. |
| [SetPosition](./Methods/SetPosition.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text. |
| [SetShd](./Methods/SetShd.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the shading applied to the contents of the current text run. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that all the small letter characters in this text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text spacing measured in twentieths of a point. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the current run are displayed with a single horizontal line through the center of the line. |
| [SetStyle](./Methods/SetStyle.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets a style to the current run. |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text fill to the current text run. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text properties to the current run. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run: **"baseline"** - the characters in the current text run will be aligned by the default text baseline. **"subscript"** - the characters in the current text run will be aligned below the default text baseline. **"superscript"** - the characters in the current text run will be aligned above the default text baseline. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiRun object into the JSON object. |
| [WrapInMailMergeField](./Methods/WrapInMailMergeField.md) | boolean | Wraps a run in a mail merge field. |
