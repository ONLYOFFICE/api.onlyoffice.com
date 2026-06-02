---
sidebar_position: 1
---

import DocspaceEmbed from '@site/src/components/DocspaceEmbed';

# Introduction

The [ONLYOFFICE DocSpace Embed SDK](https://github.com/ONLYOFFICE/docspace-sdk-js), based on JavaScript, lets you embed DocSpace directly inside your web application. You can integrate a full document workspace, a standalone editor, a file picker, or a background authentication frame — with just a few lines of code.

You can use it as an [npm package](./quickstart.md#using-the-npm-package) for modern web applications or connect it via a [script tag](./quickstart.md#embedding-with-a-script-tag) for a quick start. For React projects, there is also a ready-made [React component](../samples/react-samples.md).

## Prerequisites

Before you begin, make sure you have the following:

- A running DocSpace instance, either [cloud](https://www.onlyoffice.com/docspace-registration.aspx?from=api) or [self-hosted](https://www.onlyoffice.com/download-developer.aspx?from=api#docspace-developer)
- The URL of your server added to the **Developer Tools** section in DocSpace settings under the **Embed SDK** tab
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
| Uploader | File upload dialog | No | No | Yes (folder) | Yes |
| Forms | Forms gallery | Yes | No | Yes (room) | Yes |
| Chat | Chat interface | No | No | Yes (agent) | Yes |

:::note
- For Public room, editing is scoped to documents within the room.
- Selector, system, uploader, and chat modes do not expose editing capabilities.
:::

Ready to embed DocSpace? Follow the [Quickstart](./quickstart.md).

## Live demo

To see what the SDK looks like in a real product, explore the [live demo](https://demo-embed.onlyoffice.com/) — a sample conference website with DocSpace embedded across multiple pages, each using a different mode:

| Page | What's embedded |
| --- | --- |
| [Home](https://demo-embed.onlyoffice.com/) | Presentation playing in the Viewer mode |
| [Program](https://demo-embed.onlyoffice.com/444-2/) | Spreadsheet in the Viewer mode; participant documents in an embedded file list |
| [Abstract Submission](https://demo-embed.onlyoffice.com/abstract-submission/) | Fillable form open in the Editor mode |
| [Promotional Toolkit](https://demo-embed.onlyoffice.com/promotional-toolkit/) | Marketing materials browsable in an embedded file list |
| [Registration](https://demo-embed.onlyoffice.com/registration-2/) | Price list spreadsheet in the Viewer mode |

## Example

This example shows what a DocSpace Public room looks like when embedded in your website as a frame.

<DocspaceEmbed params="?mode=public-room&id=2613800&token=ZjIrNGhZM2tDbmFnbzRHMmxKODE4Umx5SHdXOUx4OXVpc3BpaTlyN1ZIOD0_IjEzZmQ4MmRkLTVkNTAtNDM0ZC1iZTE0LWM2M2ZkNDJkMDFhNCI" />
