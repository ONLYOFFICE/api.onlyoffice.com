# ApiRange

表示 ApiRange 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddBookmark](./Methods/AddBookmark.md) | boolean | 向指定范围添加书签。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前范围添加批注。 |
| [AddField](./Methods/AddField.md) | boolean | 通过域指令代码向指定范围添加域。💡 此方法会移除范围内的文本。 |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | 向指定范围添加超链接。 |
| [AddText](./Methods/AddText.md) | boolean | 在指定位置添加文本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前范围中的所有内容。 |
| [ExpandTo](./Methods/ExpandTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回一个新范围，该范围在任意方向上超出指定范围并跨越不同的范围。当前范围未更改。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 返回表示指定范围中所有段落的段落集合。 |
| [GetClassType](./Methods/GetClassType.md) | "range" | 返回 ApiRange 类的类型。 |
| [GetEndPage](./Methods/GetEndPage.md) | Number | 返回当前范围的结束页码。 |
| [GetEndPos](./Methods/GetEndPos.md) | number | 返回当前范围的结束位置。 |
| [GetParagraph](./Methods/GetParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 从范围中的所有段落返回一个段落。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围中包含的文档部分的 Range 对象。 |
| [GetStartPage](./Methods/GetStartPage.md) | Number | 返回当前范围的起始页码。 |
| [GetStartPos](./Methods/GetStartPos.md) | number | 返回当前范围的起始位置。 |
| [GetText](./Methods/GetText.md) | string | 从指定范围返回文本。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回整个范围的合并文本属性。 |
| [IntersectWith](./Methods/IntersectWith.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回当前范围与另一个范围的交集作为新范围。当前范围未更改。 |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | 将光标移动到当前范围对象的指定位置。如果文档中有任何选区，它将被移除。 |
| [Select](./Methods/Select.md) | boolean | 将选区设置为指定范围。 |
| [SetBold](./Methods/SetBold.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为文本字符设置粗体属性。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。 |
| [SetColor](./Methods/SetColor.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为当前文本范围设置文本颜色。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前范围的内容显示时，行上显示的每个字符都有两条水平线穿过。 |
| [SetEndPos](./Methods/SetEndPos.md) | boolean | 设置当前范围对象的结束位置。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为当前文本范围的字符设置字体大小。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定作为背景应用于当前范围内容的突出显示颜色。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为文本字符设置斜体属性。 |
| [SetPosition](./Methods/SetPosition.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前范围的文本相对于周围非定位文本的默认基线升高或降低的量。 |
| [SetShd](./Methods/SetShd.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定应用于当前文本范围内容的底纹。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，这些大写字母比为此文本指定的实际字体大小小两磅。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetStartPos](./Methods/SetStartPos.md) | boolean | 设置当前范围对象的起始位置。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前范围的内容显示时有一条水平线穿过范围中心。 |
| [SetStyle](./Methods/SetStyle.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为当前范围设置样式。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 为当前范围设置文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定当前范围的内容显示时，字符正下方会出现一条线（小于行上字符上下方的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 指定将应用于范围内容的对齐方式，相对于范围文本的默认外观：**"baseline"** - 当前文本范围中的字符将按默认文本基线对齐。**"subscript"** - 当前文本范围中的字符将在默认文本基线下方对齐。**"superscript"** - 当前文本范围中的字符将在默认文本基线上方对齐。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiRange 对象转换为 JSON 对象。 |
