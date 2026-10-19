# GetMinorFont

返回当前主题字体方案的次要主题字体。

## 语法

```javascript
expression.GetMinorFont(script);
```

`expression` - 表示 [ApiThemeFontScheme](../ApiThemeFontScheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| script | 可选 | [ThemeFontScript](../../Enumeration/ThemeFontScript.md) | "latin" | 应用该字体的文字脚本。 |

## 返回值

string \| null \| undefined

## 示例

使用演示文稿主题的次要字体书写正文。

```javascript editor-pptx
// Read the body font of a theme font scheme to use it for new text.

// Get the minor latin font of the font scheme and apply it to the text of a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = presentation.GetMaster(0).GetTheme().GetFontScheme();
const minorFont = fontScheme.GetMinorFont();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const run = shape.GetContent().GetElement(0).AddText("Body font: " + minorFont);
run.SetFontFamily(minorFont);
slide.AddObject(shape);
```
