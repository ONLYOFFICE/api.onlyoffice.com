# GetSelectedRows

返回当前表格中包含当前所选单元格的行。

## 语法

```javascript
expression.GetSelectedRows();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)[]

## 示例

在演示文稿中从表格获取所选行。

```javascript editor-pptx
// Useful for retrieving currently selected rows in a table.

// Create a table and get the list of selected rows (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 3);
table.GetCell(0, 0).Select();
const selectedRows = table.GetSelectedRows();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected rows count: " + selectedRows.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
