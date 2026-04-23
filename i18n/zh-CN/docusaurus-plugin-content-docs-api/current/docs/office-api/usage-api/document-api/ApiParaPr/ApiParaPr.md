# ApiParaPr

表示 ApiParaPr 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | 返回 ApiParaPr 类的类型。 |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落首行缩进。 |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落左侧缩进。 |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落右侧缩进。 |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | 返回段落内容对齐方式。 |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | 返回指定属性的大纲级别。 |
| [GetShd](./Methods/GetShd.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回应用于段落内容的底纹。 |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段后间距值。 |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段前间距值。 |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | 返回段落行距规则。 |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | 返回段落行距值。 |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 返回段落样式方法。 |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。 |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落下方显示的边框。💡 连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。 |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | 指定当前后段落具有相同段落样式时，使用 [ApiParaPr#SetSpacingBefore](../ApiParaPr/Methods/SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](../ApiParaPr/Methods/SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。 |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | 设置段落首行缩进。 |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | 设置段落左侧缩进。 |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | 设置段落右侧缩进。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置段落内容对齐方式。 |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | 指定在使用页面视图呈现文档时，尽可能将当前段落的所有行保持在同一页上。 |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | 指定在使用分页视图呈现文档时，尽可能将当前段落的内容至少部分地与下一段落呈现在同一页上。 |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | 指定将在指定段落周围的页面左侧显示的边框。 |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | 指定当前段落引用当前文档中的编号定义实例。 |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | 设置指定属性的大纲级别。 |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | 指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。 |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | 指定将在指定段落周围的页面右侧显示的边框。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于段落内容的底纹。 |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | 设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则 nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则将其解释为 false。 |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | 设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则 nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则将其解释为 false。 |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | 设置段落行距。如果 sLineRule 参数的值为 "atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果 sLineRule 参数的值为 "auto"，则 nLine 参数的值将被解释为行的 240 分之一。 |
| [SetStyle](./Methods/SetStyle.md) | boolean | 段落样式基础方法。💡 此方法本身不单独使用，它仅构成 [ApiParagraph#SetStyle](../ApiParagraph/Methods/SetStyle.md) 方法的基础，该方法为段落设置选定或创建的样式。 |
| [SetTabs](./Methods/SetTabs.md) | boolean | 指定将用于当前段落中任何制表符的自定义制表位序列。**警告**：aPos 数组和 aVal 数组的长度**必须**相等。 |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落上方显示的边框。💡 连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。 |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | 指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiParaPr 对象转换为 JSON 对象。 |
