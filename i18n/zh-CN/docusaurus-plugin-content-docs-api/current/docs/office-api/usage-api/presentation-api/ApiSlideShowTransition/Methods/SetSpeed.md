# SetSpeed

设置切换速度（类似于 PowerPoint VBA 的 Speed 属性）。
根据标准值将速度转换为持续时间：
- fast（快）= 500ms
- medium（中）= 750ms
- slow（慢）= 1000ms

## 语法

```javascript
expression.SetSpeed(speed);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| speed | 必需 | [TransitionSpeed](../../Enumeration/TransitionSpeed.md) |  | 字符串格式的切换速度。 |

## 返回值

boolean

## 示例

设置演示文稿中幻灯片过渡的持续时间。

```javascript editor-pptx
// How do I change how fast a transition plays in a presentation?

// Apply a specific transition speed to control animation timing in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWipeLeft');
transition.SetSpeed('slow');

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Speed is "slow" which is 1 second by default.');
slide.AddObject(shape);
```
