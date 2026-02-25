# PictureFormPrBase

Specific picture form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| lockAspectRatio | boolean | Specifies if the aspect ratio of the picture form is locked or not. |
| respectBorders | boolean | Specifies if the form border width is respected or not when scaling the image. |
| scaleFlag | [ScaleFlag](../Enumeration/ScaleFlag.md) | The condition to scale an image in the picture form: "always", "never", "tooBig" or "tooSmall". |
| shiftX | [percentage](../Enumeration/percentage.md) | Horizontal picture position inside the picture form measured in percent: **0** - the picture is placed on the left; **50** - the picture is placed in the center; **100** - the picture is placed on the right. |
| shiftY | [percentage](../Enumeration/percentage.md) | Vertical picture position inside the picture form measured in percent: **0** - the picture is placed on top; **50** - the picture is placed in the center; **100** - the picture is placed on the bottom. |


## Example

Create a picture form with the specific picture form properties.

```javascript editor-pdf playground
// How to create a picture form with its base properties.

// Create the base properties and apply them to the ApiPictureForm object.

const pictureFormPrBase = {
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
};
const pictureForm = Api.CreatePictureForm(pictureFormPrBase);

```
