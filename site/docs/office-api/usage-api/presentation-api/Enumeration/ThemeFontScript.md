# ThemeFontScript

The available scripts of a theme font: **"latin"** - the latin text, **"ea"** - the east asian text, **"cs"** - the complex script text.

## Type

Enumeration

## Values

- "latin"
- "ea"
- "cs"

## Example

Get the east asian major font of a theme font scheme.

```javascript editor-pptx
// Specify the script whose theme font is returned.

// Pass the "ea" script to the GetMajorFont method of the ApiThemeFontScheme object.

const eastAsianFont = fontScheme.GetMajorFont("ea");
```
