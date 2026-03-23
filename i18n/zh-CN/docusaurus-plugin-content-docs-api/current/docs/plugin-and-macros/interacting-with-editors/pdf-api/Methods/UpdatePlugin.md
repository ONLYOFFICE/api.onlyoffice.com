# UpdatePlugin

使用指定的插件配置更新插件。

## 语法

```javascript
expression.UpdatePlugin(config);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| config | 可选 | object |  | 插件[配置](https://api.onlyoffice.com/docs/plugin-and-macros/structure/configuration/)。 |

## 返回值

object

## 示例

```javascript
window.Asc.plugin.executeMethod ("UpdatePlugin", [config], function (result) {
    postMessage (JSON.stringify (result));
});
```
