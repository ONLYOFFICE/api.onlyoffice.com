# ApiRun

表示 ApiRun 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddLineBreak](./Methods/AddLineBreak.md) | boolean | 在当前运行位置添加换行符，并从新行开始下一个元素。 |
| [AddTabStop](./Methods/AddTabStop.md) | boolean | 向当前运行添加制表位。 |
| [AddText](./Methods/AddText.md) | boolean | 向当前运行添加一些文本。 |
| [ClearContent](./Methods/ClearContent.md) | boolean | 清除当前运行中的内容。 |
| [Copy](./Methods/Copy.md) | [ApiRun](../ApiRun/ApiRun.md) | 创建当前运行的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前运行。 |
| [GetBold](./Methods/GetBold.md) | boolean | 从当前文本属性获取粗体属性。 |
| [GetCaps](./Methods/GetCaps.md) | boolean | 返回具有当前文本属性的文本是否大写。 |
| [GetClassType](./Methods/GetClassType.md) | "run" | 返回 ApiRun 类的类型。 |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean | 从当前文本属性获取双删除线属性。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 从当前文本属性获取文本颜色。 |
| [GetFontFamily](./Methods/GetFontFamily.md) | string | 从当前文本属性返回字体系列。如果字体是通过主题设置的，此方法会自动从主题计算字体。 |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | 返回当前运行中所有元素的所有字体名称。 |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) | 从当前文本属性获取字体大小。 |
| [GetHighlight](./Methods/GetHighlight.md) | string | 从当前文本属性获取高亮属性。 |
| [GetItalic](./Methods/GetItalic.md) | boolean | 从当前文本属性获取斜体属性。 |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | 从当前文本属性获取文本轮廓。 |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean | 返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。 |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) | 从当前文本属性获取文本间距，以磅的二十分之一为单位。 |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean | 从当前文本属性获取删除线属性。 |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 从当前文本属性获取文本填充。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回当前运行的文本属性。 |
| [GetUnderline](./Methods/GetUnderline.md) | boolean | 从当前文本属性获取下划线属性。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前运行中移除所有元素。 |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置粗体属性。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前文本运行中的任何小写字符仅格式化显示为其对应的大写字母。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前运行的内容显示为每个字符都有两条水平线穿过。 |
| [SetFill](./Methods/SetFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本颜色。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行字符的字体大小。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定作为背景应用于当前运行内容的高亮颜色。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置斜体属性。 |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定在处理此文本运行内容时将用于检查拼写和语法（如果请求）的语言。 |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本轮廓。 |
| [SetPosition](./Methods/SetPosition.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定此运行的文本相对于周围非定位文本的默认基线升高或降低的量。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定此文本运行中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前运行的内容显示为中间有一条水平线穿过。 |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本填充。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前运行的文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定当前运行的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定将应用于当前运行内容相对于文本运行默认外观的对齐方式：**"baseline"** - 当前文本运行中的字符将按默认文本基线对齐。**"subscript"** - 当前文本运行中的字符将对齐到默认文本基线下方。**"superscript"** - 当前文本运行中的字符将对齐到默认文本基线上方。 |
