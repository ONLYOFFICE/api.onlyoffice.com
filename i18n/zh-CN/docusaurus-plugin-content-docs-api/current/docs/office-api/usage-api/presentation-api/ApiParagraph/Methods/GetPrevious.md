# GetPrevious

返回上一个段落。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例展示如何获取上一个段落。

```javascript editor-pptx
// How to get the previous paragraph of the current one.

// Return the previous paragraph on the slide and make its text bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();

const paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph.");
docContent.Push(paragraph1);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph.");
docContent.Push(paragraph2);

slide.AddObject(shape);
const previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);

```
