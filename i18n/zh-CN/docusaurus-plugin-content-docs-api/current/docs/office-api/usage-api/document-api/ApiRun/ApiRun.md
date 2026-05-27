# ApiRun

ApiRun 是 [ApiTextPr](../ApiTextPr/ApiTextPr.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddColumnBreak](./Methods/AddColumnBreak.md) | boolean | 在当前文本块位置添加分栏符，并从新栏开始下一个元素。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前文本域添加批注。 |
| [AddDrawing](./Methods/AddDrawing.md) | boolean | 向当前文本块添加图形对象（图像、形状或图表）。 |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | 向当前文本块添加超链接。 |
| [AddLineBreak](./Methods/AddLineBreak.md) | boolean | 在当前文本块位置添加换行符，并从新行开始下一个元素。 |
| [AddPageBreak](./Methods/AddPageBreak.md) | boolean | 添加分页符，并从新页开始下一个元素。 |
| [AddTabStop](./Methods/AddTabStop.md) | boolean | 向当前文本块添加制表位。 |
| [AddText](./Methods/AddText.md) | boolean | 向当前文本块添加文本。 |
| [ClearContent](./Methods/ClearContent.md) | boolean | 清除当前文本块中的内容。 |
| [Copy](./Methods/Copy.md) | [ApiRun](../ApiRun/ApiRun.md) | 创建当前文本块的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前文本块。 |
| [GetBold](./Methods/GetBold.md) | boolean | 从当前文本属性获取粗体属性。 |
| [GetCaps](./Methods/GetCaps.md) | boolean | 返回具有当前文本属性的文本是否大写。 |
| [GetClassType](./Methods/GetClassType.md) | "run" | 返回 ApiRun 类的类型。 |
| [GetColor](./Methods/GetColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 从当前文本属性获取 RGB 颜色。 |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean | 从当前文本属性获取双删除线属性。 |
| [GetFontFamily](./Methods/GetFontFamily.md) | string | 返回当前文本属性中的字体系列。 |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | 返回当前文本块中所有元素的所有字体名称。 |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) | 从当前文本属性获取字体大小。 |
| [GetHighlight](./Methods/GetHighlight.md) | string | 从当前文本属性获取高亮属性。 |
| [GetItalic](./Methods/GetItalic.md) | boolean | 从当前文本属性获取斜体属性。 |
| [GetLanguage](./Methods/GetLanguage.md) | string | 从当前文本属性获取语言。 |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | 从当前文本属性获取文本轮廓。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | 返回包含当前文本块的内容控件。 |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回当前文本块的父段落。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含当前文本块的表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含当前文本块的表格单元格。 |
| [GetPosition](./Methods/GetPosition.md) | [hps](../Enumeration/hps.md) | 从当前文本属性获取文本位置，以半磅（1/144 英寸）为单位。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定文本域中包含的文档部分的 Range 对象。 |
| [GetShd](./Methods/GetShd.md) | [Shd](../Enumeration/Shd.md) \| undefined | 从当前文本属性获取文本底纹。 |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean | 返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。 |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) | 从当前文本属性获取文本间距，以磅的二十分之一为单位。 |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean | 从当前文本属性获取删除线属性。 |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 获取当前文本属性的样式。 |
| [GetText](./Methods/GetText.md) | string | 从文本块返回文本。 |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 从当前文本属性获取文本填充。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回当前文本块的文本属性。 |
| [GetUnderline](./Methods/GetUnderline.md) | boolean | 从当前文本属性获取下划线属性。 |
| [GetVertAlign](./Methods/GetVertAlign.md) | string | 从当前文本属性获取垂直对齐类型。 |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | 将光标移动到当前文本域的指定位置。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前文本块中移除所有元素。 |
| [Select](./Methods/Select.md) | boolean | 选择当前文本块。 |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置粗体属性。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前文本块中的任何小写字符仅格式化显示为其对应的大写字母。 |
| [SetColor](./Methods/SetColor.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本块的文本颜色。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前文本块的内容显示为每个字符都有两条水平线穿过。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本块字符的字体大小。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定作为背景应用于当前文本块内容的高亮颜色。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置斜体属性。 |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定在处理时用于检查拼写和语法（如果请求）的语言 |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本块的文本轮廓。 |
| [SetPosition](./Methods/SetPosition.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定此文本域的文本相对于默认 |
| [SetShd](./Methods/SetShd.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定应用于当前文本块内容的底纹。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定此文本域中的所有小写字母字符仅格式化显示为其对应的大写 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前文本块的内容显示为中间有一条水平线穿过。 |
| [SetStyle](./Methods/SetStyle.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为当前文本块设置样式。 |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本块的文本填充。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本块的文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前文本域的内容显示时，字符正下方会出现一条线 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定将应用于当前文本域内容的对齐方式，相对于文本域文本的默认外观： |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiRun 对象转换为 JSON 对象。 |
| [WrapInMailMergeField](./Methods/WrapInMailMergeField.md) | boolean | 将文本块包装在邮件合并域中。 |
