# XlLookAt

指定是匹配整个搜索文本还是搜索文本的任何部分。

## 类型

枚举

## 值

- "xlWhole"
- "xlPart"


## 示例

This example specify that the whole text match will be searched in the range.

```javascript editor-xlsx
// How to indicate how the text should be searched.

// Search a whole text from a range.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});

```
