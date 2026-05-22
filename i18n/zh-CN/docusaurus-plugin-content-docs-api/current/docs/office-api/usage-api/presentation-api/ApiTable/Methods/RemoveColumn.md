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

使用单元格引用删除表格列。

```javascript editor-pptx
// Delete a column from the table by specifying a cell within it.

// Create a table and remove a column using a cell from that column.

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
