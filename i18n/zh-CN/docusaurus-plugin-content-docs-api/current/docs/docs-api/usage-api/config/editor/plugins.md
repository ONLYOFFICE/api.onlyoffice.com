# 插件

插件部分允许将特殊附加组件连接到您的 ONLYOFFICE 文档安装，这将帮助您向文档编辑器添加其他功能。

## autostart

`类型: array of string`

定义插件的标识符数组（在 [config.json](../../../../plugin-and-macros/structure/configuration/configuration.md#guid)) 中输入），它将在编辑器打开时自动启动，并且插件将依次运行。

**示例**: `["asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}"]`

## options

`类型: object`

定义一个允许从外部源配置插件的对象。可以为所有插件或特定插件设置设置。例如，此对象可用于将授权令牌传递给插件。您还可以使用 [Automation API](../../automation-api.md) 的 **SetPluginsOptions** 方法将 *options* 对象传递给插件。

**示例**:

``` json
{
  "all": {},
  "pluginGuid": {}
}
```

### options.all

`类型: object`

定义将为所有插件设置的参数。

**示例**:

``` json
{
  "all": {
    "keyAll": "valueAll"
  }
}
```

### options.pluginGuid

`类型: object`

定义将为特定插件设置的参数。必须使用 *asc.\{UUID\}* 类型的插件 GUID 指定插件。

**示例**:

``` json
{
  "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
    "keyYoutube": "valueYoutube"
  }
}
```

## pluginsData

`类型: array of string`

定义插件配置文件 ([config.json](../../../../plugin-and-macros/structure/configuration/configuration.md))的绝对 URL 数组。

**示例**: `["https://example.com/plugins/chess-plugin/config.json"]`

## url

`类型: string`

定义存储插件的目录的绝对 URL。

:::danger[Deprecated]
自 4.3 版起已弃用，请在 [pluginsData](#pluginsdata) 字段中使用绝对 URL。
:::

**示例**: `https://example.com/plugins/`

![插件](/assets/images/editor/plugins.png)

## 示例

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
      ],
      options: {
        "all": {
          keyAll: "valueAll",
        },
        "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
          keyYoutube: "valueYoutube",
        },
      },
      pluginsData: [
        "https://example.com/plugins/chess-plugin/config.json",
      ],
      url: "https://example.com/plugins/",
    },
  },
})
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。
