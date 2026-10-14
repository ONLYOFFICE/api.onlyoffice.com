# GetTheme

返回当前备注页的主题。

## 语法

```javascript
expression.GetTheme();
```

`expression` - 表示 [ApiNotesPage](../ApiNotesPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTheme](../../ApiTheme/ApiTheme.md) \| null

## 示例

在演示文稿中访问为幻灯片备注页设置样式的主题。

```javascript editor-pptx
// Identify the theme source shared between the notes page and its slide master.

// Retrieve the notes page theme and display its class type in a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();

let message = 'No notes page available.';

if (notesPage) {
	const theme = notesPage.GetTheme();
	if (theme) {
		message = 'Notes page theme type: ' + theme.GetClassType();
	} else {
		message = 'No theme available.';
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
