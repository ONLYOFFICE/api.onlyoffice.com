---
sidebar_position: 2
sidebar_label: 服务器级 AI 提供商
description: 在 ONLYOFFICE 文档管理面板中统一连接 AI 提供商，让每位编辑器用户无需自己的 API 密钥即可使用 AI 工具，或为整个服务器或单个编辑器配置关闭 AI 功能。
---

# 为所有用户配置 AI 提供商

ONLYOFFICE 文档管理员可以在管理面板中统一连接一次 AI 提供商，让每位编辑器用户无需输入自己的 API 密钥即可直接使用 AI 工具。在服务器上配置提供商后，用户将无法再添加自己的提供商或密钥，因此文档只会发送到管理员批准的 AI 服务。

在以下示例中，请将 `https://documentserver` 替换为您的 ONLYOFFICE 文档服务器地址。

## 要求 {#requirements}

- ONLYOFFICE 文档 10.0 或更高版本的商业版本。社区版不包含管理面板。
- 管理面板账户。管理员登录名固定为 `admin`，该账户通过服务器主机上的 `documentserver-admin create-admin` 命令创建。
- 每个 AI 提供商的 API 密钥；对于自托管或经过代理的模型，还需要基础 URL。

## 打开 AI 设置 {#opening-the-ai-settings}

1. 在浏览器中打开 `https://documentserver/admin/`，或者打开 `https://documentserver/welcome/` 并点击管理面板链接。
2. 登录。**Dashboard** 页面会显示构建版本、许可证、数据库和 JWT 状态。继续操作前，请确认许可证有效。
3. 在左侧菜单中点击 **AI Integration**。**AI Settings** 页面将打开，其中包含四个选项卡：

   | 选项卡 | 控制内容 |
   | --- | --- |
   | **AI Models** | 已连接模型的列表。 |
   | **Model Assignment** | 所有 AI 任务使用的默认模型，以及可选的按任务指定的模型。 |
   | **MCP Servers** | AI 可以使用的外部工具服务器。 |
   | **Web search** | AI 是否以及如何搜索网络。 |

## 连接 AI 模型 {#connecting-ai-models}

对希望提供给用户的每个模型重复以下步骤。您可以使用 API 密钥连接云提供商，也可以连接本地托管的模型。

1. 在 **AI Models** 选项卡上点击 **Add Model**，打开 **Connect new AI Model** 表单。
2. 填写表单：

   | 字段 | 填写内容 |
   | --- | --- |
   | **Provider** | 从 **Select provider** 列表中选择提供商。如果列表中没有您的提供商，请点击该字段旁的 **Import Custom Provider**，或使用 **Custom Providers** 按钮。有关提供商的格式，请参阅[添加自定义提供商](custom-providers.md)。 |
   | **API key** | 您的提供商账户中的密钥。仅当本地模型不需要密钥时才留空。 |
   | **Base URL** | 提供商端点。对于已知提供商会自动填写；对于自托管或经过代理的端点，请手动设置。 |
   | **Model** | 从 **Select model** 列表中选择模型。提供商、密钥和基础 URL 均有效后，列表才会加载。 |
   | **Profile name** | 用户在编辑器中看到的名称，例如 `GPT for translation` 或 `Internal Llama`。 |

3. 点击 **Add Model**。在所有必填字段填写完毕之前，该按钮保持禁用状态。
4. 添加下一个模型，或者点击页面底部的 **Save Changes**。
5. 在 **Dashboard** 页面上点击 **Open test example**，并试用 **AI Chat**，确认模型能够正常响应。

:::caution
点击 **Save Changes** 之前，所有更改都不会生效。**Reset to Defaults** 会删除您的全部 AI 配置。
:::

这些设置存储在服务器配置的 [aiSettings](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) 部分中。

## 用户端的变化 {#what-changes-for-users}

当服务器上存在 AI 设置时，编辑器会将其传递给 [AI 工具](ai-plugin.md)，AI 工具随后会：

- 使用管理员配置的模型和任务分配；
- 忽略用户之前在浏览器中保存的提供商和密钥；
- 隐藏 **AI** 选项卡上的 **设置** 按钮，因此用户无法添加提供商、输入 API 密钥或更改所使用的模型。

其他所有 AI 功能（例如聊天机器人、摘要、翻译以及语法和拼写检查）照常可用，用户端无需任何设置。

## 其他设置 {#additional-settings}

以下设置均为可选设置。更改其中任何一项后，请点击 **Save Changes**。

### 为任务分配模型 {#assigning-models-to-tasks}

所有 AI 任务都使用 **Model Assignment** 选项卡上显示的 **Default model**，添加模型后即会设置该默认模型。

