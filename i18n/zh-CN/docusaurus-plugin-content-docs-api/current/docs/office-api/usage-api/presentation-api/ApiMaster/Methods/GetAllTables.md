# GetAllTables

返回包含幻灯片母版中所有表格的数组。

## 语法

```javascript
expression.GetAllTables();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

此示例演示如何获取包含幻灯片母版中所有表格的数组。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.RemoveObject(0, master.GetAllDrawings().length);

const layout = master.GetLayout(0);

const table = Api.CreateTable(3, 2);
table.GetRow(0).GetCell(0).GetContent().GetCurrentParagraph().AddText('US');
table.GetRow(0).GetCell(1).GetContent().GetCurrentParagraph().AddText('CH');
table.GetRow(0).GetCell(2).GetContent().GetCurrentParagraph().AddText('Others');
table.GetRow(1).GetCell(0).GetContent().GetCurrentParagraph().AddText('11.59');
table.GetRow(1).GetCell(1).GetContent().GetCurrentParagraph().AddText('8.27');
table.GetRow(1).GetCell(2).GetContent().GetCurrentParagraph().AddText('80.14');
master.AddObject(table);

const fillColor = Api.RGB(100, 100, 200);
const fill = Api.CreateSolidFill(fillColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(45 * 36000, 100 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Number of tables on slide: " + slide.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide layout: " + layout.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide master: " + master.GetAllTables().length);

```
