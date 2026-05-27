# TocLeader

目录前导符的可能值：
- **“dot”** - “.......”
- **“dash”** - “-------”
- **“underline”** - “_______”

## 类型

枚举

## 值

- "dot"
- "dash"
- "underline"
- "none"

## 示例

向文档添加具有点状前导符的目录。

```javascript editor-docx
// How to create a table of contents properties indicating its leader type.

// Add a table of contents with dot leader type.

let tocLeader = "dot";
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": tocLeader,
	"FormatAsLinks": true,
	"BuildFrom": {
		"OutlineLvls": 9
	},
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);
```
