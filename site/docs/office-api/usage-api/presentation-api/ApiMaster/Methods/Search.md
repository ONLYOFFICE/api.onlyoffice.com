# Search

Searches for the specified text within the current slide master and returns all found occurrences as text ranges.

## Syntax

```javascript
expression.Search(text, isMatchCase, isWholeWords);
```

`expression` - A variable that represents an [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| RegExp |  | The text to search for, or a regular expression to match. When a RegExp is passed, isMatchCase and isWholeWords are ignored (control case sensitivity with the "i" flag instead). |
| isMatchCase | Optional | boolean | false | Case sensitive or not. |
| isWholeWords | Optional | boolean | false | Whether to search for whole words only. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)[]

## Example

Find every occurrence of a word on a slide master and make the first match bold.

```javascript editor-pptx
// Search is scoped to this master, returning each match as a text range.

// Add a shape to the master, search it for a keyword, and embolden the first result.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
master.AddObject(shape);
shape.GetTextRange().SetText("Quarterly summary and quarterly outlook.");

const results = master.Search("quarterly");
results[0].SetBold(true);
```
