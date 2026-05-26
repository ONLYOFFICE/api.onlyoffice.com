# GetMaster

返回当前主题的幻灯片母版。

## 语法

```javascript
expression.GetMaster();
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## 示例

从演示文稿中的主题获取母版幻灯片。

```javascript editor-pptx
// How do I access the master slide template from a theme?

// Retrieve the theme master and display its type information in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const theme = slide.GetTheme();
const master = theme.GetMaster();
const type = master.GetClassType();

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
