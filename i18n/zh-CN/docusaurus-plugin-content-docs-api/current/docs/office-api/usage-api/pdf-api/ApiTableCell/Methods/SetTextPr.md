# SetTextPr

为当前单元格的内容设置文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将为当前单元格设置的文本属性。 |

## 返回值

boolean

## 示例

在 PDF 中为表格单元格内的所有内容应用统一的文本格式。

```javascript editor-pdf
// Change the font style and size of all text in a table cell at once in a PDF.

// Style every character in a table cell by setting shared text properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).GetContent().AddText('Cell 1');
page.AddObject(table);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
table.GetCell(0, 0).SetTextPr(textPr);
```
