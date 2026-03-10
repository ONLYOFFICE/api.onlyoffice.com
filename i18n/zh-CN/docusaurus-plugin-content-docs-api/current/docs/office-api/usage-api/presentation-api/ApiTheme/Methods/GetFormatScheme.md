# GetFormatScheme

返回当前主题的格式方案。

## 语法

```javascript
expression.GetFormatScheme();
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md)

## 示例

此示例演示如何获取主题的格式方案。

```javascript editor-pptx
// How to get a format scheme from a theme.

// Get a format scheme and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const formatScheme = theme.GetFormatScheme();
const type = formatScheme.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + type);
slide.AddObject(shape);

```
