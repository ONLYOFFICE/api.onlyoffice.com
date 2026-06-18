# CreateHyperlink

Creates a new hyperlink object to be used for setting hyperlinks on drawing objects (shapes or images).

## Syntax

```javascript
expression.CreateHyperlink(link, tooltip);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | Required | string |  | The hyperlink address. Accepts an external URL (http, https, mailto, ftp) or one of the internal slide actions: "ppaction://hlinkshowjump?jump=firstslide", "ppaction://hlinkshowjump?jump=lastslide", "ppaction://hlinkshowjump?jump=nextslide", "ppaction://hlinkshowjump?jump=previousslide", "ppaction://hlinksldjumpslide\{N\}" (N is the zero-based slide index), "ppaction://hlinkfile?file=\{path\}" (opens an external file). |
| tooltip | Required | string |  | The tooltip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

Add a clickable link to an image in a presentation.

```javascript editor-pptx
// How do I make an image open a website when clicked in a presentation?

// Attach a URL to an image so it navigates to a webpage in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
slide.AddObject(image);

const hyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
image.SetHyperlink(hyperlink);
```
