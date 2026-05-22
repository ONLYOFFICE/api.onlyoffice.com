# GetText

Returns the paragraph text.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| options.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any string can be used. The default separator is "\r". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any string can be used. The default symbol is "\t". |

## Returns

string

## Example

Read the text of a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the plain text from a paragraph inside a shape in a spreadsheet?

// Extract the paragraph text and write it to a cell to verify the content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
worksheet.GetRange("A1").SetValue("Paragraph text: " + text);
```
