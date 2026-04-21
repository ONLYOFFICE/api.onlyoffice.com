# TocStyle

目录样式的可能值。

## 类型

枚举

## 值

- "simple"
- "online"
- "standard"
- "modern"
- "classic"

## 示例

向文档添加标准样式的目录。

```javascript editor-docx
// How to create a table of contents properties indicating its style.

// Add a table of contents with standard style.

let tocStyle = "standard";
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": {
		"OutlineLvls": 9
	},
	"TocStyle": tocStyle
};
doc.AddTableOfContents(tocPr);
```
