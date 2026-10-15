# SetTableTitle

设置表格标题。

## 语法

```javascript
expression.SetTableTitle(title);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | 必需 | string |  | 要设置的表格标题。 |

## 返回值

boolean

## 示例

在演示文稿中设置表格的标题。

```javascript editor-pptx
// Useful for setting and retrieving a table title.

// Create a table, set its title, and display the title in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableTitle("Quarterly Report");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table title: " + table.GetTableTitle());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
