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
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the next paragraph. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the previous paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current paragraph. 💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. 💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph), a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [SetBullet](./Methods/SetBullet.md) | None | Sets the bullet or numbering to the current paragraph. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | Sets the paragraph right side indentation. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the paragraph contents justification. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it  will be interpreted as false. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If  the value of the sLineRule parameter is "auto", then the value of the  nLine parameter will be interpreted as 240ths of a line. |
| [SetTabs](./Methods/SetTabs.md) | boolean | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. **Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other. |
