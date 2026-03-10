# GetSlideShowTransition

返回当前幻灯片的幻灯片放映切换效果。

## 语法

```javascript
expression.GetSlideShowTransition();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md) \| null

## 示例

This example gets the slide show transition from a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectUncoverRight');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionEffect = retrievedTransition.GetEntryEffect();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect: ' + transitionEffect + '\n');
paragraph.AddText('Speed: ' + transitionSpeed);
slide.AddObject(shape);

```
