# SetIndLeft

Sets the paragraph left side indentation.

Inherited from [ApiParaPr.SetIndLeft](../../ApiParaPr/Methods/SetIndLeft.md).

## Syntax

```javascript
expression.SetIndLeft(nValue);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The paragraph left side indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Indent a paragraph from the left inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I push paragraph text away from the left edge in a spreadsheet?

// Control how far a block of text starts from the left side of a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
content.Push(paragraph);
```
