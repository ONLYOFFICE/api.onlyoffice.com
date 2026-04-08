# ReplaceImageMode

指定在替换所选图像时如何调整图像对象。

## 类型

枚举

## 值

- "fill"
- "fit"
- "original"
- "stretch"


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
    window.Asc.plugin.executeCommand("close", "");
};
```
