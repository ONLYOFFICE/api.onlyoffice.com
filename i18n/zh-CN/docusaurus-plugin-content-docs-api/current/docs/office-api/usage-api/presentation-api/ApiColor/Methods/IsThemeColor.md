# IsThemeColor

如果颜色是主题颜色则返回 true。

## 语法

```javascript
expression.IsThemeColor();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何检查形状填充中使用的颜色是否为主题颜色。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
run.AddText('\nIs themeColor a theme color? ' + themeColor.IsThemeColor());
paragraph.AddElement(run);
slide.AddObject(shape);

```
