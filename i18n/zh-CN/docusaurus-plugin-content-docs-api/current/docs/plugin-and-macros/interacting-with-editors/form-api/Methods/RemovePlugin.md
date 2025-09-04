# 移除插件

移除具有指定 GUID 的插件。

## 语法

```javascript
expression.RemovePlugin(guid, backup);
```

`expression` - 一个表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必填 | string |  | 插件标识符。必须为 *asc.&#123;UUID&#125;* 类型。 |
| backup | 必填 | string |  | 插件备份。此参数用于与桌面编辑器协同工作时。 |

## 返回值

object（对象）

## 示例

```javascript
function removePlugin(backup) {
    if (removeGuid)
        window.Asc.plugin.executeMethod('RemovePlugin', [removeGuid, backup], function(result) {
            postMessage(result);
        });

    removeGuid = null;
};
```
