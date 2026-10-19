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

读取当前应用于形状的文本自动调整类型。

```javascript editor-pptx
// Apply an autofit type with SetTextFit, then retrieve it back.

// The retrieved value is added to the shape as text and equals "autoFit".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(60, 50, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(40),
	fill, stroke
);
shape.SetPosition(Api.MillimetersToEmus(50), Api.MillimetersToEmus(50));
shape.SetTextFit('autoFit');
slide.AddObject(shape);

const fitType = shape.GetTextFit();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Current text fit: ' + fitType);
```
