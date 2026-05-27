---
sidebar_position: 1
---

import DocspaceEmbed from '@site/src/components/DocspaceEmbed';

# Get Started

The [ONLYOFFICE DocSpace Embed SDK](https://github.com/ONLYOFFICE/docspace-sdk-js), based on JavaScript, lets you embed DocSpace directly inside your web application. You can integrate a full document workspace, a standalone editor, a file picker, or a background authentication frame — with just a few lines of code.

You can use it as an [npm package](./quick-start.md#using-the-npm-package) for modern web applications or connect it via a [script tag](./quick-start.md#embedding-with-a-script-tag) for a quick start. For React projects, there is also a ready-made [React component](../samples/react-samples.md).

## Prerequisites

Before you begin, make sure you have the following:

- A running DocSpace instance, either cloud or self-hosted
- The URL of your server added to the **Developer Tools** section in DocSpace settings under the **JavaScript SDK** tab
- A server environment to serve your files from — opening an HTML file directly in the browser will not work
- A modern browser — Chrome, Firefox, Edge, or Safari (the SDK relies on `postMessage` and other standard web APIs)

:::info

If your DocSpace instance is served over HTTPS, your embedding page must also be served over HTTPS. Browsers block mixed content (an HTTPS page loading resources from HTTP), which will prevent the SDK from loading correctly.

Additionally, we recommend configuring HTTPS on your server and setting `"SameSite": "none"` in `appsettings.json`. This is to allow cross-domain cookies in stricter browser environments. Without HTTPS, the SDK may still work in some setups, but cross-origin authentication and session handling can fail depending on your browser's cookie policy.

:::

## Embedding modes

The SDK supports multiple initialization modes:

| Mode | UI shown to user | User can browse | User can edit | Requires file/room ID | Auth required |
| ------ | ----------------- | ------ | -------- | ------ | ------ |
| Manager | Full file and room manager | Yes | Yes | No | Yes |
| Public room | Public room view | Yes (within room) | Yes (within room) | Yes (room) | No |
| Viewer | Document viewer | No | No | Yes (file) | Yes |
| Editor | Document editor | No | Yes | Yes (file) | Yes |
| Room selector | Room picker dialog | Rooms only | No | No | Yes |
| File selector | File picker dialog | Yes | No | No | Yes |
| System | None (hidden frame) | N/A | N/A | N/A | Yes |

:::note
- For Public room, editing is scoped to documents within the room.
- Selector and system modes do not expose editing capabilities.
:::

Ready to embed DocSpace? Follow the [Quick Start](./quick-start.md).

## Example

This example shows what a DocSpace Public room looks like when embedded in your website as a frame.

<DocspaceEmbed params="?mode=public-room&id=2613800&token=ZjIrNGhZM2tDbmFnbzRHMmxKODE4Umx5SHdXOUx4OXVpc3BpaTlyN1ZIOD0_IjEzZmQ4MmRkLTVkNTAtNDM0ZC1iZTE0LWM2M2ZkNDJkMDFhNCI" />
