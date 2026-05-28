# SetColumnBackgroundColor

为包含当前单元格的列中的所有单元格设置背景颜色。

## 语法

```javascript
expression.SetColumnBackgroundColor(color);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

在文档中为表格列的每个单元格应用背景颜色。

```javascript editor-docx
// How do I change the background color of an entire column of table cells in a document?

// Give all cells in the same column a consistent fill color in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);
```
