# XlSearchDirection

区域搜索方向 - 下一个匹配项或上一个匹配项。

## 类型

枚举

## 值

- "xlNext"
- "xlPrevious"

## 示例

在区域中搜索下一个匹配值。

```javascript editor-xlsx
// How do I search for text in the "xlNext" direction?

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
