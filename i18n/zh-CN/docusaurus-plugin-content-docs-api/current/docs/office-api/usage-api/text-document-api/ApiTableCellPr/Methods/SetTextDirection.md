# SetTextDirection

指定此表格单元格的文本流方向。

## 语法

```javascript
expression.SetTextDirection(sType);
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | 表格单元格中可用的文本方向类型：&lt;code&gt;"lrtb"&lt;/code&gt; - 从左到右、从上到下的文本方向，&lt;code&gt;"tbrl"&lt;/code&gt; - 从上到下、从右到左的文本方向，&lt;code&gt;"btlr"&lt;/code&gt; - 从下到上、从左到右的文本方向。 |

## 返回值

boolean

## 示例

此示例指定此表格单元格的文本流方向。

```javascript editor-docx
// Set the direction of the cell text.

// Get the cell from the table and set its direction.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetTextDirection("btlr");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
table.SetStyle(tableStyle);
doc.Push(table);
```
