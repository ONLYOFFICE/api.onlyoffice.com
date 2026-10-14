# ApiRun

Class representing a small text block called 'run'.

ApiRun is a subclass of [ApiTextPr](../ApiTextPr/ApiTextPr.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddLineBreak](./Methods/AddLineBreak.md) | boolean | Adds a line break to the current run position and starts the next element from a new line. |
| [AddTabStop](./Methods/AddTabStop.md) | boolean | Adds a tab stop to the current run. |
| [AddText](./Methods/AddText.md) | boolean | Adds some text to the current run. |
| [ClearContent](./Methods/ClearContent.md) | boolean | Clears the content from the current run. |
| [Copy](./Methods/Copy.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a copy of the current run. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current run. |
| [GetBold](./Methods/GetBold.md) | boolean \| null \| undefined | Gets the bold property from the current text properties. |
| [GetCaps](./Methods/GetCaps.md) | boolean \| null \| undefined | Returns whether the text with the current text properties are capitalized. |
| [GetClassType](./Methods/GetClassType.md) | "run" | Returns a type of the ApiRun class. |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean \| null \| undefined | Gets the double strikeout property from the current text properties. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Gets the text color from the current text properties. |
| [GetFontFamily](./Methods/GetFontFamily.md) | string \| null \| undefined | Returns the font family from the current text properties. |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | Returns all font names from all elements inside the current run. |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) \| null \| undefined | Gets the font size from the current text properties. |
| [GetHighlight](./Methods/GetHighlight.md) | string \| null \| undefined | Gets the highlight property from the current text properties. |
| [GetItalic](./Methods/GetItalic.md) | boolean \| null \| undefined | Gets the italic property from the current text properties. |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Gets the text outline from the current text properties. |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean \| null \| undefined | Returns whether the text with the current text properties are displayed capitalized two points smaller than the actual font size. |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) \| null \| undefined | Gets the text spacing from the current text properties measured in twentieths of a point. |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean \| null \| undefined | Gets the strikeout property from the current text properties. |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Gets the text fill from the current text properties. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties of the current run. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns an ApiTextRange object that represents the part of the text contained in the current run. The run must be attached to the document before calling this method. |
| [GetUnderline](./Methods/GetUnderline.md) | boolean \| null \| undefined | Gets the underline property from the current text properties. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current run. |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the bold property to the text character. |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text color to the current text run. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line. |
| [SetFill](./Methods/SetFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text color to the current text run. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the font size to the characters of the current text run. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph. |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the italic property to the text character. |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run. |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text outline to the current text run. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that all the small letter characters in the text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text spacing measured in twentieths of a point. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed with a single horizontal line through the center of the line. |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | Replaces the whole text of the current run with the specified text, keeping the run properties. |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text fill to the current text run. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text properties to the current run. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text: |
