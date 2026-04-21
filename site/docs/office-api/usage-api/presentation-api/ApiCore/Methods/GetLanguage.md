# GetLanguage

Returns the document language.

## Syntax

```javascript
expression.GetLanguage();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Set and get the language of the current presentation using the core properties in a presentation.

```javascript editor-pptx
// How do I get the language in a presentation?

// Get the language using a core properties object in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLanguage("en-US");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const language = core.GetLanguage();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Language: " + language);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
