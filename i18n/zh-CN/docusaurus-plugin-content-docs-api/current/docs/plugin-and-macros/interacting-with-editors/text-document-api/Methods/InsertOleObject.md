# InsertOleObject

在当前文档位置插入 OLE 对象。

## 语法

```javascript
expression.InsertOleObject(NewObject, bSelect);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NewObject | 必需 | [OLEObjectData](../Enumeration/OLEObjectData.md) |  | OLEObjectData 对象。 |
| bSelect | 必需 | boolean |  | 定义 OLE 对象插入文档后是否被选中（**true**）或不选中（**false**）。 |

## 返回值

此方法不返回任何数据。

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
