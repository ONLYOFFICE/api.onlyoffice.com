# TocPr

目录属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| BuildFrom | [TocBuildFromPr](../Enumeration/TocBuildFromPr.md) | 指定是从大纲级别还是指定样式生成目录。 |
| FormatAsLinks | boolean | 指定是否将目录格式化为链接。 |
| LeaderType | [TocLeader](../Enumeration/TocLeader.md) | 目录中的前导符类型。 |
| RightAlgn | boolean | 指定是否在目录中右对齐页码。 |
| ShowPageNums | boolean | 指定是否在目录中显示页码。 |
| TocStyle | [TocStyle](../Enumeration/TocStyle.md) | 目录样式类型。 |


## 示例

This example adds a table of contents with the specified properties to the document.

```javascript editor-docx
// How to create a table of contents properties.

// Add a table of contents from the properties.

let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": {
		"OutlineLvls": 9
	},
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);

```
