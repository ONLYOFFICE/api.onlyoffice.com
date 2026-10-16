# TocBuildFromPr

指定是从大纲级别还是指定样式生成目录的目录属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| OutlineLvlStart | number | 目录中包含的最高标题级别（大纲范围的起点）。 |
| OutlineLvls | number | 目录中包含的最低标题级别（大纲范围的终点）。 |
| StylesLvls | [TocStyleLvl](../Enumeration/TocStyleLvl.md)[] | 样式级别（例如，[\{Name: "Heading 1", Lvl: 2\}, \{Name: "Heading 2", Lvl: 3\}]）。如果 *StylesLvls.length* 大于 0，则 *OutlineLvls* 属性将被忽略。 |

## 示例

向文档添加从 9 个大纲级别生成的目录。

```javascript editor-docx
// How do I create table of contents properties that set the source it is built from?

// Add a table of contents spanning the outline levels from the start level up to level 9.

let tocBuildFromPr = { "OutlineLvlStart": 1, "OutlineLvls": 9 };
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
