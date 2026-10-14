# Remove

删除当前表格行。

## 语法

```javascript
expression.Remove();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中删除表格行。

```javascript editor-pptx
// Useful for deleting a row from the table.

// Remove the first row from the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row");
const para2 = Api.CreateParagraph();
para2.AddText("First row was removed");
row.GetCell(0).GetContent().Push(para);
row.Remove();
table.GetRow(0).GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
```
