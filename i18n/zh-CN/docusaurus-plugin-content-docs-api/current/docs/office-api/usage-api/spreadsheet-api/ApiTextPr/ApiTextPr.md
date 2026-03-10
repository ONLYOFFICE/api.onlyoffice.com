# ApiTextPr

表示 ApiTextPr 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetBold](./Methods/GetBold.md) | boolean | 从当前文本属性获取粗体属性。 |
| [GetCaps](./Methods/GetCaps.md) | boolean | 返回具有当前文本属性的文本是否大写。 |
| [GetClassType](./Methods/GetClassType.md) | "textPr" | 返回 ApiTextPr 类的类型。 |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean | 从当前文本属性获取双删除线属性。 |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 从当前文本属性获取文本颜色。 |
| [GetFontFamily](./Methods/GetFontFamily.md) | string | 从当前文本属性返回字体系列。如果字体是通过主题设置的，此方法会自动从主题计算字体。 |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) | 从当前文本属性获取字体大小。 |
| [GetItalic](./Methods/GetItalic.md) | boolean | 从当前文本属性获取斜体属性。 |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | 从当前文本属性获取文本轮廓。 |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean | 返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。 |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) | 从当前文本属性获取文本间距，以磅的二十分之一为单位。 |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean | 从当前文本属性获取删除线属性。 |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 从当前文本属性获取文本填充。 |
| [GetUnderline](./Methods/GetUnderline.md) | boolean | 从当前文本属性获取下划线属性。 |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置粗体属性。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定文本运行中的任何小写字符仅格式化显示为其对应的大写字母。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定运行的内容显示为每个字符都有两条水平线穿过。 |
| [SetFill](./Methods/SetFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本颜色。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行字符的字体大小。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 为文本字符设置斜体属性。 |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本轮廓。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定文本运行中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定运行的内容显示为中间有一条水平线穿过。 |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 设置当前文本运行的文本填充。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定运行的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。 |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 指定将应用于运行内容相对于运行文本默认外观的对齐方式：**"baseline"** - 当前文本运行中的字符将按默认文本基线对齐。**"subscript"** - 当前文本运行中的字符将对齐到默认文本基线下方。**"superscript"** - 当前文本运行中的字符将对齐到默认文本基线上方。 |
