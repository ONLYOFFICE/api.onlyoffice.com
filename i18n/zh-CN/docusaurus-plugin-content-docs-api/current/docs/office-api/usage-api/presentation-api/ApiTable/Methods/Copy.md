# Copy

创建指定表格的副本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

复制表格并将副本放在演示文稿的另一张幻灯片上。

```javascript editor-pptx
// How do I make a copy of a table to reuse in a presentation?

// Clone a table and add the duplicate to a new slide in a presentation.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);

const copyTable = table.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyTable);
```
