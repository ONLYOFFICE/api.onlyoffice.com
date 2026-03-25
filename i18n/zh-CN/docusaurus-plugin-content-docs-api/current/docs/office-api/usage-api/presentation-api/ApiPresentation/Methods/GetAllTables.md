# GetAllTables

返回包含当前演示文稿中所有表格的数组（包括幻灯片母版和幻灯片版式）。

## 语法

```javascript
expression.GetAllTables();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

此示例演示如何获取包含演示文稿中所有表格的数组。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const slideTable = Api.CreateTable(2, 2);
slide.RemoveAllObjects();
slide.AddObject(slideTable);

const masterTable = Api.CreateTable(2, 2);
master.AddObject(masterTable);

const layoutTable = Api.CreateTable(2, 2);
layout.AddObject(layoutTable);

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
paragraph.AddLineBreak();
paragraph.AddText("Total number of tables in presentation: " + presentation.GetAllTables().length);

```
