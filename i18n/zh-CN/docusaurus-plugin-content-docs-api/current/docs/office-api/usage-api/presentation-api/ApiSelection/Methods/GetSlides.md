# GetSlides

返回选中的幻灯片。

## 语法

```javascript
expression.GetSlides();
```

`expression` - 表示 [ApiSelection](../ApiSelection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)[]

## 示例

此示例展示如何从当前选择中获取选中的幻灯片。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const selection = Api.GetSelection();
let text = 'Initial selected slides count: ' + selection.GetSlides().length + '\n';

/*

const secondSlide = Api.CreateSlide();
presentation.AddSlide(secondSlide);
secondSlide.Select();

text += 'Selected slides count after adding a new slide: ' + selection.GetSlides().length;

*/

const outShapeFill = Api.CreateSolidFill(Api.RGB(50, 70, 180));
const outShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 160 * 36000, 30 * 36000, outShapeFill, outShapeStroke);
outShape.SetPosition(0, 30 * 36000);

const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(text);
slide.AddObject(outShape);

```
