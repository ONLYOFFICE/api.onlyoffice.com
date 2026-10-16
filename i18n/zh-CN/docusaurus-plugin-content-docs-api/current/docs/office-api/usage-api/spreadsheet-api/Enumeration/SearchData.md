# SearchData

搜索属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| After | [ApiRange](../ApiRange/ApiRange.md) | 要在其后开始搜索的单元格。如果未指定此参数，则搜索从区域左上角的单元格之后开始。 |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | 指定是匹配整个搜索文本还是搜索文本的任何部分。 |
| LookIn | [XlFindLookIn](../Enumeration/XlFindLookIn.md) | 搜索数据类型（公式或值）。 |
| MatchCase | boolean | 是否区分大小写。默认值为 “false”。 |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | 区域搜索方向 - 下一个匹配项或上一个匹配项。 |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | 区域搜索顺序 - 按行或按列。 |
| What | string \| RegExp \| undefined | 要搜索的数据，或用于匹配单元格文本的正则表达式。传递 RegExp 时，将忽略 MatchCase 和 Wildcards 参数（改用 "i" 标志控制是否区分大小写）。 |
| Wildcards | boolean | 指定是否将搜索文本解释为通配符模式："*" 匹配任意字符序列，"?" 匹配任意单个字符，使用 "~*" / "~?" 查找字面字符 "*" / "?"。默认值为 "false"。 |

## 示例

```javascript editor-xlsx
// How do I search for text using search data?

// Find a text from a range specifying data.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});
let wildcardRange = range.Find({
	What: "2?0",
	LookIn: "xlValues",
	LookAt: "xlWhole",
	Wildcards: true
});
let regExpRange = range.Find({
	What: /\d{3}/,
	LookIn: "xlValues",
	LookAt: "xlPart"
});
```
