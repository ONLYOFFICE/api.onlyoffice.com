# Last

返回段落的最后一个元素。

## 语法

```javascript
expression.Last();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

This example shows how to get the last element of the paragraph.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

const run1 = Api.CreateRun();
run1.AddText('This is the first run. ');
paragraph.Push(run1);

const run2 = Api.CreateRun();
run2.AddText('And this is the last run in the paragraph.');
paragraph.Push(run2);

const lastElement = paragraph.Last();
lastElement.SetBold(true);
slide.AddObject(shape);

```
