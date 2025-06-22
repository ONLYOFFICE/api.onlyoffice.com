# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested).

## Syntax

```javascript
expression.SetLanguage(sLangId);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |

## Returns

boolean

## Example

This example sets a language which will be used to check spelling and grammar.

```javascript editor-pptx
// How to specify a language of the current presentation.

// Set the 'en-CA' language to the ApiPresentation object.

const presentation = Api.GetPresentation();
presentation.SetLanguage("en-CA");

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("English (Canada) will be used to check spelling and grammar in this presentation (if requested).");
slide.AddObject(shape);

```
