# ApiParagraph

表示 ApiParagraph 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | 向当前段落添加元素。 |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | 在当前位置添加换行符，并从新行开始下一个元素。 |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | 向当前段落添加制表位。 |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | 向当前段落添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建段落副本。忽略批注、脚注引用和复杂域。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前段落。 |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | 返回 ApiParagraph 类的类型。 |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | 使用指定的位置返回段落元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前段落中的元素数量。 |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | 返回当前段落中所有元素的所有字体名称。 |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落首行缩进。 |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落左侧缩进。 |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落右侧缩进。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前内容段落的内部 ID。 |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | 返回段落内容对齐方式。 |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | 返回当前段落中最后一个包含文本的 Run。 |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回下一个段落。 |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | 返回指定属性的大纲级别。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 返回段落属性。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回上一个段落。 |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段后间距值。 |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段前间距值。 |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | 返回段落行距规则。 |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | 返回段落行距值。 |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 在指定位置插入段落。 |
| [Last](./Methods/Last.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | 返回段落的最后一个元素。 |
| [Push](./Methods/Push.md) | boolean | 向当前段落添加元素。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前段落中移除所有元素。💡 当从段落中移除所有元素时，将自动创建一个新的空 Run。如果要向此 Run 添加内容，请使用 [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) 方法。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定的位置移除元素。💡 如果移除的元素是段落的最后一个元素（即所有元素都从段落中移除），将自动创建一个新的空 Run。如果要向此 Run 添加内容，请使用 [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) 方法。 |
| [Select](./Methods/Select.md) | boolean | 选择当前段落。 |
| [SetBold](./Methods/SetBold.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 为文本字符设置粗体属性。 |
| [SetBullet](./Methods/SetBullet.md) | 无 | 设置当前段落的项目符号或编号。 |
| [SetCaps](./Methods/SetCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落中的任何小写字符仅格式化显示为其对应的大写字母。 |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示为每个字符都有两条水平线穿过。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 使用指定的字体系列设置所有 4 个字体槽。 |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 设置当前段落字符的字体大小。 |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定应用于当前段落内容背景的高亮颜色。 |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | 设置段落首行缩进。 |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | 设置段落左侧缩进。 |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | 设置段落右侧缩进。 |
| [SetItalic](./Methods/SetItalic.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 为文本字符设置斜体属性。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置段落内容对齐方式。 |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | 设置指定属性的大纲级别。 |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。 |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 设置以二十分之一磅为单位测量的文本间距。 |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | 设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则 nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则将其解释为 false。 |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | 设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则 nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则将其解释为 false。 |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | 设置段落行距。如果 sLineRule 参数的值为 "atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果 sLineRule 参数的值为 "auto"，则 nLine 参数的值将被解释为行的 240 分之一。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示为中间有一条水平线穿过。 |
| [SetTabs](./Methods/SetTabs.md) | boolean | 指定将用于当前段落中任何制表符的自定义制表位序列。**警告**：aPos 数组和 aVal 数组的长度**必须**相等。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 设置段落文本属性。 |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 指定此段落的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiParagraph 对象转换为 JSON 对象。 |
