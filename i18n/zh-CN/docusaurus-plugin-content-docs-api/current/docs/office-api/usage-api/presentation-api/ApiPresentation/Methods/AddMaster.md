# AddMaster

将幻灯片母版添加到演示文稿的幻灯片母版集合。

## 语法

```javascript
expression.AddMaster(pos, apiMaster);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 可选 | number | ApiPresentation.GetMastersCount() | 将添加幻灯片母版的位置。 |
| apiMaster | 必需 | [ApiMaster](../../ApiMaster/ApiMaster.md) |  | 要添加的幻灯片母版。 |

## 返回值

boolean

## 示例

向演示文稿添加新的母版幻灯片。

```javascript editor-pptx
// How do I create and add a master slide to a presentation?

// Create a master slide and add it to the presentation's master collection.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = Api.CreateMaster();
const countBefore = presentation.GetMastersCount();
presentation.AddMaster(countBefore, master);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before adding new master: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding new master: " + countAfter);
slide.AddObject(shape);
```
