---
sidebar_position: 1
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# AI Tools

AI Tools connects an AI provider (e.g., OpenAI, DeepSeek) to ONLYOFFICE editors, enabling intelligent text generation, editing, summarization, and automatic macro creation.

**Supported editors:** documents, spreadsheets, presentations, PDF.

**Repository on GitHub**: [ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai).

<YoutubeVideo videoId="oQbH8JIe3eE"/>

## Installing

Where AI Tools is available depends on the product:

- **Desktop Editors 10.0.0 and later** that ship AI Tools install it as a core addon. It is already present, Plugin Manager does not list it, and the store does not update it. See [Setup](custom-ai-tools.md#setup) for more information.
- **Desktop Editors Community** does not include AI Tools.
- **ONLYOFFICE Docs Community Edition** does not include AI Tools.
- **Commercial editions of ONLYOFFICE Docs** let administrators configure AI providers for all users through the Admin Panel. See [Configuring AI providers for all users](server-ai-providers.md).

Integrators can disable AI Tools with the [`editorConfig.customization.ai.disabled`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled) parameter. Server administrators can disable it by setting [`aiSettings.enable`](/docs/docs-api/get-started/configuration/server-config/server-config.md#aiSettings.enable) to `false`.

The AI Tools guid is `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`.

## Configuring

:::tip
If your administrator has configured AI providers on the server, the **Settings** button is not shown and no setup is needed. See [Configuring AI providers for all users](server-ai-providers.md).
:::

To start using AI Tools, you need to set up an AI provider:

1. On the **Plugins** tab, click **Background plugins** and verify that the **AI Tools** switch is enabled (it is enabled by default).
2. Open the **AI Tools** tab and click **Settings**. The **AI Settings** dialog opens.
3. On the **AI Models** tab, click **Add Model**.

    ![Add model](/assets/images/plugins/add-model.png#gh-light-mode-only)![Add model](/assets/images/plugins/add-model.dark.png#gh-dark-mode-only)

4. In the **Connect new AI Model** form, select a **Provider**, enter the **API key**, specify a **Base URL** if necessary, select a **Model**, and enter a **Profile name**.
5. Click **Add Model**. The model appears in the list on the **AI Models** tab.
6. On the **Model Assignment** tab, select a **Default model**. Under **Custom models per task**, you can assign separate models to *AI Chat*, *Code*, *Summarization*, *Translation*, *Text Analysis*, *Image generation*, *OCR*, *Vision*, and *Form analysis*.

For details on adding a custom provider, refer to these [instructions](custom-providers.md).

### MCP Servers and Web search

AI Tools settings also include MCP Servers and Web search settings:
- The **MCP Servers** tab allows you to add MCP servers through **Edit configuration** so **AI Chat** can call their tools.

  In Desktop Editors, you can also launch the server on your computer with Docker, Node.js, or Python. See [Connecting MCP servers](/docs/desktop-editors/usage-api/connecting-mcp-servers/connecting-mcp-servers.md).

  In the web editors, connect a remote MCP server over HTTP. Add it in **AI Settings**, or let an administrator add it for every user from the Admin Panel. Docker, Node.js, and Python launches stay in Desktop Editors. An HTTP example for the ONLYOFFICE Apps MCP server is in [Connecting MCP servers](server-ai-providers.md#connecting-mcp-servers).
- To let **AI Chat** look up the web during a conversation, select **Exa** search engine in **Web search** and enter its API key.
  <div className="side-by-side-images">
    <div>
      <img alt="MCP Servers" src="/assets/images/plugins/mcp-servers.png#gh-light-mode-only" />
      <img alt="MCP Servers" src="/assets/images/plugins/mcp-servers.dark.png#gh-dark-mode-only" />
    </div>
    <div>
      <img alt="Web search" src="/assets/images/plugins/ai-web-search.png#gh-light-mode-only" />
      <img alt="Web search" src="/assets/images/plugins/ai-web-search.dark.png#gh-dark-mode-only" />
    </div>
  </div>

## Using

To start using AI Tools:

1. Open the **AI Tools** tab in the top toolbar of ONLYOFFICE editors.

      ![AI Tools](/assets/images/plugins/ai-tools-tab.png#gh-light-mode-only)![AI Tools](/assets/images/plugins/ai-tools-tab.dark.png#gh-dark-mode-only)

2. Action buttons run a one-off command on the selected text. **Create Quick AI Action** creates a new action. Where the new action appears depends on **Access from**:
   - **Available from the right-click menu**: the action is listed in the **Quick AI Actions** submenu of the context menu. **Quick AI Actions** is its own item, beside **AI Tools**.
   - **Quick access from the editor toolbar**: the action appears as a button on the **AI Tools** tab, after **Translation** and before **Create AI assistant**.

    ![Quick ai actions](/assets/images/plugins/quick-ai-actions-tab.png#gh-light-mode-only)![Quick ai actions](/assets/images/plugins/quick-ai-actions-tab.dark.png#gh-dark-mode-only)

3. **Create AI assistant** creates an assistant that works continuously and reacts to document changes. The assistant appears as a button at the end of the **AI Tools** tab.

    ![Ai assistant](/assets/images/plugins/ai-assistant-tab.png#gh-light-mode-only)![Ai assistant](/assets/images/plugins/ai-assistant-tab.dark.png#gh-dark-mode-only)

4. Click one of the buttons to open the corresponding dialog:
   - **Settings**: opens the **AI Settings** dialog. The dialog has four tabs: **AI Models**, **Model Assignment**, **MCP Servers**, and **Web search**.
   - **AI Chat**: start a conversation with the AI to ask questions, rewrite text, generate ideas, and more.
   - **Create Quick AI Action**: create a one-off custom command that is applied to the selected text.
   - **Summarization**: automatically summarize the entered text and choose ways to insert the result.
   - **Translation**: translate selected text using the configured AI service.
   - **Create AI assistant**: create an assistant that works continuously and reacts to document changes.
   - **Show all results**: opens the **AI assistant** panel on the left, displaying the results produced by AI assistants.
   - **Grammar & Spelling**: check the grammar and spelling of the selected text.
5. You can use AI Tools on selected text. Select the text, right-click it, and in the **AI Tools** menu choose *Summarization*, *Text analysis*, *Translate*, *Image*, *Grammar & Spelling*, or *AI Chat*. If no text is selected, the menu shows only *Grammar & Spelling*, *Text analysis*, and *AI Chat*. *Summarization*, *Translate*, and *Image* appear only when text is selected.
6. AI Tools responds based on the configured AI model.
7. Insert the response into the document or use it for your needs.

## Support

If you want to request a feature or report a bug regarding AI Tools, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
