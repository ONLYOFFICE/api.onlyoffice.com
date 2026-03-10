# GetAllShapes

返回包含幻灯片母版中所有形状对象的数组。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

此示例演示如何获取包含幻灯片母版中所有形状对象的数组。

```javascript editor-pptx
// How to get all shapes from the presentation slide master.

// Get all shapes from the presentation master as an array.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
master.AddObject(shape);

const allShapes = master.GetAllShapes();
const classType = allShapes[0].GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + classType);
shape.SetVerticalTextAlign("center");

```
