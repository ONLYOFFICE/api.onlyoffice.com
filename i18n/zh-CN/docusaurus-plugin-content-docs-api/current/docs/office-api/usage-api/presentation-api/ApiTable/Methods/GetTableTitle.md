# GetTableTitle

返回表格标题。

## 语法

```javascript
expression.GetTableTitle();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在演示文稿中获取表格的标题。

```javascript editor-pptx
// Needed when retrieving a table title.

// Create a table, set its title, and display the title in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableTitle("Quarterly Report");
const title = table.GetTableTitle();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table title: " + title);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
//TODO
```
