# ApiRichParagraph

表示富文本段落的类。

ApiRichParagraph 是 [ApiRichParaPr](../ApiRichParaPr/ApiRichParaPr.md) 的子类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | 向当前段落添加元素。 |
| [AddText](./Methods/AddText.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 向当前段落添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 创建段落副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前段落。 |
| [GetClassType](./Methods/GetClassType.md) | "richParagraph" | 返回 ApiRichParagraph 类的类型。 |
| [GetElement](./Methods/GetElement.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) \| null \| undefined | 使用指定的位置返回段落元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前段落中的元素数量。 |
| [GetJc](./Methods/GetJc.md) | [HorTextAlign](../Enumeration/HorTextAlign.md) | 返回富文本段落内容的对齐方式。 |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回当前段落中最后一个包含文本的 Run。 |
| [GetNext](./Methods/GetNext.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | 返回下一个段落。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiRichParaPr](../ApiRichParaPr/ApiRichParaPr.md) | 返回段落属性。 |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | 返回段落在其父元素中的位置。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | 返回上一个段落。 |
| [GetText](./Methods/GetText.md) | string | 返回段落文本。 |
| [Last](./Methods/Last.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 返回段落的最后一个元素。 |
| [Push](./Methods/Push.md) | boolean | 向当前段落添加元素。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前段落中移除所有元素。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置富文本段落内容的对齐方式。 |
| [SetParaPr](./Methods/SetParaPr.md) | boolean | 设置段落属性。 |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 指定当前段落的阅读顺序。 |
