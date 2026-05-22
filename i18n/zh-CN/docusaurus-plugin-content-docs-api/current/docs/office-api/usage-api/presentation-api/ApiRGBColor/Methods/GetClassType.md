# GetClassType

返回 ApiRGBColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRGBColor](../ApiRGBColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"rgbColor"

## 示例

识别演示文稿中 RGB 颜色的类型。

```javascript editor-pptx
// How do I determine what type an RGB color is in a presentation?

// Display the color type name on the slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgbColor = Api.CreateRGBColor(255, 213, 191);
const gs1 = Api.CreateGradientStop(rgbColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const classType = rgbColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);
```
