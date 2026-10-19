# GetBackground

返回当前幻灯片版式的背景填充。

## 语法

```javascript
expression.GetBackground();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

返回当前幻灯片版式的背景。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const gs1 = Api.CreateGradientStop(Api.RGB(70, 50, 90), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(40, 80, 100), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
layout.SetBackground(fill);

const bgFill = layout.GetBackground();
const classType = bgFill.GetClassType();

slide.RemoveAllObjects();
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(40),
	Api.CreateSolidFill(Api.RGB(50, 50, 65)),
	stroke
);
shape.SetPosition(Api.MillimetersToEmus(30), Api.MillimetersToEmus(30));

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Layout background fill class type: ' + classType);
slide.AddObject(shape);
```
