# AddInteractiveSequence

创建通过单击指定对象触发的交互式动画序列。

## 语法

```javascript
expression.AddInteractiveSequence(drawing);
```

`expression` - 表示 [ApiTimeLine](../ApiTimeLine.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 单击时触发序列的绘图对象。 |

## 返回值

[ApiAnimationSequence](../../ApiAnimationSequence/ApiAnimationSequence.md) \| null

## 示例

此示例创建交互式动画序列。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create trigger button
const button = Api.CreateShape(
	'roundRect',
	100 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(0, 150, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
button.SetPosition(50 * 36000, 50 * 36000);
const buttonContent = button.GetDocContent();
const buttonPara = buttonContent.GetElement(0);
buttonPara.AddText('Click me!');
slide.AddObject(button);

// Create shape to animate
const animatedShape = Api.CreateShape(
	'star5',
	100 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
animatedShape.SetPosition(200 * 36000, 100 * 36000);
slide.AddObject(animatedShape);

// Create interactive sequence
const timeLine = slide.GetTimeLine();
const interactiveSeq = timeLine.AddInteractiveSequence(button);
interactiveSeq.AddEffect(animatedShape, 'emphasisSpin', 'onclick');

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 30 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Click the green button to spin the star!');
slide.AddObject(infoShape);

```
