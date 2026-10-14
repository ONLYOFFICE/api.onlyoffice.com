# SearchAndReplace

Finds and replaces the text in the presentation.

## Syntax

```javascript
expression.SearchAndReplace(properties);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| properties | Required | Object |  | The properties to find and replace. |
| properties.searchString | Required | string |  | Search string. |
| properties.replaceString | Required | string |  | Replacement string. |
| properties.matchCase | Optional | boolean | false | Case sensitive or not. |
| properties.wholeWords | Optional | boolean | false | Whether to search for whole words only. |

## Returns

boolean

## Example

Replace a word across a presentation while keeping an untouched copy of the source shape for comparison.

```javascript editor-pptx
// The copy is duplicated before the replacement and added to the slide afterwards, so it keeps the original text.

// Add a shape, copy it aside, replace "first" with "final", then place the untouched copy above the replaced result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 8000000, 900000);
shape.SetPosition(600000, 3200000);
slide.AddObject(shape);
shape.GetTextRange().SetText("The first draft. The first review. The first release.");

const original = shape.Copy();

presentation.SearchAndReplace({"searchString": "first", "replaceString": "final"});

original.SetPosition(600000, 1000000);
slide.AddObject(original);
```
