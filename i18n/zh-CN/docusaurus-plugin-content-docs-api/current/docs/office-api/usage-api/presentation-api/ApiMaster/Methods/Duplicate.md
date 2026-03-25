# Duplicate

创建指定幻灯片母版对象的副本，并将新幻灯片母版添加到幻灯片母版集合。

## 语法

```javascript
expression.Duplicate(nPos);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | ApiPresentation.GetMastersCount() | 将添加新幻灯片母版的位置。 |

## 返回值

[ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## 示例

此示例创建指定幻灯片母版对象的副本，并将新幻灯片母版添加到幻灯片母版集合。

```javascript editor-pptx
// How to create a duplicate of a slide master.

// Add a duplicate master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = presentation.GetMastersCount();
master.Duplicate(1);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before duplicating: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after duplicating: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
