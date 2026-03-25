# PutImageDataToSelection

用参数中指定的图像替换第一个选定的图形。
如果没有选择图形，该方法将在当前位置插入图像。

## 语法

```javascript
expression.PutImageDataToSelection(oImageData);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oImageData | 必需 | [ImageData](../Enumeration/ImageData.md) |  | 关于 base64 编码 *png* 图像的信息。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.saveImage = function () {
    let imageSrc = imageEditor.toDataURL ();
    let editorDimension = imageEditor.getCanvasSize ();
    let width = editorDimension.width;
    let height = editorDimension.height;
    let imageData = {
        "src": imageSrc,
        "width": width,
        "height": height
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [imageData]);
    window.Asc.plugin.executeCommand ("close", "");
};
```
