# SetAdvanceTime

设置幻灯片切换时间（以毫秒为单位）。

## 语法

```javascript
expression.SetAdvanceTime(advanceTime);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceTime | 必需 | number |  | 幻灯片切换时间（以毫秒为单位）。 |

## 返回值

boolean

## 示例

This example sets the automatic advance time to 4.3 seconds (4300 milliseconds).

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFade');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(false);
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(4300);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Slide will advance automatically after 4.3 seconds.');
slide.AddObject(shape);

```
