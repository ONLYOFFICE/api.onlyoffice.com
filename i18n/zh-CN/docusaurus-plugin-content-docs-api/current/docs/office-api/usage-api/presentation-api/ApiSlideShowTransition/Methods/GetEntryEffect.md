# GetEntryEffect

返回幻灯片放映切换效果的进入效果。

## 语法

```javascript
expression.GetEntryEffect();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EntryEffect](../../Enumeration/EntryEffect.md)

## 示例

此示例从幻灯片放映过渡中获取进入效果。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectUncoverRight');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const entryEffect = retrievedTransition.GetEntryEffect();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#ff9447')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: ' + entryEffect);
slide.AddObject(shape);

```
