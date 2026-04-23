# ApiDocumentContent

表示 ApiDocumentContent 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | 使用在文档内容中的位置添加段落、表格或块级内容控件。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 从当前文档内容返回所有段落的数组。 |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | 返回 ApiDocumentContent 类的类型。 |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回光标所在的当前段落。 |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回光标所在的当前文本域。 |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | 通过元素在文档中的位置返回元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前文档中的元素数量。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前文档内容的内部 ID。 |
| [GetText](./Methods/GetText.md) | string | 返回当前文档内容对象的内部文本。 |
| [Push](./Methods/Push.md) | boolean | 推送段落或表格以将其实际添加到文档中。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前文档或当前文档元素中移除所有元素。💡 当所有元素被移除时，会自动创建一个新的空段落。如果要向此段落添加内容，请使用 [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) 方法。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。 |
