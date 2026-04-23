# ApiDocumentContent

表示 ApiDocumentContent 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | 使用在文档内容中的位置添加段落、表格或块级内容控件。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 从文档内容返回图表对象集合。 |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | 从文档内容返回绘图对象集合。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 从文档内容返回图像对象集合。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 从文档内容返回 OLE 对象集合。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档内容返回所有段落的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 从文档内容返回形状对象集合。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 从当前文档内容返回所有表格的数组。 |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | 返回 ApiDocumentContent 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | 从当前 ApiDocumentContent 对象返回文档元素数组。 |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | 返回当前选中的内容控件。 |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回光标所在的当前段落。 |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回光标所在的当前文本域。 |
| [GetDocumentVisitor](./Methods/GetDocumentVisitor.md) | ApiDocumentVisitor | 返回用于遍历当前文档元素的访问器对象。 |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | 通过元素在文档中的位置返回元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前文档中的元素数量。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前文档内容的内部 ID。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示文档内容中包含的文档部分的 Range 对象。 |
| [GetText](./Methods/GetText.md) | string | 返回当前文档内容对象的内部文本。 |
| [IsEndnote](./Methods/IsEndnote.md) | boolean | 检查当前文档内容是否为尾注。 |
| [IsFootnote](./Methods/IsFootnote.md) | boolean | 检查当前文档内容是否为脚注。 |
| [Push](./Methods/Push.md) | boolean | 推送段落或表格以将其实际添加到文档中。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前文档或当前文档元素中移除所有元素。💡 当所有元素被移除时，会自动创建一个新的空段落。如果要向此段落添加内容，请使用 [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) 方法。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。 |
| [SelectNoteReference](./Methods/SelectNoteReference.md) | boolean | 选择此脚注/尾注的引用。如果此文档内容不是脚注/尾注，则不执行任何操作。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiDocumentContent 对象转换为 JSON 对象。 |
