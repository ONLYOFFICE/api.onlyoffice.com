# SetTableHeader

指定在显示此表格的每个新页面顶部重复当前表格行。

继承自 [ApiTableRowPr.SetTableHeader](../../ApiTableRowPr/Methods/SetTableHeader.md)。

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

在 PDF 中将第一行标记为重复的表格标题行。

```javascript editor-pdf
// Make a table row repeat as a header row in a PDF.

// Mark the first row as a header that repeats on each page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 5);
const headerRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('Header row');
headerRow.SetTableHeader(false);
headerRow.GetCell(0).GetContent().Push(para);

page.AddObject(table);
```
