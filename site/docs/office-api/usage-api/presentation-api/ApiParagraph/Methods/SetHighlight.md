# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current paragraph.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Available highlight colors

- "black"
- "blue"
- "cyan"
- "green"
- "magenta"
- "red"
- "yellow"
- "white"
- "darkBlue"
- "darkCyan"
- "darkGreen"
- "darkMagenta"
- "darkRed"
- "darkYellow"
- "darkGray"
- "lightGray"
- "none"

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets highlight color "lightGray" for the paragraph.

```javascript editor-pptx
// How to create a paragraph and highlight it with color.

// Set a light gray highlight color to a paragraph and insert it to the slide shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.SetHighlight("lightGray");
docContent.Push(paragraph);
slide.AddObject(shape);

```
