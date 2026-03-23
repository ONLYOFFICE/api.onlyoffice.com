# XlSearchDirection

区域搜索方向 - 下一个匹配项或上一个匹配项。

## 类型

枚举

## 值

- "xlNext"
- "xlPrevious"


## 示例

This example specify that the whole text match will be searched in the range.

```javascript editor-xlsx
// How to search a text indicating search direction as "xlNext".

// Find a text from a range specifying search direction.

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
