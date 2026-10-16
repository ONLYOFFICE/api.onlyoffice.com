# ToJSON

将 ApiTableRowPr 对象转换为 JSON 对象。

继承自 [ApiTableRowPr.ToJSON](../../ApiTableRowPr/Methods/ToJSON.md)。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将表格行属性转换为演示文稿中的 JSON 表示。

```javascript editor-pptx
// The row properties are serialized into a string so their settings can be stored or transferred.

// Build row properties with a minimum height, apply them to the first row, and write their JSON string into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720);
row.SetRowPr(rowPr);
const json = rowPr.ToJSON();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row properties JSON: " + json);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
