# ApiNumberingLevel

表示对编号指定级别的引用的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "numberingLevel" | 返回 ApiNumberingLevel 类的类型。 |
| [GetLevelIndex](./Methods/GetLevelIndex.md) | number | 返回级别索引。 |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | 返回编号定义。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 返回应用于引用给定编号定义和编号级别的任何编号段落的段落属性。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回将应用于当前编号级别本身文本的文本属性，而非后续段落中的文本。 |
| [LinkWithStyle](./Methods/LinkWithStyle.md) | boolean | 将指定的段落样式与当前编号级别链接。 |
| [SetCustomType](./Methods/SetCustomType.md) | boolean | 设置您自己的自定义编号类型。 |
| [SetRestart](./Methods/SetRestart.md) | boolean | 指定一个基于 1 的索引，用于确定编号级别何时应重新开始其起始值。 |
| [SetStart](./Methods/SetStart.md) | boolean | 指定在给定编号级别定义中父编号级别使用的编号起始值。 |
| [SetSuff](./Methods/SetSuff.md) | boolean | 指定将在给定编号级别文本和引用该编号级别的每个编号段落的文本之间添加的内容。 |
| [SetTemplateType](./Methods/SetTemplateType.md) | boolean | 设置现有的预定义编号模板之一。 |
