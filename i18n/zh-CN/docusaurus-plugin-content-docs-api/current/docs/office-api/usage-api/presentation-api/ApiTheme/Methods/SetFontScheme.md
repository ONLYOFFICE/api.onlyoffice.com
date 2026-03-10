# SetFontScheme

为当前演示文稿主题设置字体方案。

## 语法

```javascript
expression.SetFontScheme(oApiFontScheme);
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFontScheme | 必需 | [ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md) |  | 主题字体方案。 |

## 返回值

boolean

## 示例

此示例为当前演示文稿主题设置字体方案。

```javascript editor-pptx
// How to get a theme and set a new font scheme.

// Create a new font scheme and apply it to the slide theme.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
const theme = slide.GetTheme();
theme.SetFontScheme(fontScheme);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph with a new font scheme set.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
