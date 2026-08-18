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

```ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

| Parameter | Type   | Description                                                                                                                          |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| id        | string | The `id` attribute of an existing HTML element where the editor will be rendered (e.g. `"placeholder"` for `<div id="placeholder">`). |
| config      | object | The [configuration object](./config/config.md) containing the document, editor, and event parameters.                                |

## Rendering in an iframe

The constructor does not render the editor inside the placeholder element — it **replaces** that element with an `<iframe>` that loads the editor from the ONLYOFFICE Docs server:

```html
<!-- before the constructor is called -->
<div id="placeholder"></div>

<!-- after the editor is loaded -->
<iframe name="frameEditor" width="100%" height="100%" frameborder="0" allowfullscreen
        allow="autoplay; camera; microphone; display-capture; clipboard-write;"
        src="https://documentserver/web-apps/apps/documenteditor/main/index.html">
</iframe>
```

The application in the iframe path depends on the [`documentType`](./config/config.md#documenttype) parameter, and the folder after it — on the [`type`](./config/config.md#type) parameter.

### Why an iframe

- **Isolation.** The editors ship their own stylesheets, scripts, fonts, and WebAssembly modules. Rendering them in the DOM of the host page would let its CSS and component framework collide with the editor's, in both directions.
- **Independent updates.** The editor is served by ONLYOFFICE Docs, so updating it does not require rebuilding or redeploying your application.
- **Security boundary.** The editor runs on the ONLYOFFICE Docs origin. The same-origin policy keeps the host page and the editor from reaching into each other's DOM and JavaScript context, and everything crossing the boundary goes through an explicit `postMessage` channel.

### What this means for the host page

- The placeholder element is replaced, not filled. The classes, inline styles, and other attributes set on it are lost when the editor loads. Apply the styles to a wrapper element around the placeholder instead.
- Set the editor size with the [`width`](./config/config.md#width) and [`height`](./config/config.md#height) parameters, or size the wrapper element and leave them at the default `100%`.
- Stylesheets and component libraries of the host page cannot reach anything inside the editor, and the page cannot read the `contentDocument` of the iframe.
- All interaction with the editor goes through the [methods](./methods.md) and [events](./config/events.md) that the API script transports over `postMessage`.
- The iframe is created with the `allowfullscreen` attribute and the `allow` attribute listed above. If the host page is itself embedded in an iframe, the outer iframe must delegate the same permissions.
- The [destroyEditor](./methods.md#destroyeditor) method replaces the iframe back with an empty `<div>` element that has the original `id` attribute and nothing else.

### Customization and styling

Because the CSS of the host page cannot cross into the iframe, the appearance of the editor is configured through the [configuration object](./config/config.md). The layout of the editor stays consistent, but you can change its branding, colors, and the set of interface elements shown to the user:

- [customization](./config/editor/customization/customization-standard-branding.md) - logo, header color, and the visibility of the interface elements.
- [uiTheme](./config/editor/customization/customization-standard-branding.md#uitheme) - the interface theme, including the [custom themes](../get-started/how-it-works/customizing-themes.md) added to the ONLYOFFICE Docs server.
- [type](./config/config.md#type) - the interface layout: `desktop`, `mobile`, or [`embedded`](./config/editor/embedded.md).
- [plugins](./config/editor/plugins.md) - the functionality added to the editor interface.

## Instance methods

The constructor returns a `docEditor` object. Use it to call [methods](./methods.md) that control the editor at runtime — download files, manage version history, update sharing settings, and more:

```ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);

// later, when handling events or user actions:
docEditor.downloadAs("pdf");
docEditor.destroyEditor();
```

See [Methods](./methods.md) for the full list.

## Events

Events are functions passed in the `config.events` section. They allow the integrator to respond to editor actions — for example, when the document is ready, when the user requests to save, or when collaborative changes arrive:

```ts
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

```ts
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

:::tip[TypeScript support]
Install [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) for full IntelliSense and type checking of the config object, `DocEditor` methods, and events. The package version tracks the ONLYOFFICE Docs version.
:::

:::warning
When JWT validation is enabled on your document server (the default configuration), the `config` must include a matching [`token`](../get-started/how-it-works/security.md). Sign the config with your document server's JWT secret.
:::
