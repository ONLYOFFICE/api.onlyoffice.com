# Search

在表格对象的范围内搜索。搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 搜索字符串。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

此示例展示如何在表格中进行搜索。

```javascript editor-docx
// How to search throughout the table.

// Get a table, search information using value, position, order, etc.

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
let searchResults = table.Search("Cell");
searchResults[0].SetBold(true);
```
