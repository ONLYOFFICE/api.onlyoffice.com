---
sidebar_position: 2
sidebar_label: Server-wide AI providers
description: Connect AI providers once in the ONLYOFFICE Docs Admin Panel so that every editor user gets AI Tools without their own API keys, or turn AI off for the whole server or for a single editor configuration.
---

# Configuring AI providers for all users

ONLYOFFICE Docs administrators can connect AI providers once, in the Admin Panel, so that every editor user gets ready-to-use AI Tools without entering their own API keys. Once the providers are configured on the server, users can no longer add their own providers or keys, so documents are only sent to the AI services the administrator has approved.

In the examples below, replace `https://documentserver` with the address of your ONLYOFFICE Document Server.

## Requirements

- A commercial edition of ONLYOFFICE Docs 10.0 or later. The Community Edition does not include the Admin Panel.
- An Admin Panel account. The administrator login is always `admin`; the account is created with the `documentserver-admin create-admin` command on the server host.
- For each AI provider: an API key and, for self-hosted or proxied models, the base URL.

## Opening the AI settings

1. Open `https://documentserver/admin/` in your browser, or open `https://documentserver/welcome/` and follow the link to the Admin Panel.
2. Sign in. The **Dashboard** shows the build, license, database, and JWT status. Check that the license is valid before you continue.
3. In the left menu, click **AI Integration**. The **AI Settings** page opens with four tabs:

   | Tab | What it controls |
   | --- | --- |
   | **AI Models** | The list of connected models. |
   | **Model Assignment** | The default model for all AI tasks, and optional per-task models. |
   | **MCP Servers** | External tool servers the AI can use. |
   | **Web search** | Whether and how the AI can search the web. |

## Connecting AI models

Repeat these steps for every model you want users to have. You can connect a cloud provider with an API key or a locally hosted model.

1. On the **AI Models** tab, click **Add Model**. The **Connect new AI Model** form opens.
2. Fill in the form:

   | Field | What to enter |
   | --- | --- |
   | **Provider** | The provider from the **Select provider** list. If your provider is not listed, click **Import Custom Provider** next to the field or use the **Custom Providers** button. See [Adding custom providers](custom-providers.md) for the provider format. |
   | **API key** | The key from your provider account. Leave it empty only if your local model does not require a key. |
   | **Base URL** | The provider endpoint. It is filled in for known providers; set it for self-hosted or proxied endpoints. |
   | **Model** | The model from the **Select model** list. The list loads once the provider, key, and base URL are valid. |
   | **Profile name** | The name users see in the editors, for example `GPT for translation` or `Internal Llama`. |

3. Click **Add Model**. The button stays disabled until every required field is filled in.
4. Add the next model, or click **Save Changes** at the bottom of the page.
5. On the **Dashboard**, click **Open test example** and try **AI Chat** to confirm that the models respond.

:::caution
Nothing takes effect until you click **Save Changes**. **Reset to Defaults** removes your whole AI configuration.
:::

The settings are stored on the server in the [aiSettings](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) section of the server configuration.

## What changes for users

When the server has AI settings, the editors pass them to [AI Tools](ai-plugin.md), which then:

- uses the models and task assignments configured by the administrator;
- ignores any providers and keys the user previously saved in the browser;
- hides the **Settings** button on the **AI** tab, so users cannot add providers, enter API keys, or change which model is used.

All other AI features, such as the chatbot, summarization, translation, and grammar and spelling checks, work as before with no setup on the user side.

## Additional settings

The following settings are optional. After changing any of them, click **Save Changes**.

### Assigning models to tasks

Every AI task uses the **Default model** shown on the **Model Assignment** tab, which is set once you add a model.

To use a different model for specific tasks, for example a faster, cheaper model for translation, open the **Model Assignment** tab and, under **Custom models per task**, choose a model for the task: **AI Chat**, **Code**, **Summarization**, **Translation**, **Text Analysis**, **Image generation**, **OCR**, **Vision**, or **Form analysis**. Tasks left at **Default model** keep using the default.

### Connecting MCP servers

To let the AI use external tool servers, connect them on the **MCP Servers** tab.

### Configuring web search

On the **Web search** tab, choose whether and how the AI can search the web. Turn web search off if document content must never reach services other than the approved AI providers.

## Turning AI off

There are two ways to turn AI off. They differ in scope and in what they enforce.

| Setting | Scope | Enforced by the server | Effect |
| --- | --- | --- | --- |
| [`aiSettings.enable: false`](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) | Whole server (server configuration) | Always | Excludes AI Tools from `/plugins.json`, stops sending AI settings to the editors, and rejects `/ai-proxy` requests with HTTP 403. |
| [`editorConfig.customization.ai.disabled: true`](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#aidisabled) | One editor session (editor configuration) | Only if the configuration is [signed with JWT](/docs/docs-api/additional-api/signature/browser.md) | Hides the AI Tools. With JWT, the server also rejects this session's `/ai-proxy` requests with HTTP 403. |

Use `aiSettings.enable` when AI must not be available on the server at all, for example for compliance reasons. It needs no token, so it also covers sessions that `customization.ai.disabled` cannot: editors opened without JWT, and [version history](/docs/docs-api/usage-api/methods.md#sethistorydata) sessions whose token does not carry the flag.

Use `customization.ai.disabled` when AI should be off only for some users or documents. Your integration decides per editor session:

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

This is a shortcut for adding the AI Tools plugin identifier to the [editorConfig.plugins.disable](/docs/docs-api/usage-api/config/editor/plugins.md#disable) list:

```ts
const config = {
  editorConfig: {
    plugins: {
      disable: ["asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}"],
    },
  },
}
```

To keep AI on but stop the editors from reaching services the administrator has not configured, set [aiSettings.allowBrowserProxy](/docs/docs-api/get-started/configuration/server-config/server-config.md#ai-tools-settings) to `false`. The server then rejects `/ai-proxy` requests whose target matches no configured provider with HTTP 403.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| **Add Model** stays disabled | A required field is empty. | Fill in **Provider**, **API key** (if required), **Model**, and **Profile name**. |
| The model list is empty | The API key or base URL is wrong, or the server cannot reach the provider. | Check the key and the URL, and make sure the server has outbound access to the provider. |
| Users do not see the new models | The changes were not saved, or the editor was opened before saving. | Click **Save Changes**, then reload the document. |
| Users still see the **Settings** button | No AI configuration has been saved on the server. | Make sure at least one model is listed on the **AI Models** tab and click **Save Changes**. |
| The AI Tools are missing | `aiSettings.enable` is `false` on the server, or `customization.ai.disabled` is `true` in the editor configuration. | Change the setting where AI should be available. |
| `/ai-proxy` requests fail with HTTP 404 | AI Tools is not installed in the `sdkjs-plugins` folder on the server. The Admin Panel then shows **AI settings are unavailable** instead of the **AI Settings** page. | Install AI Tools on the server. |
| AI requests fail or time out | Provider quota, billing, or network limits. | Check the provider account and the server's outbound access. The proxy timeout is set with `aiSettings.timeout`. |
