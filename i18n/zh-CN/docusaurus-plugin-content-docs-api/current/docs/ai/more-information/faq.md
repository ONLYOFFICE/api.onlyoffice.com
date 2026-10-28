---
sidebar_position: -1
---

# 常见问题

## 支持哪些 AI 提供商？ {#which-ai-providers-are-supported}

AI 工具支持所有与 OpenAI API 兼容的提供商，包括 OpenAI、DeepSeek 等。您也可以通过[配置自定义提供商](../guides/custom-providers.md)，添加默认列表中未包含的提供商。

## 可以使用本地 AI 模型吗？ {#can-i-use-a-local-ai-model}

可以。您可以使用 [Ollama](../guides/configuring-ollama-with-cors.md) 连接本地运行的模型，所有处理均在您自己的机器上完成，无需将数据发送至外部服务。

## 为什么自定义提供商的模型列表是空的？ {#why-is-the-model-list-empty-for-my-custom-provider}

最常见的原因是提供商的端点不允许 AI 工具的来源，浏览器因此拦截了响应。请参见 [CORS 要求](../guides/custom-providers.md#cors-requirements)。

## AI 工具和 AI 智能体有什么区别？ {#what-is-the-difference-between-ai-tools-and-the-ai-agent}

**AI 工具**是顶部工具栏中的完整 AI 集成功能，包括 AI 聊天、摘要提取、翻译以及语法和拼写检查等功能。

**AI 智能体**是一个轻量级的内联智能体，可通过在编辑器中按 `Ctrl + /` 直接唤起，无需离开文档即可通过自然语言执行编辑任务。AI 智能体是 AI 工具的测试版功能。详细信息请参见 [AI 智能体](../guides/ai-agent.md)。

## 哪些编辑器支持 AI 工具？ {#what-editors-support-ai-tools}

AI 工具适用于全部四种 ONLYOFFICE 编辑器：文档、电子表格、演示文稿和 PDF。

## 我的文档内容会被发送给 AI 提供商吗？ {#is-my-document-content-sent-to-the-ai-provider}

只有您明确传递给 AI 功能的内容（例如用于摘要提取或翻译的选定文本）才会发送给所配置的提供商，完整的文档内容不会被自动传输。

## 可以添加默认列表中没有的提供商吗？ {#can-i-add-a-provider-that-is-not-in-the-default-list}

可以。如果提供商与 OpenAI API 兼容，请选择内置的 **OpenAI Compatible** 提供商，然后输入其基础 URL 和 API 密钥。否则，请导入提供商文件。详细的操作步骤请参阅[添加自定义提供商](../guides/custom-providers.md)。

## 如何连接 MCP 服务器？ {#how-do-i-connect-an-mcp-server}

在 **AI Settings** 的 **MCP Servers** 选项卡上，通过 **Edit configuration** 添加服务器。之后 **AI 聊天**即可使用这些服务器提供的工具。Web 编辑器通过 HTTP 连接远程 MCP 服务器。桌面编辑器还可以使用 Docker、Node.js 或 Python 在您的计算机上启动服务器。请参阅 [MCP 服务器和网络搜索](../guides/ai-plugin.md#mcp-servers-and-web-search)。

## 如何在 AI 聊天中启用网络搜索？ {#how-do-i-enable-web-search-in-ai-chat}

在 **AI Settings** 的 **Web search** 选项卡上，选择搜索引擎（例如 Exa）并输入其 API 密钥。之后 **AI 聊天**即可在对话过程中搜索网络。请参阅 [MCP 服务器和网络搜索](../guides/ai-plugin.md#mcp-servers-and-web-search)。

## 如何在集成中禁用 AI？ {#how-do-i-disable-ai-in-an-integration}

集成方可以通过 [`editorConfig.customization.ai.disabled`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled) 为单个编辑器实例禁用 AI 工具。服务器管理员可以将 [`aiSettings.enable`](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) 设置为 `false`，为整个服务器禁用 AI 工具。
