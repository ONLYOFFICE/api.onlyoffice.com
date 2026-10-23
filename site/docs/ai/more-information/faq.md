---
sidebar_position: -1
---

# FAQ

## Which AI providers are supported?

AI Tools supports any provider that is compatible with the OpenAI API, including OpenAI, DeepSeek, and others. You can also add providers that are not in the default list by [configuring a custom provider](../guides/custom-providers.md).

## Can I use a local AI model?

Yes. You can connect a locally running model using [Ollama](../guides/configuring-ollama-with-cors.md). This keeps all processing on your own machine without sending data to an external service.

## Why is the model list empty for my custom provider?

Most often the provider's endpoint does not allow the AI Tools origin, so the browser blocks the response. See [CORS requirements](../guides/custom-providers.md#cors-requirements).

## What is the difference between AI Tools and the AI agent?

**AI Tools** is the full AI integration in the top toolbar. It provides features such as AI Chat, Summarization, Translation, and Grammar & Spelling checking.

The **AI agent** is a lightweight inline assistant invoked with `Ctrl + /` directly inside the editor. It lets you execute editing tasks through natural language without leaving the document. The agent is a beta feature of AI Tools. See [AI agent](../guides/ai-agent.md) for details.

## What editors support AI Tools?

AI Tools works in all four ONLYOFFICE editors: documents, spreadsheets, presentations, and PDF.

## Is my document content sent to the AI provider?

Only the content you explicitly pass to an AI feature (such as selected text for summarization or translation) is sent to the configured provider. Full document content is not transmitted automatically.

## Can I add a provider that is not in the default list?

Yes. Any OpenAI-compatible provider can be added by supplying a base URL, model version, and API key. See [Adding custom providers](../guides/custom-providers.md) for step-by-step instructions.

## How do I connect an MCP server?

On the **MCP Servers** tab in **AI Settings**, add servers through **Edit configuration**. **AI Chat** can then use the tools those servers provide. The web editors connect a remote MCP server over HTTP. Desktop Editors can also launch a server on your computer with Docker, Node.js, or Python. See [MCP Servers and Web search](../guides/ai-plugin.md#mcp-servers-and-web-search).

## How do I enable web search in AI Chat?

On the **Web search** tab in **AI Settings**, choose a search engine such as Exa and enter its API key. **AI Chat** can then look up the web during a conversation. See [MCP Servers and Web search](../guides/ai-plugin.md#mcp-servers-and-web-search).

## How do I disable AI in an integration?

Integrators can disable AI Tools for an editor instance with [`editorConfig.customization.ai.disabled`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled). Server administrators can disable it for the whole server by setting [`aiSettings.enable`](/docs/docs-api/get-started/configuration/server-config/server-config.md#aiSettings.enable) to `false`.

## Where can I find ready-made AI tool examples?

Sample AI tools organized by editor type are available on the [samples page](/samples/?doctype=ai&text=ai+tools).
