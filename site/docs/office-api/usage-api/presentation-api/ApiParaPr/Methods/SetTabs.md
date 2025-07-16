# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.\
-**Warning**: The lengths of aPos array and aVal array -**MUST BE** equal to each other.

## Syntax

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | [twips](../../Enumeration/twips.md)[] |  | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | [TabJc](../../Enumeration/TabJc.md)[] |  | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

boolean

## Example

This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

```javascript editor-pptx
// How to set the size of a spacing tabs from a paragraph properties.

// Change a tabs size property of a paragraph properties.

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
const paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
slide.AddObject(shape);

```
