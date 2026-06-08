# PluginOptions

插件选项。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| all | object | 将为所有插件设置的参数（\{ "all" : \{ key, value \} \}）。 |
| plugin_guid | object | 将为特定插件设置的参数。必须使用 asc.\{UUID\} 类型的插件 GUID 指定插件（\{ "plugin_guid" : \{ keyForSpecificPlugin : valueForSpecificPlugin \} \}）。 |
