# 替换图像模式

指定在替换所选图像时，如何调整图像对象。

## 类型

Enumeration（枚举）

## 值

- "fill"（填充）
- "fit"（适应）
- "original"（原始大小）
- "stretch"（拉伸）


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
