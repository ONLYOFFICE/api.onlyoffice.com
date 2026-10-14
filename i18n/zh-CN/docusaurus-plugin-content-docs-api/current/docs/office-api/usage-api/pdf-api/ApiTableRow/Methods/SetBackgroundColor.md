# SetBackgroundColor

为当前表格行中的所有单元格设置背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

设置 PDF 中表格行所有单元格的背景颜色。

```javascript editor-pdf
// Color the background of an entire table row in a PDF.

// Set an orange background for the second row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
row.SetBackgroundColor(Api.RGB(255, 111, 61));

page.AddObject(table);
```
