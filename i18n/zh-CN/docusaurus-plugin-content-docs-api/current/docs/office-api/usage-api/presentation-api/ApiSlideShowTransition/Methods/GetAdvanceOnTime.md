# GetAdvanceOnTime

返回幻灯片是否在指定时间后切换。

## 语法

```javascript
expression.GetAdvanceOnTime();
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

获取并显示演示文稿中的定时换片设置。

```javascript editor-pptx
// Retrieve the advance on time property from a slide show transition object.

// Apply the retrieved value to a shape and display in the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWipeRight');
transition.SetSpeed('medium');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(3000);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const advanceOnTime = retrievedTransition.GetAdvanceOnTime();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance On Time: ' + advanceOnTime);
slide.AddObject(shape);
```
