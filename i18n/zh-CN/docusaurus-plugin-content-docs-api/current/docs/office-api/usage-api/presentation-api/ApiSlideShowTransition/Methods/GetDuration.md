# GetDuration

返回幻灯片放映切换效果的持续时间（以毫秒为单位）。

## 语法

```javascript
expression.GetDuration();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

This example gets the transition duration and displays it.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectPushRight');
transition.SetDuration(3300);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const duration = retrievedTransition.GetDuration();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Duration: ' + duration + ' ms');
slide.AddObject(shape);

```
