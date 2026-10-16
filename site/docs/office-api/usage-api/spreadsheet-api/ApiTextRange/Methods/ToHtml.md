# ToHtml

Converts the text range to HTML.

## Syntax

```javascript
expression.ToHtml(options);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | The HTML conversion options. |

## Returns

string

## Example

Export a part of a paragraph as an HTML string in a spreadsheet.

```javascript editor-xlsx
// How do I get the HTML markup of only a fragment of the text in a spreadsheet?

// Convert the end of a sentence with its bold words to HTML and write the markup to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Convert only ");
const boldRun = paragraph.AddText("this part");
boldRun.SetBold(true);

const range = paragraph.GetTextRange(8, 22);
const html = range.ToHtml({"RenderHTMLTags": true});
worksheet.GetRange("A1").SetValue("HTML output: " + html.trim());
```
