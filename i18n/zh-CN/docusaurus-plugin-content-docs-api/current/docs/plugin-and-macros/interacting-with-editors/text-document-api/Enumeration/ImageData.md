# ImageData

包含 base64 编码 *png* 图像信息的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| height | number | 图像的高度，以像素为单位。 |
| replaceMode | [ReplaceImageMode](../Enumeration/ReplaceImageMode.md) | 指定在替换所选图像时如何调整图像对象。 |
| src | string | base64 格式的图像源。 |
| width | number | 图像的宽度，以像素为单位。 |
## 类型

Object



## 示例

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
