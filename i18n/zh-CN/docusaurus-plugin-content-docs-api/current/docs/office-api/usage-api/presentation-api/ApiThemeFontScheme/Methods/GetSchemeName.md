# GetSchemeName

返回当前主题字体方案的名称。

## 语法

```javascript
expression.GetSchemeName();
```

`expression` - 表示 [ApiThemeFontScheme](../ApiThemeFontScheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在演示文稿中显示主题字体方案的名称。

```javascript editor-pptx
// Identify the font scheme that the presentation theme uses.

// Get the name of the font scheme and write it into a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = presentation.GetMaster(0).GetTheme().GetFontScheme();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetContent().GetElement(0).AddText("Font scheme: " + fontScheme.GetSchemeName());
slide.AddObject(shape);
```
