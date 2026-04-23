# GetClassType

返回 ApiTimeLine 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTimeLine](../ApiTimeLine.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"timeLine"

## 示例

此示例获取 ApiTimeLine 对象的类类型。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const timeLine = slide.GetTimeLine();
const classType = timeLine.GetClassType();

const shape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 100 * 36000);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Class type: ' + classType);
slide.AddObject(shape);

```
