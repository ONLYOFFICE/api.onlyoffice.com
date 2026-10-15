# ApiHyperlink

表示超链接的类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Address | string | 返回或设置目标文档的地址。 |
| Name | string | 返回超链接的名称。 |
| Range | [ApiRange](../ApiRange/ApiRange.md) | 返回超链接所附加到的范围。 |
| ScreenTip | string | 返回或设置超链接的屏幕提示文本。 |
| SubAddress | string | 返回或设置目标文档的子地址。 |
| TextToDisplay | string | 返回或设置超链接的显示文本。 |
| Type | number | 返回超链接的类型。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | 无 | 删除超链接。 |
| [GetAddress](./Methods/GetAddress.md) | string | 返回目标文档的地址。 |
| [GetClassType](./Methods/GetClassType.md) | "hyperlink" | 返回 ApiHyperlink 类的类型。 |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) \| null \| undefined | 使用指定的位置返回超链接元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前超链接中的元素数量。 |
| [GetLinkedText](./Methods/GetLinkedText.md) | string | 返回超链接地址。 |
| [GetName](./Methods/GetName.md) | string | 返回超链接的名称。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回超链接所附加到的范围。 |
| [GetScreenTip](./Methods/GetScreenTip.md) | string | 返回超链接的屏幕提示文本。 |
| [GetScreenTipText](./Methods/GetScreenTipText.md) | string | 返回超链接的屏幕提示文本。 |
| [GetSubAddress](./Methods/GetSubAddress.md) | string | 返回目标文档的子地址。 |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回表示当前超链接中所含部分文本的 ApiTextRange 对象。 |
| [GetTextToDisplay](./Methods/GetTextToDisplay.md) | string | 返回超链接的显示文本。 |
| [GetType](./Methods/GetType.md) | number | 返回超链接的类型。 |
| [SetAddress](./Methods/SetAddress.md) | 无 | 设置目标文档的地址。 |
| [SetLink](./Methods/SetLink.md) | boolean | 设置超链接地址。 |
| [SetScreenTip](./Methods/SetScreenTip.md) | 无 | 设置超链接的屏幕提示文本。 |
| [SetScreenTipText](./Methods/SetScreenTipText.md) | boolean | 设置超链接的屏幕提示文本。 |
| [SetSubAddress](./Methods/SetSubAddress.md) | 无 | 设置目标文档的子地址。 |
| [SetTextToDisplay](./Methods/SetTextToDisplay.md) | 无 | 设置超链接的显示文本。 |
