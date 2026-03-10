# ApiParagraph

表示 ApiParagraph 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddBookmarkCrossRef](./Methods/AddBookmarkCrossRef.md) | boolean | 向当前段落添加书签交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddCaption](./Methods/AddCaption.md) | boolean | 在当前段落之后（或之前）添加题注段落。💡 请注意，当前段落必须在文档中（不在页脚/页眉中）。如果当前段落位于形状中，则题注将添加到父形状之后（或之前）。 |
| [AddCaptionCrossRef](./Methods/AddCaptionCrossRef.md) | boolean | 向当前段落添加题注交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddColumnBreak](./Methods/AddColumnBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | 在当前位置添加分栏符，并从新栏开始下一个元素。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前段落添加批注。💡 请注意，此段落必须在文档中。 |
| [AddDrawing](./Methods/AddDrawing.md) | [ApiRun](../ApiRun/ApiRun.md) | 向当前段落添加图形对象（图像、形状或图表）。 |
| [AddElement](./Methods/AddElement.md) | boolean | 向当前段落添加元素。 |
| [AddEndnoteCrossRef](./Methods/AddEndnoteCrossRef.md) | boolean | 向当前段落添加尾注交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddFootnoteCrossRef](./Methods/AddFootnoteCrossRef.md) | boolean | 向当前段落添加脚注交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddHeadingCrossRef](./Methods/AddHeadingCrossRef.md) | boolean | 向当前段落添加标题交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | 向段落添加超链接。 |
| [AddInlineLvlSdt](./Methods/AddInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 添加行内容器。 |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | 在当前位置添加换行符，并从新行开始下一个元素。 |
| [AddNumberedCrossRef](./Methods/AddNumberedCrossRef.md) | boolean | 向当前段落添加编号交叉引用。💡 请注意，此段落必须在文档中。 |
| [AddPageBreak](./Methods/AddPageBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | 添加分页符，并从下一页开始下一个元素。 |
| [AddPageNumber](./Methods/AddPageNumber.md) | [ApiRun](../ApiRun/ApiRun.md) | 将当前文档页码插入到段落中。 |
| [AddPagesCount](./Methods/AddPagesCount.md) | [ApiRun](../ApiRun/ApiRun.md) | 将当前文档的总页数插入到段落中。 |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | 向当前段落添加制表位。 |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | 向当前段落添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建段落副本。忽略批注、脚注引用和复杂域。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前段落。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回段落中的图表对象集合。 |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | 返回段落中的内容控件对象集合。 |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回段落中的图形对象集合。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回段落中的图像对象集合。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回段落中的 OLE 对象集合。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回段落中的形状对象集合。 |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | 返回 ApiParagraph 类的类型。 |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | 使用指定的位置返回段落元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前段落中的元素数量。 |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | 返回当前段落中所有元素的所有字体名称。 |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落首行缩进。 |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落左侧缩进。 |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落右侧缩进。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前内容段落的内部 ID。 |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | 返回段落内容对齐方式。 |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回当前段落中最后一个包含文本的 Run。 |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回下一个段落。 |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) | 返回编号列表的编号定义和编号级别。 |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | 返回指定属性的大纲级别。 |
| [GetParaId](./Methods/GetParaId.md) | number | 返回当前段落的唯一 ID。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 返回段落属性。 |
| [GetParagraphMarkTextPr](./Methods/GetParagraphMarkTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回用于标记段落结尾的段落标记的文本属性。该标记也可以具有常见的文本属性，如粗体、斜体、下划线等。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | 返回包含当前段落的内容控件。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含当前段落的表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含当前段落的表格单元格。 |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | 返回段落在其父元素中的位置。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回上一个段落。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示指定段落中所包含文档部分的 Range 对象。在调用此方法之前，段落必须已附加到文档。 |
| [GetSection](./Methods/GetSection.md) | [ApiSection](../ApiSection/ApiSection.md) | 返回段落所在的节。 |
| [GetShd](./Methods/GetShd.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回应用于段落内容的底纹。 |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段后间距值。 |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段前间距值。 |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | 返回段落行距规则。 |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | 返回段落行距值。 |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 返回段落样式方法。 |
| [GetText](./Methods/GetText.md) | string | 返回段落文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回段落结束标记的文本属性。 |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 用富文本内容控件包装段落对象。 |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 在指定位置插入段落。 |
| [Last](./Methods/Last.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | 返回段落的最后一个元素。 |
| [Push](./Methods/Push.md) | boolean | 向当前段落添加元素。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前段落中移除所有元素。💡 当从段落中移除所有元素时，将自动创建一个新的空 Run。如果要向此 Run 添加内容，请使用 [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) 方法。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。💡 如果移除的元素是段落的最后一个元素（即所有元素都从段落中移除），将自动创建一个新的空 Run。如果要向此 Run 添加内容，请使用 [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) 方法。 |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | 用新元素替换当前段落。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 在段落对象的范围内搜索。搜索结果是 ApiRange 对象的集合。 |
| [Select](./Methods/Select.md) | boolean | 选择当前段落。 |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。 |
| [SetBold](./Methods/SetBold.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 为文本字符设置粗体属性。 |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落下方显示的边框。💡 连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落中的任何小写字符仅格式化显示为其对应的大写字母。 |
| [SetColor](./Methods/SetColor.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 设置当前段落的文本颜色。 |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | 指定当前后段落具有相同段落样式时，使用 [ApiParaPr#SetSpacingBefore](../ApiParaPr/Methods/SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](../ApiParaPr/Methods/SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示为每个字符都有两条水平线穿过。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 设置当前段落字符的字体大小。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定应用于当前段落内容背景的高亮颜色。 |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | 设置段落首行缩进。 |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | 设置段落左侧缩进。 |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | 设置段落右侧缩进。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 为文本字符设置斜体属性。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置段落内容对齐方式。 |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | 指定在使用页面视图呈现文档时，尽可能将当前段落的所有行保持在同一页上。 |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | 指定在使用分页视图呈现文档时，尽可能将当前段落的内容至少部分地与下一段落呈现在同一页上。 |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | 指定将在指定段落周围的页面左侧显示的边框。 |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | 指定当前段落引用当前文档中的编号定义实例。 |
| [SetNumbering](./Methods/SetNumbering.md) | boolean | 指定当前段落引用当前文档中的编号定义实例。 |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | 设置指定属性的大纲级别。 |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | 指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。 |
| [SetParaId](./Methods/SetParaId.md) | boolean | 为当前段落指定唯一 ID。 |
| [SetPosition](./Methods/SetPosition.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的文本相对于周围非定位文本的默认基线升高或降低的量。 |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定当前段落的阅读顺序。可能的值有：**null** - 使用标准方向参数；**"ltr"** - 从左到右的文本方向；**"rtl"** - 从右到左的文本方向。 |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | 指定将在指定段落周围的页面右侧显示的边框。 |
| [SetSection](./Methods/SetSection.md) | boolean | 将指定的节设置到当前段落。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于段落内容的底纹。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | 设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则 nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则将其解释为 false。 |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | 设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则 nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则将其解释为 false。 |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | 设置段落行距。如果 sLineRule 参数的值为 "atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果 sLineRule 参数的值为 "auto"，则 nLine 参数的值将被解释为行的 240 分之一。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示为中间有一条水平线穿过。 |
| [SetStyle](./Methods/SetStyle.md) | boolean | 段落样式基础方法。💡 此方法本身不单独使用，它仅构成 [ApiParagraph#SetStyle](../ApiParagraph/Methods/SetStyle.md) 方法的基础，该方法为段落设置选定或创建的样式。 |
| [SetTabs](./Methods/SetTabs.md) | boolean | 指定将用于当前段落中任何制表符的自定义制表位序列。**警告**：aPos 数组和 aVal 数组的长度**必须**相等。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置段落文本属性。 |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落上方显示的边框。💡 连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 指定将应用于此段落内容相对于段落文本默认外观的对齐方式：**"baseline"** - 当前段落中的字符将按默认文本基线对齐。**"subscript"** - 当前段落中的字符将对齐到默认文本基线下方。**"superscript"** - 当前段落中的字符将对齐到默认文本基线上方。 |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | 指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiParagraph 对象转换为 JSON 对象。 |
| [WrapInMailMergeField](./Methods/WrapInMailMergeField.md) | boolean | 将段落内容包装在邮件合并域中。 |
