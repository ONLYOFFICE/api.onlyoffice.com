# GetBodyShapeText

返回当前备注页正文形状中的文本。

## 语法

```javascript
expression.GetBodyShapeText();
```

`expression` - 表示 [ApiNotesPage](../ApiNotesPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从演示文稿中幻灯片的备注部分读取文本。

```javascript editor-pptx
// How do I get the content of the slide notes in a presentation?

// Retrieve text that was added to the notes page and display it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const notesPage = slide.GetNotesPage();
notesPage.AddBodyShapeText('This text was added using AddBodyShapeText method to notes page of the first slide');

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const text = notesPage.GetBodyShapeText();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(text);
```
