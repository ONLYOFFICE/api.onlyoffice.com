# SetTextFit

为当前形状设置文本自动调整类型。

## 语法

```javascript
expression.SetTextFit(fitType);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fitType | 必需 | [TextFitType](../../Enumeration/TextFitType.md) |  | 文本自动调整类型。 |

## 返回值

boolean

## 示例

在 PDF 中为形状设置不同的文本适应类型。

```javascript editor-pdf
// Make text shrink or stay the same size when it overflows a shape in a PDF.

// Create three shapes and apply each of the available text autofit types in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const longText = 'This is a long text to demonstrate how the text fit setting works inside the shape.';

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(60, 50, 80)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(5), Api.MillimetersToEmus(30));
const paragraph1 = Api.CreateParagraph();
paragraph1.AddText('noAutoFit: ' + longText);
shape1.GetContent().Push(paragraph1);
shape1.SetTextFit('noAutoFit');
page.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(50, 75, 65)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(85), Api.MillimetersToEmus(30));
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('autoFit: ' + longText);
shape2.GetContent().Push(paragraph2);
shape2.SetTextFit('autoFit');
page.AddObject(shape2);

const shape3 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(75, 55, 55)), stroke
);
shape3.SetPosition(Api.MillimetersToEmus(165), Api.MillimetersToEmus(30));
const paragraph3 = Api.CreateParagraph();
paragraph3.AddText('normAutoFit: ' + longText);
shape3.GetContent().Push(paragraph3);
shape3.SetTextFit('normAutoFit');
page.AddObject(shape3);
```
