# GetEffectType

返回动画效果类型。

## 语法

```javascript
expression.GetEffectType();
```

`expression` - 表示 [ApiAnimationEffect](../ApiAnimationEffect.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[AnimationEffectType](../../Enumeration/AnimationEffectType.md) \| null

## 示例

此示例获取动画效果的效果类型。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const shape = Api.CreateShape(
	'rect',
	150 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 80 * 36000);
slide.AddObject(shape);

const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const effect = mainSequence.AddEffect(shape, 'entranceFlyIn', 'onclick');

const effectType = effect.GetEffectType();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect type: ' + effectType);
slide.AddObject(infoShape);

```
