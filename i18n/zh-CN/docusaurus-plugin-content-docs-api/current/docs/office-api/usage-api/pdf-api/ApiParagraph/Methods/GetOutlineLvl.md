# GetOutlineLvl

返回指定属性的大纲级别。

继承自 [ApiParaPr.GetOutlineLvl](../../ApiParaPr/Methods/GetOutlineLvl.md)。

## 语法

```javascript
expression.GetOutlineLvl();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number \| undefined

## 示例

在 PDF 中检查分配给段落的标题级别。

```javascript editor-pdf
// How do I determine the outline level of a paragraph in a PDF?

// Read the current heading level setting for a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const content = shape.GetContent();
const paragraph = content.GetElement(0);

const levelBefore = paragraph.GetOutlineLvl();
paragraph.SetOutlineLvl(8);
const levelAfter = paragraph.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\n';
text += 'but originally was set to ' + levelBefore;
paragraph.AddText(text);
```
