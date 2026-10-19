# GetRange

Returns a new ApiTextRange that represents a sub-range of the current range.

## Syntax

```javascript
expression.GetRange(start, rangeEnd);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start offset (0-based) relative to the beginning of this range. |
| rangeEnd | Optional | number | -1 | End offset relative to the beginning of this range. -1 means the end of this range. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Take a sub-range of a text range in a shape on a worksheet.

```javascript editor-xlsx
// Positions are counted from the beginning of the text body, not of the parent range.

// Take the second word as a sub-range and make it bold.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let part = range.GetRange(6, 11);
part.SetBold(true);

worksheet.GetRange("A1").SetValue("GetRange: " + part.GetText());
```
