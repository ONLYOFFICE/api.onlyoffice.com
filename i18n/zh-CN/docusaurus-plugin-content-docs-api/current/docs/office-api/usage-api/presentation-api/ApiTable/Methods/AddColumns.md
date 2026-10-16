# AddColumns

向当前表格添加新列。

## 语法

```javascript
expression.AddColumns(oCell, nCount, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将在该单元格之后添加新列。如果未指定，将在表格末尾添加新列。 |
| nCount | 必需 | Number |  | 要添加的列数。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（true）或之后（false）添加新列。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在演示文稿中向表格添加新列。

```javascript editor-pptx
// Useful for adding multiple columns to a table at once.

// Create a table and add two columns after the first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two columns added. Total columns: " + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);
table.SetSize(200*36000, 100*36000);
slide.RemoveAllObjects();
slide.AddObject(table);
```
