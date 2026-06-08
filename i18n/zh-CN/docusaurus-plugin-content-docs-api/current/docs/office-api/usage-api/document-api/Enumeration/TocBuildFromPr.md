# TocBuildFromPr

指定是从大纲级别还是指定样式生成目录的目录属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| OutlineLvls | number | 目录中的最大级别数。 |
| StylesLvls | [TocStyleLvl](../Enumeration/TocStyleLvl.md)[] | 样式级别（例如，[\{Name: "Heading 1", Lvl: 2\}, \{Name: "Heading 2", Lvl: 3\}]）。💡 如果 StylesLvls.length \> 0，则 OutlineLvls 属性将被忽略。 |

## 示例

向文档添加从 9 个大纲级别生成的目录。

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
