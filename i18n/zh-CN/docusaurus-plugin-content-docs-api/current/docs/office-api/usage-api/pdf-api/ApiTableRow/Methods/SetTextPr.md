# SetTextPr

设置当前行的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到当前行的文本属性。 |

## 返回值

boolean

## 示例

在 PDF 中为表格行的所有单元格应用文本格式。

```javascript editor-pdf
// Change the text style for an entire row of a table in a PDF.

// Style the text across a full table row uniformly in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
row.GetCell(0).GetContent().AddText('First row');
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);

page.AddObject(table);
```
