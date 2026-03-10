# AddEffect

向序列添加动画效果。

## 语法

```javascript
expression.AddEffect(drawing, effectType, trigger);
```

`expression` - 表示 [ApiAnimationSequence](../ApiAnimationSequence.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 要添加动画的绘图对象。 |
| effectType | 必需 | [AnimationEffectType](../../Enumeration/AnimationEffectType.md) |  | 动画效果类型（例如 "entranceFade"、"entranceFlyIn"、"emphasisPulse"）。 |
| trigger | 可选 | [AnimationTriggerType](../../Enumeration/AnimationTriggerType.md) | "onclick" | 触发器类型："onclick"、"withprevious" 或 "afterprevious"。 |

## 返回值

[ApiAnimationEffect](../../ApiAnimationEffect/ApiAnimationEffect.md) \| null

## 示例

This example adds an animation effect to a sequence.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shape to animate
const shape = Api.CreateShape(
	'star5',
	120 * 36000, 120 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(150 * 36000, 60 * 36000);
slide.AddObject(shape);

// Add fade animation effect
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const effect = mainSequence.AddEffect(shape, 'entranceFade', 'onclick');

// Configure effect timing
effect.SetDuration(1500);  // 1.5 seconds
effect.SetDelay(500);      // 0.5 second delay

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Added effect: ' + effect.GetEffectType());
paragraph.AddLineBreak();
paragraph.AddText('Duration: ' + effect.GetDuration() + 'ms');
slide.AddObject(infoShape);

```
