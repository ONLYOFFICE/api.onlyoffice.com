---
sidebar_position: -1
---

# FAQ

## Which AI providers are supported?

The AI plugin supports any provider that is compatible with the OpenAI API, including OpenAI, DeepSeek, and others. You can also add providers that are not in the default list by [configuring a custom provider](../ai/custom-providers.md).

## Can I use a local AI model?

Yes. You can connect a locally running model using [Ollama](../ai/configuring-ollama-with-cors.md). This keeps all processing on your own machine without sending data to an external service.

## What is the difference between the AI plugin and the AI agent?

The **AI plugin** is the full AI integration available via the **AI** tab in the top toolbar. It provides features such as Chatbot, Summarization, Translation, and Grammar & Spelling checking.

The **AI agent** is a lightweight inline assistant invoked with `Ctrl + /` directly inside the editor. It lets you execute editing tasks through natural language without leaving the document. The agent is a beta feature of the AI plugin. See [AI agent](../ai/ai-agent.md) for details.

## What editors support the AI plugin?

The AI plugin works in all four ONLYOFFICE editors: documents, spreadsheets, presentations, and PDF.

## Is my document content sent to the AI provider?

Only the content you explicitly pass to an AI feature (such as selected text for summarization or translation) is sent to the configured provider. Full document content is not transmitted automatically.

## Can I add a provider that is not in the default list?

Yes. Any OpenAI-compatible provider can be added by supplying a base URL, model version, and API key. See [Adding custom providers](../ai/custom-providers.md) for step-by-step instructions.

## Where can I find ready-made AI tool examples?

Sample AI tools organized by editor type are available in the [Samples](../../samples/document-editor) section of this documentation.
