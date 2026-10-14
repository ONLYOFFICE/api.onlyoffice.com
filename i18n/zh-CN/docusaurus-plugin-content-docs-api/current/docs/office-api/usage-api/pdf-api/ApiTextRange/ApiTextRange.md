# ApiTextRange

表示演示文稿形状文本框架中文本范围的类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| End | number | 返回或设置当前范围的结束位置。 |
| Start | number | 返回或设置当前范围的起始位置。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null \| undefined | 向当前文本范围添加超链接。 |
| [AddText](./Methods/AddText.md) | boolean | 在指定位置添加文本。当前范围会扩展以包含添加的文本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前文本范围的内容。 |
| [ExpandTo](./Methods/ExpandTo.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回一个同时涵盖此范围和给定范围的新范围。当前范围不会更改。 |
| [Find](./Methods/Find.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 在此范围内查找给定文本的第一个匹配项，并将其作为新的 ApiTextRange 返回。如果未找到文本，则返回 null。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 返回此范围内的所有 Paragraph 对象。 |
| [GetClassType](./Methods/GetClassType.md) | "textRange" | 返回类类型标识符。 |
| [GetEndPos](./Methods/GetEndPos.md) | number | 返回当前范围的结束位置。 |
| [GetParagraph](./Methods/GetParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回此范围内指定索引处的段落。如果索引超出范围，则返回 null。 |
| [GetRange](./Methods/GetRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回表示当前范围子范围的新 ApiTextRange。 |
| [GetStartPos](./Methods/GetStartPos.md) | number | 返回当前范围的起始位置。 |
| [GetText](./Methods/GetText.md) | string | 返回范围的文本内容。段落分隔符表示为 "\r"。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回整个范围的合并文本属性。 |
| [IntersectWith](./Methods/IntersectWith.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 返回此范围与给定范围交集的新范围。当前范围不会更改。 |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | 将光标移动到当前范围内的指定位置。 |
| [Replace](./Methods/Replace.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 替换此范围内所有出现的指定文本。 |
| [Select](./Methods/Select.md) | boolean | 在编辑器中选择文本范围。 |
| [SetBold](./Methods/SetBold.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 为当前文本范围的内容设置粗体格式。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。 |
| [SetColor](./Methods/SetColor.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 设置当前范围的文本颜色。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 指定当前范围的内容显示时，行上显示的每个字符都有两条水平线穿过。 |
| [SetEndPos](./Methods/SetEndPos.md) | boolean | 设置当前范围的结束位置。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 为当前 TextRange 设置字体系列。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 设置当前文本范围中字符的字号。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 指定作为背景应用于当前范围内容的突出显示颜色。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 为文本字符设置斜体属性。 |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 指定处理当前文本范围内容时用于检查拼写和语法（如果请求）的语言。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，这些大写字母比为此文本指定的实际字体大小小两磅。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetStartPos](./Methods/SetStartPos.md) | boolean | 设置当前范围的起始位置。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 指定当前范围的内容显示时有一条水平线穿过范围中心。 |
| [SetText](./Methods/SetText.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 用给定字符串替换所有文本内容。使用 "\r" 分隔段落。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 为当前文本范围设置文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) | 指定当前范围的内容显示时，字符正下方会出现一条线（小于行上字符上下方的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 指定将应用于范围内容的对齐方式，相对于范围文本的默认外观：**"baseline"** - 当前文本范围中的字符将按默认文本基线对齐。**"subscript"** - 当前文本范围中的字符将对齐到默认文本基线下方。**"superscript"** - 当前文本范围中的字符将对齐到默认文本基线上方。 |
| [ToHtml](./Methods/ToHtml.md) | string | 将文本范围转换为 HTML。 |
