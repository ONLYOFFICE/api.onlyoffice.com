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
| link | Required | string |  | The hyperlink address. |
| tooltip | Required | string |  | The tooltip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

Create a hyperlink and set it to an image in a presentation.

```javascript editor-pptx
// How can I create the hyperlink in a presentation?

// Create the hyperlink in a presentation.

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
