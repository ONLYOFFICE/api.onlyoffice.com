# SetSlideShowTransition

设置当前幻灯片的幻灯片放映切换效果。

## 语法

```javascript
expression.SetSlideShowTransition(transition);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transition | 必需 | [ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md) |  | 要应用的幻灯片放映切换效果。 |

## 返回值

boolean

## 示例

This example sets a slide show transition to a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectRandom');
transition.SetSpeed('fast');
transition.SetAdvanceOnClick(true);
slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition parameters: random effect, fast speed, advance on click');
slide.AddObject(shape);

```
