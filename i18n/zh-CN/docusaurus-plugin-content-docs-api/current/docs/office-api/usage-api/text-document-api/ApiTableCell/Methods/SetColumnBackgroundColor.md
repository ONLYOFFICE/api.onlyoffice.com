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

此示例为包含该单元格的列中的所有单元格设置背景颜色。

```javascript editor-docx
// How to color the cell column background.

// Set the rose color as a background color of the cell column.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);

```
