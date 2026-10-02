---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/scripts/docs/sections.mjs"
---

# Providers

The providers an application mounts above the components. `ThemeProvider` and `TranslationProvider` are required -- without them components render unstyled and without text -- and `ErrorBoundary` catches a render failure below it.

## Overview

The following components are available:

| Provider | Description |
| --- | --- |
| [ApiProvider](./apiprovider.md) | Provides API client context to all child components using the ONLYOFFICE Apps API SDK. |
| [ErrorProvider](./error-boundary.md) | Catches what the subtree throws while rendering and shows something in its place. |
| [ThemeProvider](./theme.md) | Resolves the light, dark or system theme and writes it onto the document for every component to read. |
| [TranslationProvider](./translation.md) | Installs the i18next instance the eleven components with labels of their own read from. |
