# GetCell

通过位置返回单元格。

## 语法

```javascript
expression.GetCell(nRow, nCell);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 指定单元格所在的当前表格中的行位置。 |
| nCell | 必需 | number |  | 当前表格中的单元格位置。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

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
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.GetContent().GetElement(0).AddText("Cell #1");
```
