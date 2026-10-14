# ApiRichRun

表示称为“run”的小文本块的类。

ApiRichRun 是 [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) 的子类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddText](./Methods/AddText.md) | boolean | 向当前文本块添加文本。 |
| [ClearContent](./Methods/ClearContent.md) | boolean | 清除当前文本块中的内容。 |
| [Copy](./Methods/Copy.md) | [ApiRichRun](../ApiRichRun/ApiRichRun.md) | 创建当前文本块的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前文本块。 |
| [GetBold](./Methods/GetBold.md) | boolean \| null \| undefined | 从当前文本属性获取粗体属性。 |
| [GetClassType](./Methods/GetClassType.md) | "richRun" | 返回 ApiRichRun 类的类型。 |
| [GetColor](./Methods/GetColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null \| undefined | 从当前文本属性获取 RGB 颜色。 |
| [GetFontFamily](./Methods/GetFontFamily.md) | string \| null \| undefined | 返回当前文本属性中的字体系列。 |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) \| null \| undefined | 从当前文本属性获取字体大小。 |
| [GetItalic](./Methods/GetItalic.md) | boolean \| null \| undefined | 从当前文本属性获取斜体属性。 |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiRichParagraph](../ApiRichParagraph/ApiRichParagraph.md) \| null \| undefined | 返回当前文本块的父段落。 |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean \| null \| undefined | 从当前文本属性获取删除线属性。 |
| [GetText](./Methods/GetText.md) | string | 从文本块返回文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 返回当前文本块的文本属性。 |
| [GetUnderline](./Methods/GetUnderline.md) | boolean \| null \| undefined | 从当前文本属性获取下划线属性。 |
| [GetVertAlign](./Methods/GetVertAlign.md) | [TextVertAlign](../Enumeration/TextVertAlign.md) | 从当前文本属性获取垂直对齐类型。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前文本块中移除所有元素。 |
| [SetBold](./Methods/SetBold.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 为文本字符设置粗体属性。 |
| [SetColor](./Methods/SetColor.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 设置当前文本块的文本颜色。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 设置当前文本块字符的字体大小。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 为文本字符设置斜体属性。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 指定文本块的内容显示为中间有一条水平线穿过。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 设置当前文本块的文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 指定文本块的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiRichTextPr](../ApiRichTextPr/ApiRichTextPr.md) | 指定将应用于文本域内容的对齐方式，相对于文本域文本的默认外观： |
