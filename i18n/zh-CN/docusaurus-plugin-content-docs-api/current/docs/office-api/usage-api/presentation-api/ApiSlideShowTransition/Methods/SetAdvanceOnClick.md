# SetAdvanceOnClick

设置幻灯片是否在鼠标单击时切换。

## 语法

```javascript
expression.SetAdvanceOnClick(advanceOnClick);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceOnClick | 必需 | boolean |  | 如果为 true，则在鼠标单击时切换幻灯片；否则为 false。 |

## 返回值

boolean

## 示例

This example enables advancing to the next slide on mouse click.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeft');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(false);
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
paragraph.AddText('Advance On Click set to false. Slide will advance automatically after 5 seconds.');
slide.AddObject(shape);

```
