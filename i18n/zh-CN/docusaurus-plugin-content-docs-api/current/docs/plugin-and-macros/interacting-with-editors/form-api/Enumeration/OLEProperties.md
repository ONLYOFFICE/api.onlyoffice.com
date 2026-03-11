# OLEProperties

OLE 对象属性

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| data | string | OLE 对象数据（内部格式）。 |
| guid | string | 可以编辑当前 OLE 对象的插件标识符，必须是 *asc.&#123;UUID&#125;* 类型。 |
| height | number | OLE 对象的高度，以毫米为单位。 |
| heightPix | number | OLE 对象图像的高度，以像素为单位。 |
| imgSrc | string | 存储在 OLE 对象中并由插件使用的图像（其可视表示）的链接。 |
| width | number | OLE 对象的宽度，以毫米为单位。 |
| widthPix | number | OLE 对象图像的宽度，以像素为单位。 |
## 类型

Object



## 示例

```javascript
let oleProperties = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
```
