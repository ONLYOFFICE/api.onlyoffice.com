# GetThemeName

如果颜色是主题颜色，则获取主题颜色名称。

## 语法

```javascript
expression.GetThemeName();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SchemeColorId](../../Enumeration/SchemeColorId.md) \| null

## 示例

识别应用于演示文稿中形状填充的设计主题颜色名称。

```javascript editor-pptx
// How do I determine which theme color is used for a fill in a presentation?

// Retrieve the theme color label from a shape's fill in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const themeColor = Api.ThemeColor('accent1');
const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Theme name: ' + themeColor.GetThemeName());
paragraph.AddElement(run);
slide.AddObject(shape);
```
