# GetClassType

返回 ApiDrawing 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"drawing"

## 示例

识别演示文稿中绘图对象的类型。

```javascript editor-pptx
// How do I find out what kind of object a shape is in a presentation?

// Get the name and display the type category of a drawing object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const aDrawings = slide.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
```
