# Search

在表格单元格对象的范围内搜索。搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 搜索字符串。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

此示例展示如何在表格单元格中搜索。

```javascript editor-docx
// Search the word from the cell.

// Get the first cell from the table and search a word from it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
doc.Push(table);
let searchResults = table.GetCell(0, 0).Search("Cell");
searchResults[1].SetBold(true);
```
