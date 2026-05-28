# GetText

Returns the inner text of the current table cell.

## Syntax

```javascript
expression.GetText(pr);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pr | Optional | object |  | Options for formatting the returned text. |
| pr.Numbering | Optional | boolean | true | Defines if the resulting string will include numbering or not. |
| pr.Math | Optional | boolean | true | Defines if the resulting string will include mathematical expressions or not. |
| pr.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. |
| pr.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. |
| pr.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. |
| pr.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. |
| pr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. |

## Returns

string

## Example

Read the inner text of a table cell in a presentation.

```javascript editor-pptx
// How do I retrieve the plain text from a table cell in a presentation?

// Extract text from a cell and display it in a separate text box on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");
const text = cell.GetText({TableCellSeparator : ""});

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(30), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(120));
shape.GetContent().GetElement(0).AddText("Cell text: " + text);

slide.AddObject(table);
slide.AddObject(shape);
```
