# GetClassType

返回 ApiUniColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUniColor](../ApiUniColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"uniColor"

## 示例

了解您在 PDF 中使用的颜色对象类型。

```javascript editor-pdf
// How do I identify the type of color being used in a PDF?

// Determine what color system defines a color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const presetColor = Api.CreatePresetColor("lightYellow");
const gs1 = Api.CreateGradientStop(presetColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetContent();
const classType = presetColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
```
