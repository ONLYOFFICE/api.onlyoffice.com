# ApiTableOfFigures

表示图表目录的类。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | boolean | 从文档中移除图表目录。 |
| [GetCaption](./Methods/GetCaption.md) | string \| null | 返回生成图表目录所依据的题注标签（例如，"Figure"）。 |
| [GetClassType](./Methods/GetClassType.md) | "tableOfFigures" | 返回 ApiTableOfFigures 类的类型。 |
| [GetIncludeLabel](./Methods/GetIncludeLabel.md) | boolean | 返回图表目录条目中是否包含题注标签和编号。 |
| [GetIncludePageNumbers](./Methods/GetIncludePageNumbers.md) | boolean | 返回图表目录中是否显示页码。 |
| [GetParent](./Methods/GetParent.md) | [ApiDocument](../ApiDocument/ApiDocument.md) \| null | 返回包含该图表目录的文档。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回覆盖整个图表目录的范围。 |
| [GetRightAlignPageNumbers](./Methods/GetRightAlignPageNumbers.md) | boolean | 返回图表目录中的页码是否右对齐。 |
| [GetUseHyperlinks](./Methods/GetUseHyperlinks.md) | boolean | 返回条目是否设置为超链接格式。 |
| [SetCaption](./Methods/SetCaption.md) | boolean | 设置生成图表目录所依据的题注标签（例如，"Figure"）。 |
| [SetIncludeLabel](./Methods/SetIncludeLabel.md) | boolean | 指定图表目录条目中是否包含题注标签和编号。 |
| [SetIncludePageNumbers](./Methods/SetIncludePageNumbers.md) | boolean | 指定是否在图表目录中显示页码。 |
| [SetPr](./Methods/SetPr.md) | boolean | 将指定属性应用于图表目录并重新生成图表目录。 |
| [SetRightAlignPageNumbers](./Methods/SetRightAlignPageNumbers.md) | boolean | 指定图表目录中的页码是否右对齐。 |
| [SetUseHyperlinks](./Methods/SetUseHyperlinks.md) | boolean | 指定是否将条目设置为超链接格式。 |
| [Update](./Methods/Update.md) | boolean | 更新图表目录。 |
