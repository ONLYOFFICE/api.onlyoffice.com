---
sidebar_position: -2
---

# Preloading static resources

Starting from version 9.0, you can preload static assets (HTML, CSS, JS, fonts) into the browser cache before opening a document to speed up the first-time loading of the document editor.

Two options are available.

## Option 1. Using the ?preload=placeholder parameter

Append the `?preload=placeholder` parameter to the `api.js` URL:

``` html
<div id="placeholder"></div>
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js?preload=placeholder"></script>
```

Where `documentserver` is the name of the server where ONLYOFFICE Docs is installed.

:::tip
Don't have a document server yet? [Register](https://www.onlyoffice.com/docs-registration.aspx?from=api) for a free ONLYOFFICE Docs Cloud and use the public IP address or public DNS name of your instance as `documentserver`. You can find them in the **Instances** section of the cloud console.
:::

When this script loads, in addition to providing the [`DocsAPI.DocEditor`](../../usage-api/doceditor.md) constructor, it automatically inserts a hidden `<iframe>` into the element with `id="placeholder"` to preload static editor assets in the background.

## Option 2. Manually inserting a preload iframe

Alternatively, you can insert a hidden `<iframe>` pointing to the preload page manually:

``` html
<iframe src="https://documentserver/web-apps/apps/api/documents/preload.html" style="display:none;"></iframe>
```

Where `documentserver` is the name of the server where ONLYOFFICE Docs is installed.

This option is recommended if you need to set additional security parameters for the iframe or use a nonce when inserting it into the DOM.

:::note
Use an `<iframe>` for preloading, not a `<link rel="prefetch">`. The editor's static assets (scripts, styles, fonts) are loaded within the iframe's context, and `<link rel="prefetch">` will not correctly trigger their loading or caching.
:::
