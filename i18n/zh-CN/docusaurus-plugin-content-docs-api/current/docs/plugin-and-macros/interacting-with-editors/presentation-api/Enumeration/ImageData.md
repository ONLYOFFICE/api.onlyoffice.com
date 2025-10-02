# 图像数据

一个包含 base64 编码的 png 图像信息的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| height | number | 图像的高度（单位：像素）。 |
| replaceMode | [替换图片模式](../Enumeration/ReplaceImageMode.md) | 指定在替换选中图像时，如何调整图像对象。 |
| src | string | 图像的 base64 编码格式源。 |
| width | number | 图像的宽度（单位：像素）。 |
## 类型

Object（对象）



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
