# GetBodyShape

返回当前备注页中具有 type="body" 属性的形状。

## 语法

```javascript
expression.GetBodyShape();
```

`expression` - 表示 [ApiNotesPage](../ApiNotesPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md) \| null

## 示例

此示例展示如何从备注页获取正文形状。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();

let message = 'No notes page available.';

if (notesPage) {
	const bodyShape = notesPage.GetBodyShape();
	if (bodyShape) {
		message = 'Body shape exists.';
	} else {
		message = 'No body shape available.';
	}
}

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText(message);

slide.RemoveAllObjects();
slide.AddObject(shape);

```
