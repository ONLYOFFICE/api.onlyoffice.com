# 插入 OLE 对象

在当前文档位置插入 OLE 对象。

## 语法

```javascript
expression.InsertOleObject(NewObject, bSelect);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NewObject | 必填 | [OLE 对象数据](../Enumeration/OLEObjectData.md) | — | OLEObjectData 对象。 |
| bSelect | 必填 | boolean | — | 指定插入文档后是否选择 OLE 对象：选择（**true**）或不选择（**false**）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("InsertOleObject", [
    {
        "Data": "{data}",
        "ImageData": "data:image/png;base64,image-in-the-base64-format",
        "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
        "Width": 70,
        "Height": 70,
        "WidthPix": 60 * 36000,
        "HeightPix": 60 * 36000
    },
true]);
```
