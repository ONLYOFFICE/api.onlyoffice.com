# SetDuration

设置幻灯片放映切换效果的持续时间（以毫秒为单位）。

## 语法

```javascript
expression.SetDuration(duration);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| duration | 必需 | number |  | 切换持续时间（以毫秒为单位）。 |

## 返回值

boolean

## 示例

此示例将过渡持续时间设置为 2000 毫秒。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFadeSmoothly');
transition.SetDuration(2000);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Duration: 2000 ms');
slide.AddObject(shape);

```
