---
sidebar_position: -6
---

# DocEditor

`DocsAPI.DocEditor` is the main class of ONLYOFFICE Docs API. It is the entry point for creating, configuring, and managing a document editor embedded in a web page.

## DocsAPI

`DocsAPI` is the global namespace provided by the ONLYOFFICE Docs [API script](../get-started/installation/self-hosted.md):

```html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
```

Where `documentserver` is the name of the server with ONLYOFFICE Docs installed.

Once the script is loaded, the `DocsAPI` object becomes available on the `window` and exposes the `DocEditor` constructor.

:::tip
You can [preload static resources](../get-started/configuration/preload.md) (HTML, CSS, JS, fonts) into the browser cache before opening a document to speed up the first-time loading.
:::

## Constructor

To create an editor instance, call the `DocEditor` constructor with two arguments — the `id` attribute of an existing HTML element where the editor will be rendered, and a [configuration object](./config/config.md):

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

| Parameter | Type   | Description                                                                                                                          |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| id        | string | The `id` attribute of an existing HTML element where the editor will be rendered (e.g. `"placeholder"` for `<div id="placeholder">`). |
| config      | object | The [configuration object](./config/config.md) containing the document, editor, and event parameters.                                |

## Instance methods

The constructor returns a `docEditor` object. Use it to call [methods](./methods.md) that control the editor at runtime — download files, manage version history, update sharing settings, and more:

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);

// later, when handling events or user actions:
docEditor.downloadAs("pdf");
docEditor.destroyEditor();
```

See [Methods](./methods.md) for the full list.

## Events

Events are functions passed in the `config.events` section. They allow the integrator to respond to editor actions — for example, when the document is ready, when the user requests to save, or when collaborative changes arrive:

``` ts
const config = {
  events: {
    onAppReady() {
      console.log("Editor is ready");
    },
    onDocumentStateChange(event) {
      console.log("Document modified:", event.data);
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

See [Events](./config/events.md) for the full list of available events.

## Minimal example

``` ts
const config = {
  document: {
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  editorConfig: {
    callbackUrl: "https://example.com/url-to-callback",
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Replace `example.com` with the host of your **document storage service**. The [`callbackUrl`](./config/editor/editor.md#callbackurl) is the endpoint on your server where ONLYOFFICE Docs sends document status updates and saved files. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

For the complete configuration structure with all available sections and parameters, see [Configuration overview](./advanced-parameters.md).

:::caution
When JWT validation is enabled on your document server (the default configuration), the `config` must include a matching [`token`](../get-started/how-it-works/security.md). Sign the config with your document server's JWT secret.
:::
