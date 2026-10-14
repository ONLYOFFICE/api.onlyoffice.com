# GetAllShapes

返回包含演示文稿幻灯片中所有形状对象的数组，不包括幻灯片版式和幻灯片母版中的形状对象。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

列出演示文稿中的所有形状。

```javascript editor-pptx
// Access every rectangle, circle, heart, or custom shape in the presentation.

// Retrieve shapes from slides and count them in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shapeTypes = ['heart', 'rect', 'ellipse'];
for (let i = 0; i < shapeTypes.length; i++) {
	const fill = Api.CreateSolidFill(Api.RGB(100 + i * 50, 150, 200));
	const stroke = Api.CreateStroke(0, Api.CreateNoFill());
	const shape = Api.CreateShape(shapeTypes[i], 38 * 36000, 38 * 36000, fill, stroke);
	shape.SetPosition(i * 48 * 36000, 0);
	slide.AddObject(shape);
}
const shapesCount = presentation.GetAllShapes().length;
const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 50 * 36000);
slide.AddObject(label);

const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Shapes in presentation excluding slide layouts and master slides: ' + shapesCount);
```
