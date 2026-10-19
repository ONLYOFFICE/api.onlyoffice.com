# TofStyle

图表目录样式的可能值。

## 类型

枚举

## 值

- "simple"
- "online"
- "classic"
- "distinctive"
- "centered"
- "formal"

## 示例

向文档添加独特样式的图表目录。

```javascript editor-docx
// How do I create a table of figures with a specific style?

// Create a property for table of figures indicating its style.

let tofStyle = "distinctive";
let tofPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": "Figure",
	"LabelNumber": true,
	"TofStyle": tofStyle
};
doc.AddTableOfFigures(tofPr);
```
