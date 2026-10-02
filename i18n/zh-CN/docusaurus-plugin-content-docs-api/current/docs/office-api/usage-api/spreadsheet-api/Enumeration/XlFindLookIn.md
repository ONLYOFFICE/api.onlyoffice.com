# XlFindLookIn

搜索数据类型（公式或值）。

## 类型

枚举

## 值

- "xlFormulas"
- "xlValues"

## 示例

在区域的单元格值中搜索值。

```javascript editor-xlsx
// How do I specify where to look for the searched text?

// Search inside a range specifying which values to look in.

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
