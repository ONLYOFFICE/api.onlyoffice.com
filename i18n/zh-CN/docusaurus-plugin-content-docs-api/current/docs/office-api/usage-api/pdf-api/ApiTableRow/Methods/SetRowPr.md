# SetRowPr

为当前表格行设置属性。

## 语法

```javascript
expression.SetRowPr(oApiTableRowPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableRowPr | 必需 | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | 表格行属性。 |

## 返回值

boolean

## 示例

设置 PDF 中表格行的属性。

```javascript editor-pdf
// Apply a set of row properties to a table row at once in a PDF.

// Set the height of the first row using row properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight('atLeast', 720 * 3);
row.SetRowPr(rowPr);

page.AddObject(table);
```
