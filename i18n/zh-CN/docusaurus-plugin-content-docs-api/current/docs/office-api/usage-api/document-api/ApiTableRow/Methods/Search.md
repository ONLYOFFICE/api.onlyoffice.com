# Search

在表格行对象的范围内搜索。

搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string \| RegExp |  | 搜索字符串或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 参数（请改用 "i" 标志控制大小写敏感性）。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在表格行中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-docx
// Look up a keyword across the row cells and match the same word with a RegExp.

// Bold one keyword match, then bold every occurrence found by the /text/g expression.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("text");
row.GetCell(1).GetContent().GetElement(0).AddText("text");
row.GetCell(2).GetContent().GetElement(0).AddText("text");
doc.Push(table);

let byKeyword = row.Search("tex", true);
byKeyword[1].SetBold(true);

let byRegExp = row.Search(/text/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
