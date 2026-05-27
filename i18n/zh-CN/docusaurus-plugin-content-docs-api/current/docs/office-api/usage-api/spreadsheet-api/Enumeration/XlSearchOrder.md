# XlSearchOrder

区域搜索顺序 - 按行或按列。

## 类型

枚举

## 值

- "xlByRows"
- "xlByColumns"

## 示例

指定在区域中搜索完整文本匹配。

```javascript editor-xlsx
// How to search a text indicating search order.

// Find a text from a range with column wise search order.

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
