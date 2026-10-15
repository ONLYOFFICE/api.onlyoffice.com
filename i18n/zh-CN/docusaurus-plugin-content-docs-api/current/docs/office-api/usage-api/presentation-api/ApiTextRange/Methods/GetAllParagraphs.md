# GetAllParagraphs

返回此范围内的所有 Paragraph 对象。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

在演示文稿形状中获取文本范围所涵盖的所有段落。

```javascript editor-pptx
// Useful for iterating over every paragraph within a selection.

// Retrieve all paragraphs and display their count.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 75 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("First paragraph");
const para2 = Api.CreateParagraph();
para2.AddText("Second paragraph");
docContent.Push(para2);
const para3 = Api.CreateParagraph();
para3.AddText("Third paragraph");
docContent.Push(para3);
slide.AddObject(shape);

const range = shape.GetTextRange();
const paragraphs = range.GetAllParagraphs();

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 4000000);
shape2.GetDocContent().GetElement(0).AddText("Total paragraphs: " + paragraphs.length);
slide.AddObject(shape2);
```
