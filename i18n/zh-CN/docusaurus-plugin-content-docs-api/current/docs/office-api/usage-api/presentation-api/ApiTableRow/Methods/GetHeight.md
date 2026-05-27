# GetHeight

返回当前表格行的高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置后获取表格行的高度。

```javascript editor-pptx
// Create a table, set the row height, and retrieve the value.

// Display the row height in EMU units in the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(Api.MillimetersToEmus(20));

slide.RemoveAllObjects();
slide.AddObject(table);

const height = row.GetHeight();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row height: ' + height + ' EMU');
content.Push(paragraph);
```
