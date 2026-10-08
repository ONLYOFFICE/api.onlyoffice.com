---
description: "Provides API client context to all child components using the ONLYOFFICE Apps API SDK."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/providers/api/ApiProvider.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

# ApiProvider

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Provides API client context to all child components using the ONLYOFFICE Apps API SDK.

## Features

- **API Client Instances** — Creates and manages the SDK clients: Profiles, Settings, Folders, Rooms, Files, File settings, Operations, Group, People search, Group search, AI, Third-party, Payment and Portal quota
- **Bearer Token Auth** — Configures axios instances with Bearer token authentication
- **React Context** — Exposes API clients via `useApi()` hook
- **Memoized Initialization** — API clients are memoized based on URL and API key changes
- **Socket Connection** — Connects the portal WebSocket on mount unless `initSocket` is `false`

<ThemedImage alt="Default" width={982} sources={{ light: require('./api-provider--default-light.png').default, dark: require('./api-provider--default-dark.png').default }} />

## Usage

```tsx
import { ApiProvider, useApi } from "@onlyoffice/apps-ui-kit/providers/api";

<ApiProvider url="https://docspace.example.com" apiKey="your-api-key">
  <App />
</ApiProvider>

const MyComponent = () => {
  const { profilesApi, foldersApi } = useApi();
};
```
