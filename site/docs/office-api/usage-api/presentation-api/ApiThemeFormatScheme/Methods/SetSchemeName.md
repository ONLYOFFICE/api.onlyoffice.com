# SetSchemeName

Sets a name to the current theme format scheme.

## Syntax

```javascript
expression.SetSchemeName(sName);
```

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | Theme format scheme name. |

## Returns

boolean

## Example

Assign a name to a theme format scheme in a presentation.

```javascript editor-pptx
// How do I give a name to a format scheme in a presentation?

// Label a theme format scheme with a custom name in a presentation.

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
