# 插件

plugins 部分定义运行时插件参数。

## autostart

**类型：** `string[]`

在编辑器打开时自动启动的 [config.json](../../../../plugin-and-macros/structure/configuration/configuration.md#guid) 文件中的插件标识符。插件按列出的顺序依次运行。

**示例**: `["asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}"]`

## options

**类型：** `object`

插件的外部配置设置。设置可以针对所有插件或特定插件——例如传递授权令牌。

:::note
您还可以使用 [Automation API](../../automation-api/automation-api.md) 的 [`SetPluginsOptions`](../../../../plugin-and-macros/interacting-with-editors/document-api/Methods/SetPluginsOptions.md) 方法将此对象传递给插件。
:::

**示例**:

```json
{
  "all": {},
  "pluginGuid": {}
}
```

### options.all

**类型：** `object`

应用于所有插件的参数。

**示例**:

```json
{
  "all": {
    "keyAll": "valueAll"
  }
}
```

### options.pluginGuid

**类型：** `object`

特定插件的参数，通过 `asc.{UUID}` 格式的 GUID 标识。

**示例**:

```json
{
  "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
    "keyYoutube": "valueYoutube"
  }
}
```

## pluginsData

**类型：** `string[]`

插件 [config.json](../../../../plugin-and-macros/structure/configuration/configuration.md) 文件的绝对 URL。

**示例**: `["https://example.com/plugins/chess-plugin/config.json"]`

![插件](/assets/images/editor/plugins.png#gh-light-mode-only)![插件](/assets/images/editor/plugins.dark.png#gh-dark-mode-only)

## 插件命令日志

要在浏览器控制台中启用插件命令日志，请将浏览器本地存储中的 `asc_plugin_commands_log` 键设置为 `"true"`：

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

要禁用日志，请删除该键或将其设置为任意其他值：

```js
localStorage.removeItem("asc_plugin_commands_log");
```

## 示例

```ts
const config = {
  // ...
  editorConfig: {
    // ...
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
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**以及插件的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。
