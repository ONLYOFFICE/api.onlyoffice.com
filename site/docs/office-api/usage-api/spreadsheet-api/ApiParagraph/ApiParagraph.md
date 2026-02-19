# ApiParagraph

Represents the ApiParagraph class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the current paragraph. |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a line break to the current position and starts the next element from a new line. |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a tab stop to the current paragraph. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds some text to the current paragraph. |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a paragraph copy. Ingnore comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | Returns a type of the ApiParagraph class. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns a paragraph element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current paragraph. |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | Returns all font names from all elements inside the current paragraph. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current content paragraph. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the last Run with text in the current paragraph. |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the next paragraph. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the previous paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Inserts a paragraph at the specified position. |
| [Last](./Methods/Last.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns the last element of the paragraph. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the current paragraph. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current paragraph. 💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. 💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph), a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [SetBold](./Methods/SetBold.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the bold property to the text character. |
| [SetBullet](./Methods/SetBullet.md) | None | Sets the bullet or numbering to the current paragraph. |
| [SetCaps](./Methods/SetCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the font size to the characters of the current paragraph. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | Sets the paragraph right side indentation. |
| [SetItalic](./Methods/SetItalic.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the italic property to the text character. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the paragraph contents justification. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that all the small letter characters in this paragraph are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the text spacing measured in twentieths of a point. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it  will be interpreted as false. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If  the value of the sLineRule parameter is "auto", then the value of the  nLine parameter will be interpreted as 240ths of a line. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line. |
| [SetTabs](./Methods/SetTabs.md) | boolean | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. **Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the paragraph text properties. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParagraph object into the JSON object. |
