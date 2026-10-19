# SetLanguage

Specifies the language which will be used to check spelling and grammar (if requested) when processing the contents of the current text range.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Set the spell-check language for a text range in a presentation.

```javascript editor-pptx
// The language applies to the covered fragment only.

// Set the language of the first word and print it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This is a sample text.");

const firstWord = shape.GetTextRange().GetRange(0, 4);
firstWord.SetLanguage("en-CA");
paragraph.AddText(" Language of the first word: " + firstWord.GetTextPr().GetLanguage());
```
