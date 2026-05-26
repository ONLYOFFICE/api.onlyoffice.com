# ApiParagraph

ApiParagraph is a subclass of [ApiParaPr](../ApiParaPr/ApiParaPr.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBookmarkCrossRef](./Methods/AddBookmarkCrossRef.md) | boolean | Adds a bookmark cross-reference to the current paragraph. |
| [AddCaption](./Methods/AddCaption.md) | boolean | Adds a caption paragraph after (or before) the current paragraph. |
| [AddCaptionCrossRef](./Methods/AddCaptionCrossRef.md) | boolean | Adds a caption cross-reference to the current paragraph. |
| [AddColumnBreak](./Methods/AddColumnBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a column break to the current position and starts the next element from a new column. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current paragraph. |
| [AddDrawing](./Methods/AddDrawing.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a drawing object (image, shape or chart) to the current paragraph. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the current paragraph. |
| [AddEndnoteCrossRef](./Methods/AddEndnoteCrossRef.md) | boolean | Adds an endnote cross-reference to the current paragraph. |
| [AddFootnoteCrossRef](./Methods/AddFootnoteCrossRef.md) | boolean | Adds a footnote cross-reference to the current paragraph. |
| [AddHeadingCrossRef](./Methods/AddHeadingCrossRef.md) | boolean | Adds a heading cross-reference to the current paragraph. |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | Adds a hyperlink to a paragraph. |
| [AddInlineLvlSdt](./Methods/AddInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Adds an inline container. |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a line break to the current position and starts the next element from a new line. |
| [AddNumberedCrossRef](./Methods/AddNumberedCrossRef.md) | boolean | Adds a numbered cross-reference to the current paragraph. |
| [AddPageBreak](./Methods/AddPageBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a page break and starts the next element from the next page. |
| [AddPageBreakBefore](./Methods/AddPageBreakBefore.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Forces a page break before the paragraph. |
| [AddPageNumber](./Methods/AddPageNumber.md) | [ApiRun](../ApiRun/ApiRun.md) | Inserts a number of the current document page into the paragraph. |
| [AddPagesCount](./Methods/AddPagesCount.md) | [ApiRun](../ApiRun/ApiRun.md) | Inserts a number of pages in the current document into the paragraph. |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a tab stop to the current paragraph. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds some text to the current paragraph. |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a paragraph copy. Ingnore comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current paragraph. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects in the paragraph. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a collection of content control objects in the paragraph. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects in the paragraph. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects in the paragraph. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects in the paragraph. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects in the paragraph. |
| [GetBetweenBorder](./Methods/GetBetweenBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the between border of the current paragraph. |
| [GetBottomBorder](./Methods/GetBottomBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the bottom border of the current paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | Returns a type of the ApiParagraph class. |
| [GetContextualSpacing](./Methods/GetContextualSpacing.md) | boolean \| undefined | Returns the contextual spacing value of the current paragraph. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns a paragraph element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current paragraph. |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | Returns all font names from all elements inside the current paragraph. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current content paragraph. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetKeepLines](./Methods/GetKeepLines.md) | boolean \| undefined | Returns the keep lines value of the current paragraph. |
| [GetKeepNext](./Methods/GetKeepNext.md) | boolean \| undefined | Returns the keep next value of the current paragraph. |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the last Run with text in the current paragraph. |
| [GetLeftBorder](./Methods/GetLeftBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the left border of the current paragraph. |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the next paragraph. |
| [GetNumPr](./Methods/GetNumPr.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) \| undefined | Returns the numbering level for the current paragraph referencing the numbering definition instance in the current document. |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) | Returns the numbering definition and numbering level for the numbered list. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number \| undefined | Returns the outline level of the specified properties. |
| [GetPageBreakBefore](./Methods/GetPageBreakBefore.md) | boolean \| undefined | Returns the page break before value of the current paragraph. |
| [GetParaId](./Methods/GetParaId.md) | number | Returns a unique ID for the current paragraph. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties. |
| [GetParagraphMarkTextPr](./Methods/GetParagraphMarkTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties of the paragraph mark which is used to mark the paragraph end. The mark can also acquire |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a content control that contains the current paragraph. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current paragraph. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current paragraph. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the paragraph position within its parent element. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the previous paragraph. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the part of the document contained in the specified paragraph. |
| [GetRightBorder](./Methods/GetRightBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the right border of the current paragraph. |
| [GetSection](./Methods/GetSection.md) | [ApiSection](../ApiSection/ApiSection.md) | Returns the paragraph section. |
| [GetShd](./Methods/GetShd.md) | [Shd](../Enumeration/Shd.md) \| undefined | Returns the shading applied to the contents of the paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the paragraph style method. |
| [GetTabs](./Methods/GetTabs.md) | [TabStop](../Enumeration/TabStop.md)[] | Returns the custom tab stops of the current paragraph. |
| [GetText](./Methods/GetText.md) | string | Returns the paragraph text. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties for a paragraph end mark. |
| [GetTopBorder](./Methods/GetTopBorder.md) | [Border](../Enumeration/Border.md) \| undefined | Returns the top border of the current paragraph. |
| [GetWidowControl](./Methods/GetWidowControl.md) | boolean \| undefined | Returns the widow control value of the current paragraph. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the paragraph object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Inserts a paragraph at the specified position. |
| [Last](./Methods/Last.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns the last element of the paragraph. |
| [MoveCursorToEnd](./Methods/MoveCursorToEnd.md) | boolean | Moves the cursor to the end of the paragraph. |
| [MoveCursorToStart](./Methods/MoveCursorToStart.md) | boolean | Moves the cursor to the start of the paragraph. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the current paragraph. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current paragraph. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | Replaces the current paragraph with a new element. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a paragraph object. The search results are a collection of ApiRange objects. |
| [Select](./Methods/Select.md) | boolean | Selects the current paragraph. |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings. |
| [SetBold](./Methods/SetBold.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the bold property to the text character. |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings. |
| [SetCaps](./Methods/SetCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the text color to the current paragraph. |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | Specifies that any space before or after this paragraph set using the  |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the font size to the characters of the current paragraph. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies a highlighting color which is applied as a background to the contents of the current paragraph. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | Sets the paragraph right side indentation. |
| [SetItalic](./Methods/SetItalic.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the italic property to the text character. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the paragraph contents justification. |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible. |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | Specifies the border which will be displayed at the left side of the page around the specified paragraph. |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | Specifies that the current paragraph references a numbering definition instance in the current document. |
| [SetNumbering](./Methods/SetNumbering.md) | boolean | Specifies that the current paragraph references the numbering definition instance in the current document. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at |
| [SetParaId](./Methods/SetParaId.md) | boolean | Specifies a unique ID for the current paragraph. |
| [SetPosition](./Methods/SetPosition.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies an amount by which text is raised or lowered for this paragraph in relation to the default |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies the reading order for the current paragraph. |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | Specifies the border which will be displayed at the right side of the page around the specified paragraph. |
| [SetSection](./Methods/SetSection.md) | boolean | Sets the specified section to the current paragraph. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading applied to the contents of the paragraph. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that all the small letter characters in this paragraph are formatted for display only as their capital |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the text spacing measured in twentieths of a point. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line. |
| [SetStyle](./Methods/SetStyle.md) | boolean | The paragraph style base method. |
| [SetTabs](./Methods/SetTabs.md) | boolean | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | Replaces the paragraph content with the specified text. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the paragraph text properties. |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text: |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |
| [ToHtml](./Methods/ToHtml.md) | string | Converts the paragraph to HTML. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParagraph object into the JSON object. |
| [WrapInMailMergeField](./Methods/WrapInMailMergeField.md) | boolean | Wraps the paragraph content in a mail merge field. |
