# GetCurrentVisibleSlide

返回当前可见的幻灯片。

## 语法

```javascript
expression.GetCurrentVisibleSlide();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## 示例

获取演示文稿中当前可见幻灯片的对象。

```javascript editor-pptx
// How can I get current visible slide using a presentation in a presentation?

// Get current visible slide for a presentation in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetCurrentVisibleSlide();

if (slide) {
	const labelFill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
	const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
	const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
	label.SetPosition(0, 50 * 36000);
	slide.AddObject(label);

	const docContent = label.GetDocContent();
	const paragraph = docContent.GetElement(0);
	paragraph.AddText('This slide is currently visible');
}
```
