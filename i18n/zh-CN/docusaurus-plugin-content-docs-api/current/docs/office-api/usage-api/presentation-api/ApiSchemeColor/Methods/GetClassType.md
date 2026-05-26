# GetClassType

返回 ApiSchemeColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSchemeColor](../ApiSchemeColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"schemeColor"

## 示例

查找演示文稿中配色方案颜色的类类型。

```javascript editor-pptx
// How do I identify a color's class type in a presentation?

// Display the class identifier of a color object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const classType = schemeColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);
```
