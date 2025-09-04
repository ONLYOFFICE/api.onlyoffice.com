# 添加 OLE 对象

将一个 OLE 对象添加到当前文档位置。

## 语法

```javascript
expression.AddOleObject(data);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| -------- | ------------- | ------------ | ---------- | -------- |
| data | 必填 | [OLE 属性](../Enumeration/OLEProperties.md) |  | OLE 对象属性。 |

## 返回值

该方法不返回任何值。

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
