# 编辑嵌入对象

编辑文档中嵌入对象的函数。

## 语法

```javascript
expression.EditOleObject(data);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | -------------- | ------------- | ------------ | -------- |
| data | 必填 | [OLE 属性](../Enumeration/OLEProperties.md) |  | OLE 对象的属性。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
var _param = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "objectId": "5_556",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
window.Asc.plugin.executeMethod ("EditOleObject", [_param], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
