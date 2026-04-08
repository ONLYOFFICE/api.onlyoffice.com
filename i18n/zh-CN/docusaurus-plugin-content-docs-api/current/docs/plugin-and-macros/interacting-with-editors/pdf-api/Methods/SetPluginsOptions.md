# SetPluginsOptions

从外部源配置插件。可以为所有插件或特定插件设置参数。
例如，此方法可用于向插件传递授权令牌。此方法只能与连接器类一起使用。

## 语法

```javascript
expression.SetPluginsOptions(options);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 必需 | [PluginOptions](../Enumeration/PluginOptions.md) |  | 插件选项。 |

## 返回值

此方法不返回任何数据。