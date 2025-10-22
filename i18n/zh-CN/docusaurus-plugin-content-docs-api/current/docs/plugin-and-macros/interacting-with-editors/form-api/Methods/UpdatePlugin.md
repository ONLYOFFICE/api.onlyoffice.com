# 更新插件

使用指定的插件配置更新插件。

## 语法

```javascript
expression.UpdatePlugin(config);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| config | 选填 | object |  | 插件的 [配置对象](https://api.onlyoffice.com/zh-CN/docs/plugin-and-macros/structure/configuration/)。 |

## 返回值

object（对象）

## 示例

```javascript
window.Asc.plugin.executeMethod ("UpdatePlugin", [config], function (result) {
    postMessage (JSON.stringify (result));
});
```
