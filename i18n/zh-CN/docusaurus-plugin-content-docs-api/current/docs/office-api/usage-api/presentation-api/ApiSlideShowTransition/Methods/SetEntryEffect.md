# SetEntryEffect

设置幻灯片放映切换效果的进入效果。

## 语法

```javascript
expression.SetEntryEffect(entryEffectName);
```

`expression` - 表示 [ApiSlideShowTransition](../ApiSlideShowTransition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| entryEffectName | 必需 | [EntryEffect](../../Enumeration/EntryEffect.md) |  | 字符串格式的进入效果名称。 |

## 返回值

boolean

## 示例

This example sets the entry effect for a slide show transition.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeftDown');
transition.SetSpeed('medium');

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: effectCoverLeftDown');
slide.AddObject(shape);

```
