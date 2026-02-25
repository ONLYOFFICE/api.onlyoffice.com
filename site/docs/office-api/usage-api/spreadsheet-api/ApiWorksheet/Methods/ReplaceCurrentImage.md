# ReplaceCurrentImage

Replaces the current image with a new one.

## Syntax

```javascript
expression.ReplaceCurrentImage(sImageUrl, nWidth, nHeight);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | string |  | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example replaces the image with a new one.

```javascript editor-xlsx playground
// How to replace an image to another one.

// Replace an image from one to another using their urls.

let worksheet = Api.GetActiveSheet();
let drawing = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000,
	0, 2 * 36000, 0, 3 * 36000
); // todo_example we don't have method ApiDrawing.Select() which is necessary for this example
worksheet.ReplaceCurrentImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);

```
