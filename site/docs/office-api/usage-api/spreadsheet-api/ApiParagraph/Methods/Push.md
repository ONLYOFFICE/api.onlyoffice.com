# Push

Adds an element to the current paragraph.

## Syntax

```javascript
expression.Push(oElement);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |

## Returns

boolean

## Example

Push a run element to a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I push in a spreadsheet?

// Push using a paragraph object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(130, 100, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const firstRun = paragraph.GetElement(0);
firstRun.AddText('Existing text. ');

const run = Api.CreateRun();
run.AddText('Pushed text.');
paragraph.Push(run);

worksheet.GetRange('A1').SetValue('Elements in paragraph: ' + paragraph.GetElementsCount());
```
