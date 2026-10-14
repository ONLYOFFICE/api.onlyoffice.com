# Search

在表格对象的范围内搜索。

搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string \| RegExp |  | 搜索字符串或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 参数（请改用 "i" 标志控制大小写敏感性）。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在表格中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-docx
// Combine a keyword lookup across cells with a RegExp that matches every cell number.

// Bold the first keyword match, then bold each number found by the /\d+/g expression.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
table.GetCell(0, 2).GetContent().GetElement(0).AddText("Cell 3");
doc.Push(table);

let byKeyword = table.Search("Cell");
byKeyword[0].SetBold(true);

let byRegExp = table.Search(/\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
