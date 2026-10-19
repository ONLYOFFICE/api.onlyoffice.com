# GetTextFit

返回当前形状的文本自动调整类型。

## 语法

```javascript
expression.GetTextFit();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TextFitType](../../Enumeration/TextFitType.md)

## 示例

读取 PDF 中当前应用于形状的文本自动调整类型。

```javascript editor-pdf
// Check which text fit mode is applied to a shape in a PDF.

// Apply an autofit type with SetTextFit, then retrieve it back and display it in the shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(60, 50, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(40),
	fill, stroke
);
shape.SetPosition(Api.MillimetersToEmus(50), Api.MillimetersToEmus(50));
shape.SetTextFit('autoFit');

const fitType = shape.GetTextFit();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Current text fit: ' + fitType);
shape.GetContent().Push(paragraph);
page.AddObject(shape);
```
