# ApiPresentation

表示演示文稿的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddMaster](./Methods/AddMaster.md) | boolean | 将幻灯片母版添加到演示文稿的幻灯片母版集合。 |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | 向当前演示文稿添加数学公式。 |
| [AddSlide](./Methods/AddSlide.md) | 无 | 在演示文稿末尾追加新幻灯片。 |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | 将主题应用于演示文稿中的所有幻灯片。 |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | 无 | 创建新的历史记录点。 |
| [EnterText](./Methods/EnterText.md) | boolean | 在光标位置向文档添加文本。 |
| [GetActiveShape](./Methods/GetActiveShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | 返回演示文稿中当前选中或正在编辑的形状。 |
| [GetActiveTable](./Methods/GetActiveTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回演示文稿中当前选中或正在编辑的表格。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回包含演示文稿幻灯片中所有图表对象的数组，不包括幻灯片版式和幻灯片母版中的图表对象。 |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前演示文稿中的所有批注。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回演示文稿幻灯片中的所有绘图对象，不包括幻灯片版式和幻灯片母版中的绘图对象。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回包含演示文稿幻灯片中所有图像对象的数组，不包括幻灯片版式和幻灯片母版中的图像对象。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回包含演示文稿幻灯片中所有 OLE 对象的数组，不包括幻灯片版式和幻灯片母版中的 OLE 对象。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回包含演示文稿幻灯片中所有形状对象的数组，不包括幻灯片版式和幻灯片母版中的形状对象。 |
| [GetAllSlideMasters](./Methods/GetAllSlideMasters.md) | [ApiMaster](../ApiMaster/ApiMaster.md)[] | 返回当前演示文稿中所有幻灯片母版的数组。 |
| [GetAllSlides](./Methods/GetAllSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | 返回当前演示文稿中所有幻灯片的数组。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回包含演示文稿幻灯片中所有表格的数组，不包括幻灯片版式和幻灯片母版中的表格。 |
| [GetClassType](./Methods/GetClassType.md) | "presentation" | 返回 ApiPresentation 类的类型。 |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | 返回当前演示文稿的核心属性接口。 |
| [GetCurSlideIndex](./Methods/GetCurSlideIndex.md) | number | 返回当前幻灯片的索引。 |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | 返回光标处的当前句子或当前句子的一部分。 |
| [GetCurrentSlide](./Methods/GetCurrentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null \| undefined | 返回当前幻灯片。 |
| [GetCurrentVisibleSlide](./Methods/GetCurrentVisibleSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | 返回当前可见的幻灯片。 |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | 返回光标处的当前单词或当前单词的一部分。 |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | 返回当前演示文稿的自定义属性。 |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | 检索与演示文稿关联的自定义 XML 管理器。 |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | 返回文档信息： |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回按名称筛选的演示文稿幻灯片中的绘图对象集合，不包括幻灯片版式和幻灯片母版中的绘图对象。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的演示文稿高度。 |
| [GetLoopUntilStopped](./Methods/GetLoopUntilStopped.md) | boolean | 返回演示文稿是否持续循环播放直到用户停止。 |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 按位置返回演示文稿中的幻灯片母版。 |
| [GetMastersCount](./Methods/GetMastersCount.md) | number | 返回幻灯片母版的数量。 |
| [GetSelection](./Methods/GetSelection.md) | [ApiSelection](../ApiSelection/ApiSelection.md) | 返回当前演示文稿中的选择。 |
| [GetSlideByIndex](./Methods/GetSlideByIndex.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null \| undefined | 按位置返回演示文稿中的幻灯片。 |
| [GetSlideCount](./Methods/GetSlideCount.md) | number | 返回幻灯片的数量。 |
| [GetSlidesCount](./Methods/GetSlidesCount.md) | number | 返回幻灯片的数量。 |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) \| null | 按名称返回演示文稿样式。 |
| [GetVisitor](./Methods/GetVisitor.md) | [ApiPresentationVisitor](../ApiPresentationVisitor/ApiPresentationVisitor.md) | 返回用于遍历演示文稿的幻灯片、版式、母版、演讲者备注、图形对象和文本的访问器对象。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的演示文稿宽度。 |
| [InsertFromFile](./Methods/InsertFromFile.md) | number | 将指定文件中的幻灯片插入到当前演示文稿中。 |
| [InsertParagraphBreak](./Methods/InsertParagraphBreak.md) | boolean | 在光标位置向文档添加段落。 |
| [MoveCursorDown](./Methods/MoveCursorDown.md) | boolean | 向下移动光标。 |
| [MoveCursorLeft](./Methods/MoveCursorLeft.md) | boolean | 向左移动光标。 |
| [MoveCursorRight](./Methods/MoveCursorRight.md) | boolean | 向右移动光标。 |
| [MoveCursorUp](./Methods/MoveCursorUp.md) | boolean | 向上移动光标。 |
| [MoveToNextCell](./Methods/MoveToNextCell.md) | boolean | 将光标移动到下一个表格单元格。 |
| [MoveToPrevCell](./Methods/MoveToPrevCell.md) | boolean | 将光标移动到上一个表格单元格。 |
| [RemoveSlide](./Methods/RemoveSlide.md) | boolean | 从演示文稿中移除指定位置的幻灯片。 |
| [RemoveSlides](./Methods/RemoveSlides.md) | boolean | 从演示文稿中移除一系列幻灯片。 |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | 无 | 用指定的图像替换当前图像。 |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | 用指定文本替换光标处的当前句子或当前句子的一部分。如果光标处没有句子（例如，在空段落中），则在光标位置插入指定文本。 |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | 用指定文本替换光标处的当前单词或当前单词的一部分。 |
| [Search](./Methods/Search.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md)[] | 在演示文稿中搜索指定文本，并将找到的所有匹配项作为文本范围返回。 |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | boolean | 在演示文稿中查找并替换文本。 |
| [SelectCurrentSentence](./Methods/SelectCurrentSentence.md) | boolean | 选择光标处的句子。如果存在当前文本选区，则会先将其移除。 |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | boolean | 选择光标处的单词。如果存在当前文本选区，则会先将其移除。 |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | 指定将用于检查拼写和语法的语言（如果需要）。 |
| [SetLoopUntilStopped](./Methods/SetLoopUntilStopped.md) | boolean | 设置演示文稿是否持续循环播放直到用户停止。 |
| [SetSizes](./Methods/SetSizes.md) | 无 | 设置当前演示文稿的大小。 |
| [SlidesToJSON](./Methods/SlidesToJSON.md) | JSON \| null | 将当前 ApiPresentation 对象中的幻灯片转换为 JSON 对象。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiPresentation 对象转换为 JSON 对象。 |
