# 修改 OLE 对象

根据 OLE 对象数据中指定的内部标识符修改 OLE 对象。

## 语法

```javascript
expression.ChangeOleObject(ObjectData);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ObjectData | 必填 | [OLE 对象数据](../Enumeration/OLEObjectData.md) | — | OLEObjectData 对象。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ChangeOleObject", [
    {
        "Data": "{data}",
        "ImageData": "data:image/png;base64,image-in-the-base64-format",
        "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
        "InternalId": "5_556",
        "ParaDrawingId": "1_713",
        "Width": 70,
        "Height": 70,
        "WidthPix": 60 * 36000,
        "HeightPix": 60 * 36000
    }
]);
```
