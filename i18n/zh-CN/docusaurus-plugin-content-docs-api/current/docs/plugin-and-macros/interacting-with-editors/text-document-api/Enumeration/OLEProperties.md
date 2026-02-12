# OLE 属性

OLE 对象属性

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ----------- |
| data | string | OLE 对象数据（内部格式）。 |
| guid | string | 可编辑当前 OLE 对象的插件标识符，必须为 *asc.&#123;UUID&#125;* 格式。 |
| height | number | OLE 对象的高度，单位为毫米。 |
| heightPix | number | OLE 对象图像的高度，单位为像素。 |
| imgSrc | string | 存储在 OLE 对象中的图像链接（其视觉表示），供插件使用。 |
| width | number | OLE 对象的宽度，单位为毫米。 |
| widthPix | number | OLE 对象图像的宽度，单位为像素。 |
## 类型

Object（对象）



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
