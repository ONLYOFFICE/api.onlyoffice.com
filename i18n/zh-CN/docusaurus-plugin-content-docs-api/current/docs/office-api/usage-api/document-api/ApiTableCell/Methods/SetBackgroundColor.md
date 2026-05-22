# SetBackgroundColor

设置当前表格单元格的背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

在文档中为表格单元格应用背景颜色。

```javascript editor-docx
// How do I fill a table cell with a specific color in a document?

// Give a cell a colored background to highlight it visually in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);
```
