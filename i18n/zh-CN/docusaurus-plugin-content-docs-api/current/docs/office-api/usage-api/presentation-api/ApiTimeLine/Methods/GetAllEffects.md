# GetAllEffects

返回幻灯片的所有动画效果。

## 语法

```javascript
expression.GetAllEffects();
```

`expression` - 表示 [ApiTimeLine](../ApiTimeLine.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAnimationEffect](../../ApiAnimationEffect/ApiAnimationEffect.md)[]

## 示例

此示例从时间线获取所有动画效果。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shapes
const shape1 = Api.CreateShape(
	'rect',
	100 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape1.SetPosition(50 * 36000, 80 * 36000);
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'ellipse',
	100 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(107, 61, 74)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape2.SetPosition(180 * 36000, 80 * 36000);
slide.AddObject(shape2);

// Add animations
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
mainSequence.AddEffect(shape1, 'entranceFade', 'onclick');
mainSequence.AddEffect(shape2, 'entranceFlyIn', 'afterprevious');

// Get all effects
const allEffects = timeLine.GetAllEffects();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Total effects on slide: ' + allEffects.length);
slide.AddObject(infoShape);

```
