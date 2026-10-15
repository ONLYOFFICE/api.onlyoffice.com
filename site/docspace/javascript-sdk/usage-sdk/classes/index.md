---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/tools/docs/sections.mjs
---

# Classes

The classes an integration works with. `SDK` creates frames and keeps them in a registry, `SDKInstance` drives one embedded iframe and exposes the methods that call into it, and `SDKError` is what a failed call rejects with.

## Overview

The following classes are available:

| Class | Description |
| --- | --- |
| [`SDK`](SDK.md) | Manages multiple [SDKInstance](SDKInstance.md) objects and provides convenience wrappers for each [SDKMode](../enumerations/SDKMode.md). |
| [`SDKError`](SDKError.md) | The SDK's structured error class. |
| [`SDKInstance`](SDKInstance.md) | Manages a single ONLYOFFICE Apps iframe, handles postMessage communication, and exposes methods for operating on the embedded ONLYOFFICE Apps UI. |
