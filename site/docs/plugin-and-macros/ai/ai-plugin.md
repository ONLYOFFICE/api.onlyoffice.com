---
sidebar_position: -4
---

# Getting started

AI is a background plugin that connects an AI provider (e.g., OpenAI, DeepSeek) to ONLYOFFICE editors, enabling intelligent text generation, editing, summarization, and automatic macro creation.

**Supported editors:** documents, spreadsheets, presentations, PDF.

**Repository on GitHub**: [ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/187c8183ed69b421f7ee4d955bea22f1b6dc417f/sdkjs-plugins/content/ai).

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="oQbH8JIe3eE"/>
```

## Installing

Starting from version 9.0.4, the AI plugin was added to the server and desktop distributions built with ONLYOFFICE branding.

If you need to add it manually, download this plugin from the [ONLYOFFICE App Directory](https://www.onlyoffice.com/app-directory/en/ai) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

The plugin guid is `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`.

## Configuring

To start using the plugin, you need to set up an AI provider:

1. Open the **Plugins** tab and click the **Plugin Manager** icon. Find the **AI plugin** and click **Install** or **Update** if the plugin is already installed.
2. Click the **Background Plugins** button and activate the **AI** switch.
3. Go to the **AI** tab, click **Settings** to open the configuration window.
4. Select **Edit AI models** and click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only).
5. Choose an AI provider from the list or add new AI models by entering your API keys.
6. In the row of icons, select what the model is used for: *Text*, *Images*, *Embeddings*, *Audio Processing*, *Content Moderation*, *Realtime Tasks*, *Coding Help*, *Visual Analysis*.
7. Click **OK** to save your settings and complete the connection process.

For details on adding a custom provider, refer to this [instructions](custom-providers.md).

## Using

To start using the AI plugin:

1. Open the **AI** tab in the top toolbar of ONLYOFFICE editors.
2. Choose one of the buttons:
   - **Settings**: the configuration panel to select your AI provider, enter the API key, and select one of its models;
   - **Chatbot**: start a conversation with the AI to ask questions, rewrite text, brainstorm ideas, and more;
   - **Summarization**: automatically summarize the entered text and choose ways to insert the result;
   - **Translation**: translate selected text using the configured AI service.
3. You can use the plugin on selected text. To do this, select the text, right-click it, and in the AI menu choose one of the options: **Summarization**, **Text analysis**, **Translate**, **Image**, or **Chatbot**.
4. The plugin will respond based on the configured AI model.
5. Insert the response into the document or use it for your needs.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
