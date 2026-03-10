# GetNotesPage

返回当前幻灯片的备注页。

## 语法

```javascript
expression.GetNotesPage();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiNotesPage](../../ApiNotesPage/ApiNotesPage.md) \| null

## 示例

此示例展示如何从幻灯片获取备注页。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const notesPage = slide.GetNotesPage();
if (notesPage) {
	paragraph.AddText('Notes page exists on this slide');
} else {
	paragraph.AddText('Notes page is not available');
}

slide.AddObject(shape);

```
