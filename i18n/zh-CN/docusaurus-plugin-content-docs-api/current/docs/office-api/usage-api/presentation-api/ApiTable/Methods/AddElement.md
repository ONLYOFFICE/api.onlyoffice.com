# AddElement

按段落在单元格中的位置添加段落。

## 语法

```javascript
expression.AddElement(oCell, nPos, oElement);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将添加指定元素的单元格。 |
| nPos | 必需 | number |  | 将添加指定元素的单元格中的位置。 |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将在当前位置添加的文档元素。 |

## 返回值

boolean

## 示例

在幻灯片表格单元格内的指定位置添加段落。

```javascript editor-pptx
// Insert a document element into the chosen cell by its position.

// Create a table and add a paragraph as the first element of its first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
slide.RemoveAllObjects();
slide.AddObject(table);
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Inserted paragraph");
table.AddElement(cell, 0, paragraph);
```
