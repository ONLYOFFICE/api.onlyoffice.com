# GetPlaceholder

返回当前绘图对象的占位符。

## 语法

```javascript
expression.GetPlaceholder();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) \| null

## 示例

此示例演示如何从当前绘图对象获取占位符。

```javascript editor-pptx
// How to get a placeholder of a slide shape.

// Get a placeholder of a slide shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

let placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
placeholder = shape.GetPlaceholder();
const type = placeholder.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the element from the shape = " + type);
slide.AddObject(shape);

```
