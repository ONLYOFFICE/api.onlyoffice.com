---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/scripts/docs/sections.mjs"
---

# Providers

The providers an application mounts above the components. `ThemeProvider` and `TranslationProvider` are required -- without them components render unstyled and without text -- and `ErrorBoundary` catches a render failure below it.

## Overview

The following components are available:

| Provider | Description |
| --- | --- |
| [ApiProvider](./api-provider.md) | Provides API client context to all child components using the ONLYOFFICE Apps API SDK. |
| [ErrorProvider](./error-boundary.md) | Catches what the subtree throws while rendering and shows something in its place. |
| [ThemeProvider](./theme.md) | Resolves the light, dark or system theme and writes it onto the document for every component to read. |
| [TranslationProvider](./translation.md) | Installs the i18next instance the eleven components with labels of their own read from. |
