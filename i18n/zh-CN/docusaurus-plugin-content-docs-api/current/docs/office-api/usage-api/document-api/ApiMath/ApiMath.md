# ApiMath

表示数学公式的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "math" | 返回 ApiMath 类的类型。 |
| [GetParent](./Methods/GetParent.md) | [ParagraphLikeContainer](../Enumeration/ParagraphLikeContainer.md) \| null \| undefined | 返回直接包含当前数学元素的父元素（段落或内联内容控件）。 |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | 返回当前数学元素在其父元素中的位置（索引）。 |
| [GetText](./Methods/GetText.md) | string | 返回当前数学元素的内部文本。 |
