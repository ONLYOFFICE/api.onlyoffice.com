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

设置 PDF 中整个表格列的背景颜色。

```javascript editor-pdf
// Color the background of a whole column via one of its cells in a PDF.

// Set an orange background for the entire first column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 4);
const cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.RGB(255, 111, 61));

page.AddObject(table);
```
