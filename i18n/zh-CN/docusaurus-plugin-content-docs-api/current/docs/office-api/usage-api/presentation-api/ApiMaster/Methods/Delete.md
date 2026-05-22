# Delete

如果存在，则从父对象中删除指定对象。
注意：如果是演示文稿中的最后一个母版，则无法删除。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从演示文稿中删除幻灯片母版。

```javascript editor-pptx
// How do I delete a slide master in a presentation?

// Remove an existing slide master in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = presentation.GetMastersCount();
master.Delete();
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before deletion: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after deletion: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
