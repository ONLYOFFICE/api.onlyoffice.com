# SetSpacingBefore

Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then \
any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then \
it will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

boolean

## Example

This example sets the spacing before the current paragraph.

```javascript editor-xlsx
// How to add the spacing before the paragraphs using points.

// Get a paragraph from the shape's content then add a text specifying the spacing before a custom text.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingBefore(1440);
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
content.Push(paragraph);
```
