# ImageData

An object containing the information about the base64 encoded *png* image.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| height | number | The image height in pixels. |
| replaceMode | [ReplaceImageMode](../Enumeration/ReplaceImageMode.md) | Specifies how to adjust the image object in case of replacing the selected image. |
| src | string | The image source in the base64 format. |
| width | number | The image width in pixels. |

## Example

```javascript
window.saveImage = function () {
    let imageSrc = imageEditor.toDataURL();
    let editorDimension = imageEditor.getCanvasSize();
    let width = editorDimension.width;
    let height = editorDimension.height;
    let imageData = {
        "src": imageSrc,
        "width": width,
        "height": height,
        "replaceMode": "original"
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [imageData]);
    window.Asc.plugin.callCommand("close", "");
};
```
