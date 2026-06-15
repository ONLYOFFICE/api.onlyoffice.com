---
sidebar_position: 4
---

# Security and sandboxing

Every plugin runs inside a sandboxed iframe. This is not a restriction to work around - it is what makes plugins safe for end users and stable for the editor. Understanding what the sandbox allows and prevents helps you design plugins that work reliably.

## What the sandbox prevents

The iframe sandbox blocks plugins from:

- **Accessing the editor's internal DOM** - a plugin cannot read or modify the editor's markup directly
- **Reading files from the user's machine** - no local file system access
- **Accessing other plugins** - plugin iframes are isolated from each other
- **Injecting scripts into the editor window** - no XSS path from a plugin to the editor UI
- **Calling editor internals directly** - only API-exposed methods are reachable

## What the sandbox allows

Plugins can:

- Make network requests to external services (subject to CORS)
- Use `localStorage` and `sessionStorage` within the plugin's origin
- Load external scripts and stylesheets into the plugin iframe
- Communicate with the editor through `window.Asc.plugin` methods and events

## The permissions model

Plugins can only perform operations explicitly exposed by the API. Any attempt to reach outside the sandbox has no effect.

:::warning[Wrong - direct DOM manipulation]
```javascript
// This has no effect on the document - the editor DOM is not accessible
document.querySelector(".editor-content").innerHTML = "New content";
```
:::

:::tip[Correct - API method]
```javascript
// This works - it goes through the API bridge
window.Asc.plugin.executeMethod("PasteText", ["New content"]);
```
:::

## Network requests

Plugins can call external APIs from within the iframe using `fetch` or `XMLHttpRequest`:

```javascript
fetch("https://api.example.com/data")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    // Use the response in your plugin UI or pass to the editor
    Asc.scope.result = data.text;
    window.Asc.plugin.callCommand(function () {
      var oParagraph = Api.CreateParagraph();
      oParagraph.AddText(Asc.scope.result);
      Api.GetDocument().InsertContent([oParagraph]);
    });
  });
```

The external server must return appropriate CORS headers if the plugin's origin differs from the API origin.

## Content Security Policy

ONLYOFFICE editors may enforce a Content Security Policy that restricts which origins can load scripts, images, and frames inside the plugin. If your plugin loads resources from external CDNs or services, ensure those origins are permitted by the deployment's CSP configuration.

## Sensitive data handling

Plugins should treat any data returned from the editor (document content, user information) as sensitive:

- Do not log document content to external services without explicit user consent
- Do not store credentials in `localStorage` without encryption
- Use HTTPS for all external API calls
- Validate and sanitize any data before inserting it into the document

## Plugin source integrity

When deploying plugins to a server, serve them over HTTPS to prevent man-in-the-middle modification of plugin files. The editor fetches the plugin by the `baseUrl` defined in `config.json` - if this URL is served over HTTP, the plugin files can be tampered with in transit.

## See also

- [Communication flow](communication-flow.md) - the API bridge that enforces the sandbox boundary
- [config.json reference](../configuration/configuration.md) - `baseUrl` and deployment settings
