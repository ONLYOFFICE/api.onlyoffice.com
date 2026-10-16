# ToHtml

Converts the paragraph to HTML.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.ToHtml(options);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | The HTML conversion options. |

## Returns

string

## Example

Export a paragraph's content as an HTML string for use outside the editor in a spreadsheet.

```javascript editor-xlsx
// How do I get the HTML representation of a paragraph's text and formatting in a spreadsheet?

// Capture the markup of a paragraph inside a shape and write it to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("This paragraph will be converted to ");
const boldRun = paragraph.AddText("HTML");
boldRun.SetBold(true);
const html = paragraph.ToHtml({"RenderHTMLTags": true});
worksheet.GetRange("A1").SetValue("HTML output: " + html.trim());
```
