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
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段后间距值。 |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | 返回当前段落的段前间距值。 |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | 返回段落行距规则。 |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | 返回段落行距值。 |
| [SetBullet](./Methods/SetBullet.md) | 无 | 设置当前段落的项目符号或编号。 |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | 设置段落首行缩进。 |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | 设置段落左侧缩进。 |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | 设置段落右侧缩进。 |
| [SetJc](./Methods/SetJc.md) | boolean | 设置段落内容对齐方式。 |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | 设置指定属性的大纲级别。 |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | 设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则 nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则将其解释为 false。 |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | 设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则 nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则将其解释为 false。 |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | 设置段落行距。如果 sLineRule 参数的值为 "atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果 sLineRule 参数的值为 "auto"，则 nLine 参数的值将被解释为行的 240 分之一。 |
| [SetTabs](./Methods/SetTabs.md) | boolean | 指定将用于当前段落中任何制表符的自定义制表位序列。**警告**：aPos 数组和 aVal 数组的长度**必须**相等。 |
