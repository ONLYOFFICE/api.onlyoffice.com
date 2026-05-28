# RGBA

Creates an RGBA color from red, green, blue and alpha components.

## Syntax

```javascript
expression.RGBA(r, g, b, a);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red component (0-255). |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green component (0-255). |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue component (0-255). |
| a | Required | [byte](../../Enumeration/byte.md) |  | Alpha component (0-255). |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Create a semi-transparent color and apply it as a background of an inline text control in a document.

```javascript editor-docx
// How do I set a translucent background color on an inline text control in a document?

// Use a color with opacity to highlight an inline text area inside a paragraph in a document.

const doc = Api.GetDocument();

const run = Api.CreateRun();
run.AddText('This is an inline text content control with a translucent blue fill.');

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(110, 160, 180, 127));

const fill = Api.CreateSolidFill(Api.ThemeColor('accent2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle('behind');

const paragraph = doc.GetElement(0);
paragraph.AddDrawing(drawing);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
