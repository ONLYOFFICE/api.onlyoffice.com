# GetEffect

返回指定索引处的效果。

## 语法

```javascript
expression.GetEffect(index);
```

`expression` - 表示 [ApiAnimationSequence](../ApiAnimationSequence.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 效果的从零开始的索引。 |

## 返回值

[ApiAnimationEffect](../../ApiAnimationEffect/ApiAnimationEffect.md) \| null

## 示例

This example gets an effect at a specified index from an animation sequence.

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

// Add animation
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
mainSequence.AddEffect(shape, 'entranceFlyIn', 'onclick');

// Get the first effect
const effect = mainSequence.GetEffect(0);
const effectType = effect ? effect.GetEffectType() : 'none';

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect at index 0: ' + effectType);
slide.AddObject(infoShape);

```
