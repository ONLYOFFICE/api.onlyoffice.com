# OLE 对象数据

OLE 对象数据。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ----------- |
| ApplicationId | string | 可编辑当前 OLE 对象的插件标识符，必须为 *asc.&#123;UUID&#125;* 格式。 |
| Data | string | OLE 对象数据（内部格式）。 |
| Height | number | OLE 对象高度，单位为毫米。 |
| HeightPix | number | OLE 对象图像高度，单位为像素。 |
| ImageData | string | 存储在 OLE 对象中的 base64 格式图像，供插件使用。 |
| InternalId | string | OLE 对象标识符，用于操作已添加到文档中的 OLE 对象。 |
| ParaDrawingId | string | 包含当前 OLE 对象的绘图对象标识符。 |
| Width | number | OLE 对象宽度，单位为毫米。 |
| WidthPix | number | OLE 对象图像宽度，单位为像素。 |
## 类型

Object（对象）



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
