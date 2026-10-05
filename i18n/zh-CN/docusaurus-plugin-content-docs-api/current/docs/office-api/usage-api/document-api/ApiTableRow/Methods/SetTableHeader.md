# SetTableHeader

指定当前表格行将在显示此表格的每个新页面顶部重复显示。这使该表格行在每个页面上具有“标题”行的行为。此元素可应用于表格结构顶部的任意数量的行，以生成多行表格标题。

继承自 [ApiTableRowPr.SetTableHeader](../../ApiTableRowPr/Methods/SetTableHeader.md)。

## 语法

```javascript
expression.SetTableHeader(isHeader);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHeader | 必需 | boolean |  | true 值表示当前表格行将在每个新页面的顶部重复显示。 |

## 返回值

boolean

## 示例

在文档中将表格行标记为在表格跨多页时于每页顶部重复。

```javascript editor-docx
// How do I designate a row as a repeating header so it appears on every page in a document?

// Pin a row as the table header so readers always see column labels regardless of page breaks in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 90x3 table and set row #1 as the table header:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(90, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetTableHeader(true);
let cell = tableRow.GetCell(0);
table.Cells[0][0].GetContent().AddText("Header cell #1");
table.Cells[0][1].GetContent().AddText("Header cell #2");
table.Cells[0][2].GetContent().AddText("Header cell #3");
table.SetStyle(tableStyle);
doc.Push(table);
```
