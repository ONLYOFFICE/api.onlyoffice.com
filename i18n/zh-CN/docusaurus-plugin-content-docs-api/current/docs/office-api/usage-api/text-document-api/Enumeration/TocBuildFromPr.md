# TocBuildFromPr

指定是从大纲级别还是指定样式生成目录的目录属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| OutlineLvls | number | 目录中的最大级别数。 |
| StylesLvls | [TocStyleLvl](../Enumeration/TocStyleLvl.md)[] | 样式级别（例如 [&#123;Name: "Heading 1", Lvl: 2&#125;, &#123;Name: "Heading 2", Lvl: 3&#125;]）。💡 如果 StylesLvls.length &gt; 0，则 OutlineLvls 属性将被忽略。 |


## 示例

This example adds a table of contents which is generated from 9 outline levels to the document.

```javascript editor-docx
// How to create a table of contents properties indicating the source from which it should be generated.

// Add a table of contents from the nine outline levels of the document.

let tocBuildFromPr = { "OutlineLvls": 9 };
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": tocBuildFromPr,
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);

```
