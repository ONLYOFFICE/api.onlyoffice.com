# GetLayoutType

返回当前版式的类型。

## 语法

```javascript
expression.GetLayoutType();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LayoutType](../../Enumeration/LayoutType.md)

## 示例

此示例返回布局的类型。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layouts = master.GetAllLayouts();

const fill = Api.CreateSolidFill(Api.HexColor('#33bbaa'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Found layouts with types:\n');
paragraph.AddText(
	layouts
		.map(layout => layout.GetLayoutType())
		.join(', ')
);

```
