# SetTableDescription

设置表格说明。

## 语法

```javascript
expression.SetTableDescription(descr);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| descr | 必需 | string |  | 表格说明。 |

## 返回值

boolean

## 示例

在演示文稿中设置表格的说明。

```javascript editor-pptx
// Useful for setting and retrieving a table description.

// Create a table, set its description, and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableDescription("Sales data for Q1 2025");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table description: " + table.GetTableDescription());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
