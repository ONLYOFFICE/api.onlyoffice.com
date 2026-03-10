# SetDelay

设置动画效果开始前的延迟时间（以毫秒为单位）。

## 语法

```javascript
expression.SetDelay(delay);
```

`expression` - 表示 [ApiAnimationEffect](../ApiAnimationEffect.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| delay | 必需 | number |  | 延迟时间（以毫秒为单位）。 |

## 返回值

boolean

## 示例

This example sets the delay of an animation effect.

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

// Set 1 second delay
effect.SetDelay(1000);
const delay = effect.GetDelay();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('New delay: ' + delay + 'ms (1 second)');
slide.AddObject(infoShape);

```
