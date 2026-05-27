# CreateMaster

创建新的幻灯片母版。

## 语法

```javascript
expression.CreateMaster(oTheme);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTheme | 可选 | [ApiTheme](../../ApiTheme/ApiTheme.md) | ApiPresentation.GetMaster(0).GetTheme() | 演示文稿主题对象。 |

## 返回值

[ApiMaster](../../ApiMaster/ApiMaster.md)

## 示例

向演示文稿添加幻灯片母版布局。

```javascript editor-pptx
// How do I create a slide master in a presentation?

// Apply a new master to a presentation at a specific position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = Api.CreateMaster();

let countBefore = presentation.GetMastersCount();
presentation.AddMaster(countBefore, master);
let countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Number of masters before adding new master: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding new master: " + countAfter);

slide.RemoveAllObjects();
slide.AddObject(shape);
```
