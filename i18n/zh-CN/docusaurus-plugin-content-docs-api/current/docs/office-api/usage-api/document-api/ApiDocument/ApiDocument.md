# ApiDocument

ApiDocument 是 [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AcceptAllRevisionChanges](./Methods/AcceptAllRevisionChanges.md) | boolean | 接受在审阅模式下所做的所有更改。 |
| [AddCheckBoxContentControl](./Methods/AddCheckBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 向文档添加新的复选框内容控件。 |
| [AddComboBoxContentControl](./Methods/AddComboBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 向文档添加新的组合框内容控件。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前文档选区添加批注，如果未选择文本，则向当前单词添加批注。 |
| [AddDatePickerContentControl](./Methods/AddDatePickerContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 向文档添加新的日期选择器内容控件。 |
| [AddDrawingToPage](./Methods/AddDrawingToPage.md) | boolean | 向指定页面添加绘图。 |
| [AddDropDownListContentControl](./Methods/AddDropDownListContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 向文档添加新的下拉列表内容控件。 |
| [AddElement](./Methods/AddElement.md) | boolean | 使用在文档内容中的位置添加段落、表格或块级内容控件。 |
| [AddEndnote](./Methods/AddEndnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 为选定文本添加尾注（如果没有选区，则为当前位置添加）。 |
| [AddFootnote](./Methods/AddFootnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 为选定文本添加脚注（如果没有选区，则为当前位置添加）。 |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | 向当前文档添加数学公式。 |
| [AddParagraph](./Methods/AddParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建新段落并将其追加到文档内容的末尾。 |
| [AddPictureContentControl](./Methods/AddPictureContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 向文档添加新的图片内容控件。 |
| [AddTableOfContents](./Methods/AddTableOfContents.md) | boolean | 向当前文档添加目录。 |
| [AddTableOfFigures](./Methods/AddTableOfFigures.md) | boolean | 向当前文档添加图表目录。 |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | 将指定文本追加到文档内容的末尾。 |
| [ClearAllFields](./Methods/ClearAllFields.md) | boolean | 清除文档中的所有表单。 |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | boolean | 创建新的历史记录点。 |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | 创建具有指定类型的抽象多级编号。 |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建新的空段落。 |
| [CreateSection](./Methods/CreateSection.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | 创建在指定段落处结束的新文档节。允许为当前 |
| [CreateStyle](./Methods/CreateStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 使用指定的类型和名称创建新样式。如果已存在具有指定名称的样式，将返回该样式而不创建新样式。 |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | 创建具有指定行数和列数的新表格。 |
| [DeleteBookmark](./Methods/DeleteBookmark.md) | boolean | 从文档中移除书签（如果存在）。 |
| [EnterText](./Methods/EnterText.md) | boolean | 在光标位置向文档添加文本。 |
| [GetAllBookmarksNames](./Methods/GetAllBookmarksNames.md) | string[] | 返回当前文档中所有书签名称的数组。 |
| [GetAllCaptionParagraphs](./Methods/GetAllCaptionParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档返回指定类型的所有题注段落。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 从文档内容返回图表对象集合。 |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前文档中的所有批注。 |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | 返回文档中所有内容控件的列表。 |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | 从文档内容返回绘图对象集合。 |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中所有现有表单。 |
| [GetAllHeadingParagraphs](./Methods/GetAllHeadingParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档返回所有标题段落。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 从文档内容返回图像对象集合。 |
| [GetAllNumberedParagraphs](./Methods/GetAllNumberedParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档返回所有编号段落。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 从文档内容返回 OLE 对象集合。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档内容返回所有段落的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 从文档内容返回形状对象集合。 |
| [GetAllStyles](./Methods/GetAllStyles.md) | [ApiStyle](../ApiStyle/ApiStyle.md)[] | 返回当前文档的所有样式。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 从当前文档内容返回所有表格的数组。 |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回给定绝对页面上的表格集合。 |
| [GetBookmark](./Methods/GetBookmark.md) | [ApiBookmark](../ApiBookmark/ApiBookmark.md) | 从当前文档中按名称返回书签。 |
| [GetBookmarkRange](./Methods/GetBookmarkRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回书签范围。 |
| [GetClassType](./Methods/GetClassType.md) | "document" | 返回 ApiDocument 类的类型。 |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | 通过 ID 从当前文档返回批注。 |
| [GetCommentsReport](./Methods/GetCommentsReport.md) | [CommentReport](../Enumeration/CommentReport.md) | 返回有关添加到文档的所有批注的报告。 |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | 从当前 ApiDocumentContent 对象返回文档元素数组。 |
| [GetContentControlsByTag](./Methods/GetContentControlsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | 返回文档中具有指定标签名称的所有内容控件的列表。 |
| [GetControlsHighlight](./Methods/GetControlsHighlight.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回当前文档中内容控件的高亮颜色。 |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | 检索当前文档的核心属性接口。 |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | 返回当前选中的内容控件。 |
| [GetCurrentFootEndnote](./Methods/GetCurrentFootEndnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 如果光标当前在脚注或尾注内，则返回脚注或尾注内容，否则返回 null。 |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | 返回当前页面的索引。 |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回光标所在的当前段落。 |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回光标所在的当前文本域。 |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | 返回当前句子或当前句子的一部分。 |
| [GetCurrentVisiblePages](./Methods/GetCurrentVisiblePages.md) | number[] | 返回当前可见页面的索引。 |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | 返回当前单词或当前单词的一部分。 |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | 从文档检索自定义属性。 |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | 检索与文档关联的自定义 XML 管理器。 |
| [GetDefaultParaPr](./Methods/GetDefaultParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 返回当前文档中的默认段落属性集。 |
| [GetDefaultStyle](./Methods/GetDefaultStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 返回指定文档元素的默认样式参数。 |
| [GetDefaultTextPr](./Methods/GetDefaultTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回当前文档中文本域的默认属性集。 |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | 返回文档信息： |
| [GetDocumentVisitor](./Methods/GetDocumentVisitor.md) | ApiDocumentVisitor | 返回用于遍历当前文档元素的访问器对象。 |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | 返回按名称筛选的文档绘图对象集合。 |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | 通过元素在文档中的位置返回元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前文档中的元素数量。 |
| [GetEndNotesFirstParagraphs](./Methods/GetEndNotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 返回当前文档中所有尾注的第一个段落。 |
| [GetFinalSection](./Methods/GetFinalSection.md) | [ApiSection](../ApiSection/ApiSection.md) | 返回文档的最后一节。 |
| [GetFootnotesFirstParagraphs](./Methods/GetFootnotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 返回当前文档中所有脚注的第一个段落。 |
| [GetFormKeysByRole](./Methods/GetFormKeysByRole.md) | string[] | 返回附加到指定角色的所有表单键的列表。 |
| [GetFormValueByKey](./Methods/GetFormValueByKey.md) | null \| boolean \| string | 返回指定键的表单值。对于一组单选按钮，返回 Choice，即所选项目的名称。 |
| [GetFormsByKey](./Methods/GetFormsByKey.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定键的所有表单的列表。 |
| [GetFormsByRole](./Methods/GetFormsByRole.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定角色名称的所有表单的列表。 |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定标签名称的所有表单的列表。 |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | 返回当前文档中所有表单的数据。 |
| [GetFormsHighlight](./Methods/GetFormsHighlight.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回文档中表单的高亮颜色。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前文档内容的内部 ID。 |
| [GetPageCount](./Methods/GetPageCount.md) | number | 返回当前文档的页数。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定文档中包含的文档部分的 Range 对象。 |
| [GetRangeBySelect](./Methods/GetRangeBySelect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 通过当前选区返回范围对象。 |
| [GetReviewReport](./Methods/GetReviewReport.md) | [ReviewReport](../Enumeration/ReviewReport.md) | 返回有关在审阅模式下对文档所做的每个更改的报告。 |
| [GetSections](./Methods/GetSections.md) | [ApiSection](../ApiSection/ApiSection.md)[] | 返回文档中的节对象集合。 |
| [GetSelectedDrawings](./Methods/GetSelectedDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回当前文档中所有选中的绘图。 |
| [GetStatistics](./Methods/GetStatistics.md) | object | 返回以对象形式表示的文档统计信息，包含以下参数： |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) \| null | 按名称返回样式。 |
| [GetTagsOfAllContentControls](./Methods/GetTagsOfAllContentControls.md) | String[] | 返回文档中所有内容控件使用的所有标签的列表。 |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | 返回文档中所有表单使用的所有标签的列表。 |
| [GetText](./Methods/GetText.md) | string | 返回当前文档内容对象的内部文本。 |
| [GetWatermarkSettings](./Methods/GetWatermarkSettings.md) | [ApiWatermarkSettings](../ApiWatermarkSettings/ApiWatermarkSettings.md) | 返回当前文档中的水印设置。 |
| [GoToPage](./Methods/GoToPage.md) | boolean | 将光标移动到文档中指定页面的开头。 |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | 在当前文档中将绘图数组分组。 |
| [InsertBlankPage](./Methods/InsertBlankPage.md) | boolean | 在当前位置插入空白页。 |
| [InsertContent](./Methods/InsertContent.md) | boolean | 将元素数组插入到文档的当前位置。 |
| [InsertParagraphBreak](./Methods/InsertParagraphBreak.md) | boolean | 在光标位置向文档添加段落。 |
| [InsertWatermark](./Methods/InsertWatermark.md) | boolean | 在每个文档页面上插入水印。 |
| [IsEndnote](./Methods/IsEndnote.md) | boolean | 检查当前文档内容是否为尾注。 |
| [IsFootnote](./Methods/IsFootnote.md) | boolean | 检查当前文档内容是否为脚注。 |
| [IsTrackRevisions](./Methods/IsTrackRevisions.md) | boolean | 检查是否启用了修订跟踪模式。 |
| [Last](./Methods/Last.md) | [DocumentElement](../Enumeration/DocumentElement.md) | 返回最后一个文档元素。 |
| [MoveCursorDown](./Methods/MoveCursorDown.md) | boolean | 向下移动光标。 |
| [MoveCursorLeft](./Methods/MoveCursorLeft.md) | boolean | 向左移动光标。 |
| [MoveCursorRight](./Methods/MoveCursorRight.md) | boolean | 向右移动光标。 |
| [MoveCursorToEnd](./Methods/MoveCursorToEnd.md) | boolean | 将光标移动到文档末尾。 |
| [MoveCursorToNoteReference](./Methods/MoveCursorToNoteReference.md) | boolean | 将光标移动到主文档中此脚注/尾注的引用处。如果此文档内容不是脚注/尾注，则不执行任何操作。 |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | 将光标移动到当前文档的指定位置。 |
| [MoveCursorToStart](./Methods/MoveCursorToStart.md) | boolean | 将光标移动到文档开头。 |
| [MoveCursorUp](./Methods/MoveCursorUp.md) | boolean | 向上移动光标。 |
| [Push](./Methods/Push.md) | boolean | 推送段落或表格以将其实际添加到文档中。 |
| [RejectAllRevisionChanges](./Methods/RejectAllRevisionChanges.md) | boolean | 拒绝在审阅模式下所做的所有更改。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前文档或当前文档元素中移除所有元素。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。 |
| [RemoveSelection](./Methods/RemoveSelection.md) | boolean | 移除当前选区。 |
| [RemoveWatermark](./Methods/RemoveWatermark.md) | boolean | 从当前文档移除水印。 |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | boolean | 用指定的图像替换当前图像。 |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | 用指定的文本替换当前句子或当前句子的一部分。 |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | 用指定的文本替换当前单词或当前单词的一部分。 |
| [ReplaceDrawing](./Methods/ReplaceDrawing.md) | boolean | 用新绘图替换绘图。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 搜索文档对象的范围。搜索结果是 ApiRange 对象的集合。 |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | boolean | 查找并替换文本。 |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | object | 如果可能，选择当前单词。 |
| [SelectNoteReference](./Methods/SelectNoteReference.md) | boolean | 选择此脚注/尾注的引用。如果此文档内容不是脚注/尾注，则不执行任何操作。 |
| [SetAssistantTrackRevisions](./Methods/SetAssistantTrackRevisions.md) | boolean | 在文档中启用或禁用 AI 辅助修订跟踪。 |
| [SetControlsHighlight](./Methods/SetControlsHighlight.md) | boolean | 为当前文档中的内容控件设置突出显示。 |
| [SetEvenAndOddHdrFtr](./Methods/SetEvenAndOddHdrFtr.md) | boolean | 指定此文档中的节是否对奇偶 |
| [SetFormsData](./Methods/SetFormsData.md) | boolean | 将数据设置到指定的表单。 |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | boolean | 为文档中的表单设置突出显示。 |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | 用指定的文本替换当前文档内容对象的所有内容， |
| [SetTrackRevisions](./Methods/SetTrackRevisions.md) | boolean | 设置修订跟踪模式。 |
| [SetWatermarkSettings](./Methods/SetWatermarkSettings.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 设置当前文档中的水印设置。 |
| [ShowComment](./Methods/ShowComment.md) | boolean | 通过 ID 显示批注。 |
| [ToHtml](./Methods/ToHtml.md) | string | 将文档转换为 HTML。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiDocument 对象转换为 JSON 对象。 |
| [ToMarkdown](./Methods/ToMarkdown.md) | string | 将文档转换为 Markdown。 |
| [UpdateAllFields](./Methods/UpdateAllFields.md) | boolean | 更新文档中的所有域。 |
| [UpdateAllTOC](./Methods/UpdateAllTOC.md) | boolean | 更新当前文档中的所有目录。 |
| [UpdateAllTOF](./Methods/UpdateAllTOF.md) | boolean | 更新当前文档中的所有图表目录。 |
