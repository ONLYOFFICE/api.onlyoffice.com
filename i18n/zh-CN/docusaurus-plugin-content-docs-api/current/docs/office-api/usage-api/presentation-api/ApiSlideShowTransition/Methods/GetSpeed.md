# GetSpeed

返回切换速度（类似于 PowerPoint VBA 的 Speed 属性）。
根据 OOXML spd 属性逻辑将持续时间映射为速度：
- fast（快）：duration &lt;= 500ms
- medium（中）：500ms &lt; duration &lt;= 750ms
- slow（慢）：duration &gt; 750ms

## 语法

```javascript
expression.GetSpeed();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TransitionSpeed](../../Enumeration/TransitionSpeed.md)

## 示例

This example gets the transition speed and displays it.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWheelReverse1Spoke');
transition.SetDuration(5000);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Speed is ' + transitionSpeed);
slide.AddObject(shape);

```
