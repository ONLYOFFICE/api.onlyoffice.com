# SetAdvanceOnTime

设置幻灯片是否在指定时间后切换。

## 语法

```javascript
expression.SetAdvanceOnTime(advanceOnTime);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceOnTime | 必需 | boolean |  | 如果为 true，则在指定时间后切换幻灯片；否则为 false。 |

## 返回值

boolean

## 示例

此示例启用定时后自动前进幻灯片。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFadeSmoothly');
transition.SetSpeed('medium');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(5000);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Slide will advance on click or automatically after 5 seconds.');
slide.AddObject(shape);

```
