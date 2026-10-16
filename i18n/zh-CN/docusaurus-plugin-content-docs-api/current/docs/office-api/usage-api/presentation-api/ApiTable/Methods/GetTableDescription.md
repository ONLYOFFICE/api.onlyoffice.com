# GetTableDescription

返回表格说明。

## 语法

```javascript
expression.GetTableDescription();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在演示文稿中获取表格的说明。

```javascript editor-pptx
// Needed when retrieving a table description.

// Create a table, set its description, and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableDescription("Sales data for Q1 2025");
const description = table.GetTableDescription();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table description: " + description);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
