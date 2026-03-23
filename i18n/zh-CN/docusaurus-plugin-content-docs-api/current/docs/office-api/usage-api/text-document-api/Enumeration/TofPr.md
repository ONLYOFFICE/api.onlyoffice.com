# TofPr

图表目录属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| BuildFrom | [CaptionLabel](../Enumeration/CaptionLabel.md) \| string | 指定是否基于指定的题注标签或所用的段落样式名称（例如「标题 1」）生成图表目录。 |
| FormatAsLinks | boolean | 指定是否将图表目录格式化为链接。 |
| LabelNumber | boolean | 指定是否在图表目录中包含标签和编号。 |
| LeaderType | [TocLeader](../Enumeration/TocLeader.md) | 图表目录中的前导符类型。 |
| RightAlgn | boolean | 指定是否在图表目录中右对齐页码。 |
| ShowPageNums | boolean | 指定是否在图表目录中显示页码。 |
| TofStyle | [TofStyle](../Enumeration/TofStyle.md) | 图表目录样式类型。 |


## 示例

This example adds a table of figures with the specified properties to the document.

```javascript editor-docx
// How to create a table of figures properties.

// Add a table of figures from created properties.

let tofPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": "Figure",
	"LabelNumber": true,
	"TofStyle": "distinctive"
};
doc.AddTableOfFigures(tofPr);

```
