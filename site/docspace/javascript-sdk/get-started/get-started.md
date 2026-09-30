---
sidebar_position: 1
---

import DocspaceEmbed from '@site/src/components/DocspaceEmbed';

# Introduction

The [ONLYOFFICE DocSpace Embed SDK](https://github.com/ONLYOFFICE/docspace-sdk-js), based on JavaScript, lets you embed DocSpace directly inside your web application. You can integrate a full document workspace, a standalone editor, a file picker, or a background authentication frame — with just a few lines of code.

You can use it as an [npm package](./quickstart.md#using-the-npm-package) for modern web applications or connect it via a [script tag](./quickstart.md#embedding-with-a-script-tag) for a quick start. For React projects, there is also a ready-made [React component](../samples/react-samples.md).

## Prerequisites

Before you begin, make sure you have the following:

- A running DocSpace instance, either [cloud](https://www.onlyoffice.com/docspace-registration?from=api) or [self-hosted](https://www.onlyoffice.com/download-developer?from=api#docspace-developer) — client version 4.0.0 or later (Embed SDK 2.2.0 requires DocSpace 4.0.0).
- The origin of your embedding page added to the **Developer Tools** section in DocSpace settings under the **Embed SDK** tab
- A server environment to serve your embedding page from — opening it as a local HTML file directly in the browser will not work
- A modern browser — Chrome, Firefox, Edge, or Safari (the SDK relies on `postMessage` and other standard web APIs)

:::info

If your DocSpace instance is served over HTTPS, your embedding page must also be served over HTTPS — browsers block mixed content (an HTTPS page loading resources from HTTP), which prevents the SDK from loading at all.

With HTTPS on both sides and the embedding page's origin registered in Developer Tools (see the Prerequisites above), the portal automatically sets the auth cookie's `SameSite=None; Secure; Partitioned` attributes for you — no manual configuration needed. Without HTTPS, the cookie falls back to `SameSite=Strict` and won't be sent inside the iframe, breaking session-based authentication.

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
| Forms | Form filling room | Yes | Yes | Optional (room from portal settings by default) | Yes |
| Chat | AI chat interface | No | No | No | Yes |
| Personal | Personal file manager (My Documents, Favorites, Recent, Shared with me, Trash) | Yes | Yes | No | Yes |

:::note
- For Public room, editing is scoped to documents within the room.
- Selector, system, and uploader modes do not expose editing capabilities.
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
