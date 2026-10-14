---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/tools/docs/sections.mjs
---

# Variables

Exported constants: the default frame configuration, the iframe name prefix, the CSP validation endpoint and the error messages the SDK shows.

## Overview

The following constants are available:

| Constant | Description |
| --- | --- |
| [`connectErrorText`](connectErrorText.md) | Error message passed to [TFrameEvents.onAppError](../type-aliases/TFrameEvents.md#onAppError) when a method is called before the postMessage channel is established (i.e. before the first valid message from the iframe). |
| [`CSPApiUrl`](CSPApiUrl.md) | The ONLYOFFICE Apps CSP validation endpoint. |
| [`cspErrorText`](cspErrorText.md) | Error message shown when the host domain is not in the ONLYOFFICE Apps CSP allowlist. |
| [`defaultConfig`](defaultConfig.md) | The default configuration applied to every frame before user overrides. |
| [`FRAME_NAME`](FRAME_NAME.md) | The prefix for iframe `name` attribute. |
