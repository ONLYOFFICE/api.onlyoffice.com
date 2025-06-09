---
sidebar_position: -2
---

# Preloading static resources

Starting from version 9.0, you can preload static assets (HTML, CSS, JS, fonts) into the browser cache before opening a document to speed up the first-time loading of the document editor.

Two options are available.

## Using the ?preload=placeholder parameter

Append the `?preload=placeholder` parameter to the `api.js` URL:

``` html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js?preload=placeholder"></script>
```

In this case, in addition to creating `DocsAPI.DocEditor`, a hidden `<iframe>` will be automatically inserted into the DOM with `id="placeholder"`, which loads static editor assets in the background.

## Manually inserting a preload iframe

Alternatively, you can insert a hidden `<iframe>` pointing to the preload page manually:

``` html
<iframe src="https://documentserver/web-apps/apps/api/documents/preload.html" style="display:none;"></iframe>
```

This option is recommended if you need to set additional security parameters for the iframe or use a nonce to insert into the DOM.

> Use an `<iframe>` for preloading, not a `<link rel="prefetch">`. The editor's static assets (scripts, styles, fonts) are loaded within the iframe's context, and `<link rel="prefetch">` will not correctly trigger their loading or caching.
