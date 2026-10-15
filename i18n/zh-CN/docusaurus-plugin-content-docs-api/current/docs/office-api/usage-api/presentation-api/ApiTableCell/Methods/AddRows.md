# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 指定新行是添加在当前单元格之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在演示文稿中通过单元格向表格添加新行。

```javascript editor-pptx
// Useful for inserting rows after a specific cell.

// Add two rows after the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.GetContent().Push(Api.CreateParagraph().AddText("Two new rows added after this cell."));
cell.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);
```
