# GetSelection

返回当前演示文稿中的选择。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSelection](../../ApiSelection/ApiSelection.md)

## 示例

从演示文稿对象获取当前选区。

```javascript editor-pptx
// Add two shapes to the slide and select the second one.

// The selected shape is filled with orange and labeled.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(50),
	Api.CreateSolidFill(Api.RGB(150, 150, 150)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(60), Api.MillimetersToEmus(70));
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(50),
	Api.CreateSolidFill(Api.RGB(150, 150, 150)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(180), Api.MillimetersToEmus(70));
slide.AddObject(shape2);
shape2.Select();

const selection = presentation.GetSelection();
const selectedShapes = selection.GetShapes();
for (let i = 0; i < selectedShapes.length; i++) {
	selectedShapes[i].SetFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
	selectedShapes[i].GetDocContent().GetElement(0).AddText('Selected shape');
}
```
