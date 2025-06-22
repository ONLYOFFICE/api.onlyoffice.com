# FromJSON

Converts the specified JSON object into the Document Builder object of the corresponding type.

## Syntax

```javascript
expression.FromJSON(sMessage);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMessage | Required | JSON |  | The JSON object to convert. |

## Returns

This method doesn't return any data.

## Example

This example transforms font scheme to JSON then restore it from JSON.

```javascript editor-pptx
// How to get a font scheme from JSON file.

// Parse JSON file to get an object like font scheme.

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

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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
