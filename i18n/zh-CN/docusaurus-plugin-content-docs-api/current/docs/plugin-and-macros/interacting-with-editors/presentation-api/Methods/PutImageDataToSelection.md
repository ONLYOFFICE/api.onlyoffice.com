# 插入图像数据

用指定参数中的图像替换第一个被选中的图形。  \
如果当前没有选中的图形，该方法会在当前位置插入图像。

## 语法

```javascript
expression.PutImageDataToSelection(oImageData);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称**     | **必填/选填**         | **数据类型**                            | **默认值** | **说明**                                                  |
|--------------|------------------------|-----------------------------------------|-------------|-----------------------------------------------------------|
| oImageData   | 必填                   | [图像数据](../Enumeration/ImageData.md) |             | 有关 base64 编码的 png 图像的信息。                    |

## 返回值

此方法不返回任何值。

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
