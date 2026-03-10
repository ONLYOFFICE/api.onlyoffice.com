# ApiNumberingLevel

表示 ApiNumberingLevel 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "numberingLevel" | 返回 ApiNumberingLevel 类的类型。 |
| [GetLevelIndex](./Methods/GetLevelIndex.md) | number | 返回级别索引。 |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | 返回编号定义。 |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 返回应用于引用给定编号定义和编号级别的任何编号段落的段落属性。 |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 返回将应用于当前编号级别本身文本的文本属性，而不是后续段落中的文本。💡 要更改段落的文本样式，必须使用 [ApiRun#SetStyle](../ApiRun/Methods/SetStyle.md) 方法为其应用样式。 |
| [LinkWithStyle](./Methods/LinkWithStyle.md) | boolean | 将指定的段落样式与当前编号级别链接。 |
| [SetCustomType](./Methods/SetCustomType.md) | boolean | 设置您自己的自定义编号类型。 |
| [SetRestart](./Methods/SetRestart.md) | boolean | 指定一个基于 1 的索引，用于确定编号级别何时应重新开始其起始值。当在给定文档内容中使用高于（早于此级别）指定编号级别的实例时，编号级别将重新开始。默认情况下，此值为 true。 |
| [SetStart](./Methods/SetStart.md) | boolean | 指定在给定编号级别定义中父编号级别使用的编号起始值。默认情况下，此值为 1。 |
| [SetSuff](./Methods/SetSuff.md) | boolean | 指定将在给定编号级别文本和引用该编号级别的每个编号段落的文本之间添加的内容。默认情况下，此值为 "tab"。 |
| [SetTemplateType](./Methods/SetTemplateType.md) | boolean | 设置现有的预定义编号模板之一。 |
