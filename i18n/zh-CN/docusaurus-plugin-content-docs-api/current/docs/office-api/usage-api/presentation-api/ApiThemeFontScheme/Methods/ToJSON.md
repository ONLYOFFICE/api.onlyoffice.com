# ToJSON

将 ApiThemeFontScheme 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiThemeFontScheme](../ApiThemeFontScheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在演示文稿中将字体方案转换为 JSON 格式。

```javascript editor-pptx
// How can I export a font scheme as JSON data in a presentation?

// Create a font scheme, export it to JSON, and recreate it from the JSON in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const themeMaster = master.GetTheme();
const fontScheme = themeMaster.GetFontScheme();
fontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
fontScheme.SetSchemeName("New font scheme name");

const json = fontScheme.ToJSON();
const fontSchemeFromJSON = Api.FromJSON(json);
const theme = slide.GetTheme();
theme.SetFontScheme(fontSchemeFromJSON);
const sType = fontSchemeFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + sType);
slide.AddObject(shape);
```
