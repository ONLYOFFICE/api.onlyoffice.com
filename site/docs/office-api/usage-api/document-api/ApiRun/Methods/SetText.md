# SetText

Replaces the whole text of the current run with the specified text, keeping the run properties.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| number[] |  | The new text of the run, as a string or as an array of character codes. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace the whole text of a run in one call in a document.

```javascript editor-docx
// How do I replace the text of a run without losing its formatting in a document?

// Swap the wording of a run while its bold, size and color stay in place in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(28);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold and still 14 points.");
```
