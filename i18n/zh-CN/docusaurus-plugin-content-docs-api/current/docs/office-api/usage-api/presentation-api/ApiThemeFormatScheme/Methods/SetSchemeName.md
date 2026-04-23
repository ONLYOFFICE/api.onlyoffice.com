# SetSchemeName

为当前主题格式方案设置名称。

## 语法

```javascript
expression.SetSchemeName(sName);
```

`expression` - 表示 [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 主题格式方案名称。 |

## 返回值

boolean

## 示例

此示例为当前主题格式方案设置名称。

```javascript editor-pptx
// How to set a format scheme name.

// Create new format scheme and set its name.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const formatScheme = theme.GetFormatScheme();
formatScheme.SetSchemeName("New format scheme name");

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("New name was set to the theme format scheme.");
slide.AddObject(shape);

```
