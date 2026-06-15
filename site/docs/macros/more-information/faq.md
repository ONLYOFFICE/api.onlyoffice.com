---
sidebar_position: -1
---

# FAQ

## What scripting language do macros use?

ONLYOFFICE macros use JavaScript syntax and [Office JavaScript API](../../office-api/get-started/overview.md) scripting notation. Any method available in JavaScript and all methods supported by Office API are also available in macros.

## How do I run a macro?

1. Open ONLYOFFICE Desktop Editors or ONLYOFFICE Docs.
2. Navigate to the **View** tab on the top toolbar.
3. Click **Macros** to open the macro editor.
4. Write or paste your macro code, then click ![Play icon](/assets/images/plugins/play.svg) to run it.

For a step-by-step walkthrough, see the [Getting started](../guides/getting-started.md) page.

## Can macros access the file system or make network requests?

No. Macros run as JavaScript code inside the editor window and have no access to the system. They cannot read or write files, make network requests, or interact with the operating system directly.

## How do I debug a macro?

Use the `debugger` keyword as a breakpoint in your script and open the browser developer console (**F12**). For ONLYOFFICE Desktop Editors, follow the [platform-specific debug instructions](../../desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md). See the full [Debugging](../guides/debugging.md) page for details.

## Can I use my Microsoft Office (VBA) macros in ONLYOFFICE?

Not directly, because ONLYOFFICE macros use JavaScript while Microsoft Office macros use Visual Basic for Applications (VBA). You can convert them in two ways:

- **Automatically** - using the built-in AI plugin converter (recommended). See [Converting VBA macros](../guides/converting-vba-macros.md).
- **Manually** - by rewriting the logic in JavaScript using the Office JavaScript API.

## Can I make a macro available across all documents?

Macros are attached to a specific document and cannot be made global. If you need functionality available across all documents for all users, write a [plugin](../../plugins/fundamentals/configuration/config-json.md) instead.

## Where can I find ready-made macro examples?

Ready-to-use macro samples are listed on the [samples page](/samples/?doctype=docs&text=macros).
