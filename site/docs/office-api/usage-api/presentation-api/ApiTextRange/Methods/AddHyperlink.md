# AddHyperlink

Adds a hyperlink to the current text range.

## Syntax

```javascript
expression.AddHyperlink(link, screenTipText);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | Required | string |  | The link address. Accepts an external URL (http, https, mailto, ftp) or an internal link. In the presentation editor, the internal link is one of the slide actions: "ppaction://hlinkshowjump?jump=firstslide", "ppaction://hlinkshowjump?jump=lastslide", "ppaction://hlinkshowjump?jump=nextslide", "ppaction://hlinkshowjump?jump=previousslide", "ppaction://hlinksldjumpslide\{N\}" (N is the zero-based slide index), "ppaction://hlinkfile?file=\{path\}" (opens an external file). In the spreadsheet editor, the internal link is "#" followed by a cell range or a defined name, for example, "#Sheet1!A1" or "#MyName". |
| screenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null \| undefined

## Example

Attach a hyperlink to part of a shape's text in a presentation.

```javascript editor-pptx
// The range must stay within a single paragraph, and besides a web address the link can be a slide action, for example, "ppaction://hlinksldjumpslide1" for the second slide.

// Turn the word "here" into a link to the ONLYOFFICE website.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Click here to learn more");
slide.AddObject(shape);

const range = shape.GetTextRange();
const link = range.GetRange(6, 10);
link.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");
```
