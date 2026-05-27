# ApiParaPr

Represents the ApiParaPr class.

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetBetweenBorder](./Methods/GetBetweenBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the between border of the current paragraph. |
| [GetBottomBorder](./Methods/GetBottomBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the bottom border of the current paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | Returns a type of the ApiParaPr class. |
| [GetContextualSpacing](./Methods/GetContextualSpacing.md) | boolean \| undefined | Returns the contextual spacing value of the current paragraph. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetKeepLines](./Methods/GetKeepLines.md) | boolean \| undefined | Returns the keep lines value of the current paragraph. |
| [GetKeepNext](./Methods/GetKeepNext.md) | boolean \| undefined | Returns the keep next value of the current paragraph. |
| [GetLeftBorder](./Methods/GetLeftBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the left border of the current paragraph. |
| [GetNumPr](./Methods/GetNumPr.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) \| undefined | Returns the numbering level for the current paragraph referencing the numbering definition instance in the current document. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number \| undefined | Returns the outline level of the specified properties. |
| [GetPageBreakBefore](./Methods/GetPageBreakBefore.md) | boolean \| undefined | Returns the page break before value of the current paragraph. |
| [GetRightBorder](./Methods/GetRightBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the right border of the current paragraph. |
| [GetShd](./Methods/GetShd.md) | [Shd](../Enumeration/Shd.md) \| undefined | Returns the shading applied to the contents of the paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the paragraph style method. |
| [GetTabs](./Methods/GetTabs.md) | [TabStop](../Enumeration/TabStop.md)[] | Returns the custom tab stops of the current paragraph. |
| [GetTopBorder](./Methods/GetTopBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the top border of the current paragraph. |
| [GetWidowControl](./Methods/GetWidowControl.md) | boolean \| undefined | Returns the widow control value of the current paragraph. |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings. |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings. |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | Specifies that any space before or after this paragraph set using the  |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | Sets the paragraph right side indentation. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the paragraph contents justification. |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible. |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | Specifies the border which will be displayed at the left side of the page around the specified paragraph. |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | Specifies that the current paragraph references a numbering definition instance in the current document. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | Specifies the border which will be displayed at the right side of the page around the specified paragraph. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading applied to the contents of the paragraph. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  |
| [SetStyle](./Methods/SetStyle.md) | boolean | The paragraph style base method. |
| [SetTabs](./Methods/SetTabs.md) | boolean | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings. |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParaPr object into the JSON object. |
