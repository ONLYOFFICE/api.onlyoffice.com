# SetCellMarginLeft

指定表格中特定单元格的当前单元格内容左侧
与左边框之间应保留的空间量。

## 语法

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 如果此值为 &lt;code&gt;null&lt;/code&gt;，则使用默认表格单元格左边距，否则使用指定值覆盖当前单元格的表格单元格左边距。 |

## 返回值

boolean

## 示例

如何为当前表格单元格设置左边距。

```javascript editor-pdf
// Specify the left margin value for the ApiTableCell object.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginLeft(720);

page.AddObject(table);

```
