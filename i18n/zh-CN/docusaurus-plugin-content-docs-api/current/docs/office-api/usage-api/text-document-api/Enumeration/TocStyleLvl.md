# TocStyleLvl

目录样式级别。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Lvl | number | 将应用于目录中指定样式的级别。 |
| Name | string | 样式名称（例如「标题 1」）。 |


## 示例

This example adds a table of contents which is generated from the specified styles to the document.

```javascript editor-docx
// How to create a table of contents properties indicating its style levels.

// Add a table of contents with styles for different elements (Heading 1, 2, etc.).

let tocStyleLvl = [
	{ Name: "Heading 1", Lvl: 2 },
	{ Name: "Heading 2", Lvl: 3 }
];
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": {
		"StylesLvls": tocStyleLvl
	},
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);

```
