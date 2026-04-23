# ApiRichParagraph

表示 ApiRichParagraph 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | 向当前段落添加元素。 |
| [AddText](./Methods/AddText.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 向当前段落添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 创建段落副本。 |
| [GetClassType](./Methods/GetClassType.md) | "richParagraph" | 返回 ApiRichParagraph 类的类型。 |
| [GetElement](./Methods/GetElement.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 使用指定的位置返回段落元素。 |
| [GetNext](./Methods/GetNext.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 返回下一个段落。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiRichParaPr](../ApiRichParaPr/ApiRichParaPr.md) | 返回段落属性。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 返回上一个段落。 |
| [Last](./Methods/Last.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 返回段落的最后一个元素。 |
| [Push](./Methods/Push.md) | boolean | 向当前段落添加元素。 |
| [SetParaPr](./Methods/SetParaPr.md) | boolean | 设置段落属性。 |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) | 指定当前段落的阅读顺序。可能的值有：**null** - 使用标准方向参数；**"ltr"** - 从左到右的文本方向；**"rtl"** - 从右到左的文本方向。 |
