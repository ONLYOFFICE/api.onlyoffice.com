# GetTextRange

Returns an ApiTextRange object that represents the part of the text contained in the current run. The run must be attached to the document before calling this method.

## Syntax

```javascript
expression.GetTextRange(start, end);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start character position (0-based, inclusive) relative to the run. |
| end | Optional | number |  | End character position (0-based, exclusive). Defaults to the end of the run. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Colour a part of a text run of a shape on a worksheet through a text range.

```javascript editor-xlsx
// Positions are counted from the beginning of the run, so the rest of the paragraph is untouched.

// Take the range of the first word of the run and paint it red.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("Hello World");
paragraph.AddElement(run);

let range = run.GetTextRange(0, 5);
range.SetColor(Api.RGB(255, 0, 0));
```
