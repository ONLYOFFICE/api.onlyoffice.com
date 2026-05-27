# GetAdvanceTime

返回幻灯片切换时间（以毫秒为单位）。

## 语法

```javascript
expression.GetAdvanceTime();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| undefined

## 示例

获取并显示演示文稿中的自动换片时间。

```javascript editor-pptx
// Retrieve the advance time value from a slide show transition object.

// Display the retrieved advance time as milliseconds in a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectPushLeft');
transition.SetSpeed('fast');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(2500);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const advanceTime = retrievedTransition.GetAdvanceTime();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance Time: ' + advanceTime + ' ms');
slide.AddObject(shape);
```
