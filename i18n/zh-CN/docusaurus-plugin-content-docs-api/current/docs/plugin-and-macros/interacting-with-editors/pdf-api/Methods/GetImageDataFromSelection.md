# GetImageDataFromSelection

返回所选图形中第一个图形的图像数据。如果没有选择图形，该方法将返回一个白色矩形。

## 语法

```javascript
expression.GetImageDataFromSelection();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ImageData](../Enumeration/ImageData.md)

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetImageDataFromSelection", [], function (result) {
    let image = document.createElement("img");
    image.src = result.src;
    image.width = result.width;
    image.height = result.height;
    CreateImageEditor ();
    initializationDone = true;
    var imageHeight = null;
    image.height > 500 ? imageHeight = 500 : imageHeight = image.height;
    window.Asc.plugin.resizeWindow (undefined, undefined, 870, imageHeight + 300, 0, 0);
});
```