如需为特定任务使用其他模型（例如为翻译使用更快、更便宜的模型），请打开 **Model Assignment** 选项卡，在 **Custom models per task** 下为该任务选择模型：**AI Chat**、**Code**、**Summarization**、**Translation**、**Text Analysis**、**Image generation**、**OCR**、**Vision** 或 **Form analysis**。保持为 **Default model** 的任务将继续使用默认模型。

### 连接 MCP 服务器 {#connecting-mcp-servers}

如需让 AI 使用外部工具服务器，请在 **MCP Servers** 选项卡上连接这些服务器。

### 配置网络搜索 {#configuring-web-search}

在 **Web search** 选项卡上选择 AI 是否以及如何搜索网络。如果文档内容绝不能发送到已批准的 AI 提供商以外的服务，请关闭网络搜索。

## 关闭 AI {#turning-ai-off}

关闭 AI 有两种方式，二者的作用范围和强制程度不同。

| 设置 | 作用范围 | 服务器端强制执行 | 效果 |
| --- | --- | --- | --- |
| [`aiSettings.enable: false`](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) | 整个服务器（服务器配置） | 始终 | 将 AI 工具从 `/plugins.json` 中排除，不再向编辑器发送 AI 设置，并以 HTTP 403 拒绝发往 `/ai-proxy` 的请求。 |
| [`editorConfig.customization.ai.disabled: true`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled) | 单个编辑器会话（编辑器配置） | 仅当该配置[使用 JWT 签名](/docs/docs-api/additional-api/signature/browser.md)时 | 隐藏 AI 工具。使用 JWT 时，服务器还会以 HTTP 403 拒绝该会话发往 `/ai-proxy` 的请求。 |

如果服务器上完全不允许使用 AI（例如出于合规要求），请使用 `aiSettings.enable`。该设置无需令牌，因此还能覆盖 `customization.ai.disabled` 无法覆盖的会话：未使用 JWT 打开的编辑器，以及令牌中未包含该参数的[版本历史](/docs/docs-api/usage-api/methods.md#sethistorydata)会话。

如果只需为部分用户或文档关闭 AI，请使用 `customization.ai.disabled`。由您的集成按编辑器会话决定：

```ts
const config = {
  document: {
    // ...
  },
  documentType: "word",
  editorConfig: {
    customization: {
      ai: {
        disabled: true,
      },
    },
  },
}

const docEditor = new DocsAPI.DocEditor("placeholder", config)
```

这是将 AI 工具的插件标识符添加到 [editorConfig.plugins.disable](/docs/docs-api/usage-api/config/editor/plugins.md#disable) 列表的快捷方式：

```ts
const config = {
  editorConfig: {
    plugins: {
      disable: ["asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}"],
    },
  },
}
```

如果希望保留 AI，但禁止编辑器访问管理员未配置的服务，请将 [aiSettings.allowBrowserProxy](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) 设为 `false`。此后，服务器会以 HTTP 403 拒绝目标与任何已配置提供商都不匹配的 `/ai-proxy` 请求。

## 故障排除 {#troubleshooting}

| 问题 | 可能原因 | 解决方法 |
| --- | --- | --- |
| **Add Model** 一直处于禁用状态 | 有必填字段为空。 | 填写 **Provider**、**API key**（如需要）、**Model** 和 **Profile name**。 |
| 模型列表为空 | API 密钥或基础 URL 错误，或服务器无法访问提供商。 | 检查密钥和 URL，并确认服务器可以对外访问该提供商。 |
| 用户看不到新模型 | 更改未保存，或编辑器在保存之前已打开。 | 点击 **Save Changes**，然后重新加载文档。 |
| 用户仍能看到 **设置** 按钮 | 服务器上尚未保存任何 AI 配置。 | 确认 **AI Models** 选项卡上至少列出了一个模型，然后点击 **Save Changes**。 |
| AI 工具不见了 | 服务器上的 `aiSettings.enable` 为 `false`，或编辑器配置中的 `customization.ai.disabled` 为 `true`。 | 在需要使用 AI 的地方更改相应设置。 |
| 发往 `/ai-proxy` 的请求以 HTTP 404 失败 | 服务器的 `sdkjs-plugins` 文件夹中未安装 AI 工具。此时管理面板显示 **AI settings are unavailable**，而不是 **AI Settings** 页面。 | 在服务器上安装 AI 工具。 |
| AI 请求失败或超时 | 提供商的配额、计费或网络限制。 | 检查提供商账户以及服务器的对外访问。代理超时时间通过 `aiSettings.timeout` 设置。 |
