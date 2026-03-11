# AddOleObject

在当前文档位置添加 OLE 对象。

## 语法

```javascript
expression.AddOleObject(data);
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
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
window.Asc.plugin.executeMethod ("AddOleObject", [_param], function() {
    window.Asc.plugin.executeCommand ("close", "");
});
```
