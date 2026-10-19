# GetColor

Returns a color of the theme color scheme.

## Syntax

```javascript
expression.GetColor(position);
```

`expression` - A variable that represents an [ApiThemeColorScheme](../ApiThemeColorScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | number |  | The color position in the color scheme, the same as in the ChangeColor method: 0-5 - accent1-accent6, 6 - dk1, 7 - dk2, 8 - folHlink, 9 - hlink, 10 - lt1, 11 - lt2. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## Example

Fill shapes with the accent colors of a presentation theme.

```javascript editor-pptx
// Read the colors of a theme color scheme to reuse them on a slide.

// Get each accent color of the color scheme, fill a shape with it and write its HEX value inside.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = presentation.GetMaster(0).GetTheme().GetColorScheme();
for (let position = 0; position < 6; position++) {
	const color = colorScheme.GetColor(position);
	const shape = Api.CreateShape("rect", 45 * 36000, 30 * 36000, Api.CreateSolidFill(color), Api.CreateStroke(0, Api.CreateNoFill()));
	shape.SetPosition((10 + position * 50) * 36000, 60 * 36000);
	shape.GetContent().GetElement(0).AddText(color.GetHex());
	slide.AddObject(shape);
}
```
