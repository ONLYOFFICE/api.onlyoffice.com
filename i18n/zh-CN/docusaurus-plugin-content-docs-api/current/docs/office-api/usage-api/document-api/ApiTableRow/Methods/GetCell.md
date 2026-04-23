# GetCell

通过位置返回单元格。

## 语法

```javascript
expression.GetCell(nPos);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 当前行中的单元格位置。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

此示例展示如何通过位置获取单元格。

```javascript editor-docx
// How to get cell from the table.

// Get the first table cell and add text to it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = tableRow.GetCell(1);
cell.SetVerticalAlign("bottom");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
