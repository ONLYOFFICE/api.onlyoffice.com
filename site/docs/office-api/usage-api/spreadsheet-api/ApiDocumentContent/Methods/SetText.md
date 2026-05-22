# SetText

Replaces all content of the current document content object with the specified text,
preserving the formatting of the first paragraph.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace the text of a shape's content in a spreadsheet.

```javascript editor-xlsx
// How do I overwrite all the text inside a shape's content in a spreadsheet?

// Clear existing text and write a single sentence into a shape's document content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
content.GetElement(0).AddText("Original text in the shape.");
content.SetText("Updated text in the shape.");
worksheet.GetRange("A1").SetValue("Shape text: " + content.GetText());
```
