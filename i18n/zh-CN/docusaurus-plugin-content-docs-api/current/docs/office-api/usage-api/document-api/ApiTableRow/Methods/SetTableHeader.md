# SetTableHeader

指定当前表格行将在显示此表格的每个新页面顶部重复显示。
这使该表格行在每个页面上具有「标题」行的行为。
此元素可应用于表格结构顶部的任意数量的行，
以生成多行表格标题。

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

此示例指定当前表格行将在显示此表格的每个新页面顶部重复显示。

```javascript editor-docx
// Rename the header of the table.

// How to set table row as a header.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetTableHeader(true);
table.SetStyle(tableStyle);
doc.Push(table);
```
