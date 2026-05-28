# AddText

Appends the specified text to the end of the document content.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to add. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Append text to the end of a shape's content in a spreadsheet.

```javascript editor-xlsx
// How do I add text to the last paragraph of a shape's document content in a spreadsheet?

// Add a sentence to a shape without replacing its existing text in a spreadsheet.

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
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
worksheet.GetRange("A1").SetValue("Shape text: " + content.GetText({TableCellSeparator: ""}));
```
