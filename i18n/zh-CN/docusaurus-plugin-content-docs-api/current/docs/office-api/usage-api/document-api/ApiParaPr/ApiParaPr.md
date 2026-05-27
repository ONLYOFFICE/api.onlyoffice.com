# ApiParaPr

表示 ApiParaPr 类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetBetweenBorder](./Methods/GetBetweenBorder.md) | [Border](../Enumeration/Border.md) \| undefined | 返回当前段落的段间边框。 |
| [GetBottomBorder](./Methods/GetBottomBorder.md) | [Border](../Enumeration/Border.md) \| undefined | 返回当前段落的底部边框。 |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | 返回 ApiParaPr 类的类型。 |
| [GetContextualSpacing](./Methods/GetContextualSpacing.md) | boolean \| undefined | 返回当前段落的上下文间距值。 |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落首行缩进。 |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落左侧缩进。 |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | 返回段落右侧缩进。 |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | 返回段落内容对齐方式。 |
| [GetKeepLines](./Methods/GetKeepLines.md) | boolean \| undefined | 返回当前段落的保持行在一起值。 |
| [GetKeepNext](./Methods/GetKeepNext.md) | boolean \| undefined | 返回当前段落的与下段同页值。 |
| [GetLeftBorder](./Methods/GetLeftBorder.md) | [Border](../Enumeration/Border.md) \| undefined | 返回当前段落的左边框。 |
| [GetNumPr](./Methods/GetNumPr.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) \| undefined | 返回当前段落的编号级别，引用当前文档中的编号定义实例。 |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number \| undefined | 返回指定属性的大纲级别。 |
| [GetPageBreakBefore](./Methods/GetPageBreakBefore.md) | boolean \| undefined | 返回当前段落的段前分页值。 |
| [GetRightBorder](./Methods/GetRightBorder.md) | [Border](../Enumeration/Border.md) \| undefined | 返回当前段落的右边框。 |
| [GetShd](./Methods/GetShd.md) | [Shd](../Enumeration/Shd.md) \| undefined | 返回应用于段落内容的底纹。 |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段后间距值。 |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段前间距值。 |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | 返回段落行距规则。 |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | 返回段落行距值。 |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | 返回段落样式方法。 |
| [GetTabs](./Methods/GetTabs.md) | [TabStop](../Enumeration/TabStop.md)[] | 返回当前段落的自定义制表位。 |
| [GetTopBorder](./Methods/GetTopBorder.md) | [Border](../Enumeration/Border.md) \| undefined | 返回当前段落的顶部边框。 |
| [GetWidowControl](./Methods/GetWidowControl.md) | boolean \| undefined | 返回当前段落的孤行控制值。 |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。 |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落下方显示的边框。 |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | 指定使用 |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | 设置段落首行缩进。 |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | 设置段落左侧缩进。 |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | 设置段落右侧缩进。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置段落内容对齐方式。 |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | 指定在使用页面视图呈现文档时，尽可能将当前段落的所有行保持在同一页上。 |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | 指定在使用分页视图呈现文档时，当前段落的内容至少 |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | 指定将在指定段落周围的页面左侧显示的边框。 |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | 指定当前段落引用当前文档中的编号定义实例。 |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | 设置指定属性的大纲级别。 |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | 指定在使用分页视图呈现文档时，当前段落的内容呈现在 |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | 指定将在指定段落周围的页面右侧显示的边框。 |
| [SetShd](./Methods/SetShd.md) | boolean | 指定应用于段落内容的底纹。 |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | 设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则 |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | 设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则 |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | 设置段落行距。如果 sLineRule 参数的值为 |
| [SetStyle](./Methods/SetStyle.md) | boolean | 段落样式基础方法。 |
| [SetTabs](./Methods/SetTabs.md) | boolean | 指定将用于当前段落中任何制表符的自定义制表位序列。 |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | 指定在具有相同段落边框设置的一组段落上方显示的边框。 |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | 指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiParaPr 对象转换为 JSON 对象。 |
