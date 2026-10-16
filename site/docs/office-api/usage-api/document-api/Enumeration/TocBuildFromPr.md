# TocBuildFromPr

Table of contents properties which specify whether to generate the table of contents from the outline levels or the specified styles.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| OutlineLvlStart | number | The highest heading level included in the table of contents (the start of the outline range). |
| OutlineLvls | number | The lowest heading level included in the table of contents (the end of the outline range). |
| StylesLvls | [TocStyleLvl](../Enumeration/TocStyleLvl.md)[] | Style levels (for example, [\{Name: "Heading 1", Lvl: 2\}, \{Name: "Heading 2", Lvl: 3\}]). If *StylesLvls.length* is greater than 0, the *OutlineLvls* property is ignored. |

## Example

Add a table of contents which is generated from 9 outline levels to the document.

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
