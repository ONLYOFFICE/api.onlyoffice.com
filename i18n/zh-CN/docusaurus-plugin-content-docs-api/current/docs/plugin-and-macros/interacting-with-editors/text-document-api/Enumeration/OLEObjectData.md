# OLEObjectData

OLE 对象数据。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| ApplicationId | string | 可以编辑当前 OLE 对象的插件标识符，必须是 *asc.&#123;UUID&#125;* 类型。 |
| Data | string | OLE 对象数据（内部格式）。 |
| Height | number | OLE 对象的高度，以毫米为单位。 |
| HeightPix | number | OLE 对象图像的高度，以像素为单位。 |
| ImageData | string | 存储在 OLE 对象中并由插件使用的 base64 格式图像。 |
| InternalId | string | 用于处理添加到文档中的 OLE 对象的 OLE 对象标识符。 |
| ParaDrawingId | string | 包含当前 OLE 对象的绘图对象的标识符。 |
| Width | number | OLE 对象的宽度，以毫米为单位。 |
| WidthPix | number | OLE 对象图像的宽度，以像素为单位。 |
## 类型

Object



## 示例

```javascript
let oleObjectData = {
    "Data": "{data}",
    "ImageData": "data:image/png;base64,image-in-the-base64-format",
    "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "Width": 70,
    "Height": 70,
    "WidthPix": 60 * 36000,
    "HeightPix": 60 * 36000
};
window.Asc.plugin.executeMethod("InsertOleObject", [oleObjectData, true]);
```
