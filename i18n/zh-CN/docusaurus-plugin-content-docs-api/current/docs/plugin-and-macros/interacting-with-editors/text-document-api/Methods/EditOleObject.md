# EditOleObject

编辑文档中的 OLE 对象。

## 语法

```javascript
expression.EditOleObject(data);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | [OLEProperties](../Enumeration/OLEProperties.md) |  | OLE 对象属性。 |

## 返回值

此方法不返回任何数据。

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
