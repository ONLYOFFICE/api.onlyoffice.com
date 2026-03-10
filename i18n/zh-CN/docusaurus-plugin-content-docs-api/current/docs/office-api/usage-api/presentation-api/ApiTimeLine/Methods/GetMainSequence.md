# GetMainSequence

返回幻灯片的主动画序列。

## 语法

```javascript
expression.GetMainSequence();
```

`expression` - 表示 [ApiTimeLine](../ApiTimeLine.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAnimationSequence](../../ApiAnimationSequence/ApiAnimationSequence.md)

## 示例

This example gets the main animation sequence from a timeline.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const shape = Api.CreateShape(
	'rect',
	150 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 100 * 36000);
slide.AddObject(shape);

const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();

// Add a fade effect
mainSequence.AddEffect(shape, 'entranceFade', 'onclick');

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effects in sequence: ' + mainSequence.GetCount());
slide.AddObject(infoShape);

```
