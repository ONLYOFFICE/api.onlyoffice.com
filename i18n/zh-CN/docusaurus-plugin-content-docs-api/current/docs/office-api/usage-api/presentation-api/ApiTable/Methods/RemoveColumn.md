# RemoveColumn

删除包含指定单元格的表格列。

## 语法

```javascript
expression.RemoveColumn(oCell);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将被删除的列中的表格单元格。 |

## 返回值

boolean

## 示例

此示例删除包含指定单元格的表格列。

```javascript editor-pptx
// How to delete a column from the table.

// Create a table, create cells and remove the whole column by its cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
let cell = row.GetCell(1);
table.RemoveColumn(cell);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The second column was removed.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
