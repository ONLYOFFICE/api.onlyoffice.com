---
sidebar_position: 1
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# AI 工具

AI 工具将 AI 提供商（例如 OpenAI、DeepSeek）与 ONLYOFFICE 编辑器相连接，能够实现智能文本生成、编辑、摘要提取以及自动宏创建等功能。

**支持的编辑器**：文档、电子表格、演示文稿、PDF。

<YoutubeVideo videoId="oQbH8JIe3eE"/>

## 安装 {#installing}

AI 工具的可用性取决于产品：

- **10.0.0 及更高版本的桌面编辑器**内置 AI 工具。AI 工具随编辑器一起安装，因此**插件管理器**中不会列出它，插件市场也不会对其进行更新。
- **桌面编辑器社区版**不包含 AI 工具。
- **ONLYOFFICE 文档社区版**不包含 AI 工具。
- **ONLYOFFICE 文档商业版**包含 AI 工具。默认情况下，每个用户自行连接 AI 提供商，具体请参阅[配置](#configuring)。管理员也可以在管理面板中为所有用户配置 AI 提供商，此时用户无法添加自己的提供商。请参阅[为所有用户配置 AI 提供商](server-ai-providers.md)。

集成方可以通过 [`editorConfig.customization.ai.disabled`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled) 参数禁用 AI 工具。服务器管理员可以将 [`aiSettings.enable`](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) 设置为 `false` 来禁用它。

AI 工具的 GUID 是 `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`。

## 配置 {#configuring}

:::tip
如果管理员已在服务器上配置了 AI 提供商，则不会显示**设置**按钮，也无需进行任何设置。请参阅[为所有用户配置 AI 提供商](server-ai-providers.md)。
:::

要开始使用 AI 工具，需要设置 AI 提供商：

1. 在**插件**选项卡上点击**后台插件**，确认 **AI Tools** 开关已启用（默认处于启用状态）。
2. 打开 **AI 工具**选项卡并点击**设置**，将打开 **AI Settings** 对话框。
3. 在 **AI Models** 选项卡上点击 **Add Model**。

    ![添加模型](/assets/images/plugins/add-model.png#gh-light-mode-only)![添加模型](/assets/images/plugins/add-model.dark.png#gh-dark-mode-only)

4. 在 **Connect new AI Model** 表单中选择 **Provider**，输入 **API key**，必要时指定 **Base URL**，选择 **Model** 并输入 **Profile name**。
5. 点击 **Add Model**。该模型将显示在 **AI Models** 选项卡的列表中。
6. 在 **Model Assignment** 选项卡上选择 **Default model**。在 **Custom models per task** 下，您可以为 *AI Chat*、*Code*、*Summarization*、*Translation*、*Text Analysis*、*Image generation*、*OCR*、*Vision* 和 *Form analysis* 分别分配模型。

有关添加自定义提供商的详细信息，请参考此[说明](custom-providers.md)。

### MCP 服务器和网络搜索 {#mcp-servers-and-web-search}

AI 工具的设置还包括 MCP 服务器和网络搜索设置：

- 在 **MCP Servers** 选项卡上，可以通过 **Edit configuration** 添加 MCP 服务器，让 **AI 聊天**调用这些服务器提供的工具。

  在桌面编辑器中，您还可以使用 Docker、Node.js 或 Python 在自己的计算机上启动服务器。请参阅[连接 MCP 服务器](/docs/desktop-editors/usage-api/connecting-mcp-servers/connecting-mcp-servers.md)。

  在 Web 编辑器中，请通过 HTTP 连接远程 MCP 服务器。您可以在 **AI Settings** 中添加，也可以由管理员在管理面板中为所有用户添加。通过 Docker、Node.js 和 Python 启动服务器仅适用于桌面编辑器。ONLYOFFICE Apps MCP 服务器的 HTTP 示例请参阅[为所有用户配置 AI 提供商](server-ai-providers.md#connecting-mcp-servers)。
- 如需让 **AI 聊天**在对话过程中搜索网络，请打开 **Web search** 选项卡，在 **Web Search Engine** 列表中选择搜索引擎（例如 **Exa**），然后输入其 API 密钥。

  <div className="side-by-side-images">
    <div>
      <img alt="MCP 服务器" src="/assets/images/plugins/mcp-servers.png#gh-light-mode-only" />
      <img alt="MCP 服务器" src="/assets/images/plugins/mcp-servers.dark.png#gh-dark-mode-only" />
    </div>
    <div>
      <img alt="网络搜索" src="/assets/images/plugins/ai-web-search.png#gh-light-mode-only" />
      <img alt="网络搜索" src="/assets/images/plugins/ai-web-search.dark.png#gh-dark-mode-only" />
    </div>
  </div>

## 使用 {#using}

要开始使用 AI 工具：

1. 在 ONLYOFFICE 编辑器的顶部工具栏中打开 **AI 工具**选项卡。

   ![AI 工具](/assets/images/plugins/ai-tools-tab.png#gh-light-mode-only)![AI 工具](/assets/images/plugins/ai-tools-tab.dark.png#gh-dark-mode-only)

2. 根据命令需要选择文本，然后点击选项卡上的按钮：
   - **设置**：打开 **AI Settings** 对话框。该对话框包含四个选项卡：**AI Models**、**Model Assignment**、**MCP Servers** 和 **Web search**。
   - **AI 聊天**：与 AI 开始对话，以提问、改写文本、生成创意等。
   - **创建快速 AI 操作**：创建对所选文本运行一次的自定义命令。请参阅[如何创建快速 AI 操作](ai-agent.md#create-quick-ai-action)。
   - **摘要提取**：自动总结输入的文本并选择插入结果的方式。
   - **翻译**：使用配置的 AI 服务翻译所选文本。
   - **创建 AI 助手**：创建持续工作并响应文档更改的助手。该助手以按钮形式显示在选项卡的末尾，例如上方截图中的 **Text Optimizer**。请参阅[如何创建 AI 助手](ai-agent.md#create-ai-assistant)。
   - **显示所有结果**：打开左侧的 **AI assistant** 面板，显示 AI 助手生成的结果。
   - **语法与拼写检查**：检查所选文本的语法和拼写。

   添加到工具栏的快速 AI 操作会显示在选项卡上**翻译**之后：

   ![快速 AI 操作](/assets/images/plugins/quick-ai-actions-tab.png#gh-light-mode-only)![快速 AI 操作](/assets/images/plugins/quick-ai-actions-tab.dark.png#gh-dark-mode-only)

3. 您还可以通过上下文菜单使用 AI 工具。在文档中右键单击并打开 **AI 工具**菜单。选中文本时，菜单提供*摘要提取*、*文本分析*、*翻译*、*图像*、*语法与拼写检查*和 *AI 聊天*。未选中文本时，菜单仅提供*语法与拼写检查*、*文本分析*和 *AI 聊天*。

   ![AI 工具菜单](/assets/images/plugins/ai-assistant-tab.png#gh-light-mode-only)![AI 工具菜单](/assets/images/plugins/ai-assistant-tab.dark.png#gh-dark-mode-only)

4. AI 工具将根据配置的 AI 模型做出响应。将响应插入文档或根据需要使用。

## 支持 {#support}

如果想请求 AI 工具的新功能或报告错误，请在 [ONLYOFFICE 论坛](https://community.onlyoffice.com/)上发帖。
