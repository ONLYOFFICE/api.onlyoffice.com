# GetClassType

返回 ApiTableRowPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRowPr](../ApiTableRowPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRowPr"

## 示例

在演示文稿中获取表格行属性对象的类类型。

```javascript editor-pptx
// Helps when checking the class type of ApiTableRowPr.

// Apply the row properties to the first row and display their class type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1500);
row.SetRowPr(rowPr);
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
