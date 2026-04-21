# GetClassType

返回 ApiTableCell 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableCell"

## 示例

获取演示文稿中表格单元格的类类型。

```javascript editor-pptx
// How to identify the class type of a table cell?

// Obtain the class type identifier of a table cell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = cell.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
