# RemovePlugin

删除具有指定 GUID 的插件。

## 语法

```javascript
expression.RemovePlugin(guid, backup);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必需 | string |  | 插件标识符。必须是 *asc.&#123;UUID&#125;* 类型。 |
| backup | 必需 | string |  | 插件备份。此参数在使用桌面编辑器时使用。 |

## 返回值

object

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
