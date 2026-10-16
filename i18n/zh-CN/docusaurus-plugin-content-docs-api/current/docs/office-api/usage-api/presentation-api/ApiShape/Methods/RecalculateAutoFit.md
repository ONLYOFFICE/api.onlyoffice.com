# RecalculateAutoFit

根据当前形状的文本自动调整类型重新计算其文本自动调整。"autoFit" 类型会调整形状大小以适应文本，"normAutoFit" 类型会减小字号和行距以使文本适应形状。重新计算在脚本执行后进行。\<note\>文档生成器不支持此方法，它仅在编辑器中有效。\</note\>

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.RecalculateAutoFit();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在形状的文本更改后，重新计算其文本自动适应。

```javascript editor-pptx
// Set the autofit types to empty shapes and then add a long text to them.

// After the script is executed, the first shape is resized to fit the text and the text of the second shape is shrunk to fit the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const longText = 'This long text is added to the shape after its autofit type is set, so the autofit is recalculated for the new text.';

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(20),
	Api.CreateSolidFill(Api.RGB(60, 50, 80)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(60), Api.MillimetersToEmus(40));
shape1.SetTextFit('autoFit');
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(20),
	Api.CreateSolidFill(Api.RGB(75, 55, 55)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(180), Api.MillimetersToEmus(40));
shape2.SetTextFit('normAutoFit');
slide.AddObject(shape2);

shape1.GetDocContent().GetElement(0).AddText('autoFit: ' + longText);
shape2.GetDocContent().GetElement(0).AddText('normAutoFit: ' + longText);

shape1.RecalculateAutoFit();
shape2.RecalculateAutoFit();
```
