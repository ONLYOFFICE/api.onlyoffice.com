# GetAllOleObjects

返回可由指定插件打开的对象的所有 OLE 对象数据。
如果未定义 *sPluginId*，此方法将返回当前文档中包含的所有 OLE 对象。

## 语法

```javascript
expression.GetAllOleObjects(sPluginId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPluginId | 必需 | string |  | 插件标识符。必须是 *asc.&#123;UUID&#125;* 类型。 |

## 返回值

[OLEObjectData](../Enumeration/OLEObjectData.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetAllOleObjects", ["asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_665") {
            this.Asc.plugin.executeMethod ("SelectOleObject", [data[i].InternalId]);
            break;
        }
    }
});
```
