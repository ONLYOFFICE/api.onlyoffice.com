# FromJSON

将指定的 JSON 对象转换为相应类型的文档生成器对象。

## 语法

```javascript
expression.FromJSON(sMessage);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMessage | 必需 | JSON |  | 要转换的 JSON 对象。 |

## 返回值

此方法不返回任何数据。

## 示例

将字体方案转换为 JSON 格式并在演示文稿中重新创建。

```javascript editor-pptx
// How do I restore a font scheme from JSON data in a presentation?

// Load and apply a font scheme that was previously exported as JSON in a presentation.

const presentation = Api.GetPresentation();

const master = presentation.GetMaster(0);
const themeMaster = master.GetTheme();
const fontScheme = themeMaster.GetFontScheme();
fontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
fontScheme.SetSchemeName("New font scheme name");
const json = fontScheme.ToJSON();
const fontSchemeFromJSON = Api.FromJSON(json);

const slide = presentation.GetSlideByIndex(0);
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

slide.RemoveAllObjects();
slide.AddObject(shape);
```
