# SetTriggerType

设置动画效果的触发器类型。

## 语法

```javascript
expression.SetTriggerType(trigger);
```

`expression` - 表示 [ApiAnimationEffect](../ApiAnimationEffect.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| trigger | 必需 | [AnimationTriggerType](../../Enumeration/AnimationTriggerType.md) |  | 触发器类型："onclick"、"withprevious" 或 "afterprevious"。 |

## 返回值

boolean

## 示例

此示例为动画效果设置触发类型。

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
const effect = mainSequence.AddEffect(shape, 'entranceFade', 'onclick');

// Change trigger type
effect.SetTriggerType('withprevious');
const newTriggerType = effect.GetTriggerType();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('New trigger type: ' + newTriggerType);
slide.AddObject(infoShape);

```
