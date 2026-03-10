# GetFontNames

返回当前段落中所有元素的所有字体名称。

## 语法

```javascript
expression.GetFontNames();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

此示例展示如何获取段落中所有元素的所有字体名称。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#FF6F3D'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText('This is just a sample text. ');
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontFamily('Calibri Light');
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);

const fonts = paragraph.GetFontNames();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Fonts: ' + fonts.join(', '));
docContent.Push(paragraph2);
slide.AddObject(shape);

```
