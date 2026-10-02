---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/API.mdx"
---

# API

> **Portal-internal.** Everything on this page needs a DocSpace portal: a URL, an API key and a
> signed-in person. An application built on this kit does not mount `ApiProvider` and does not call
> these endpoints — it talks to its own backend and composes only the theme and translation
> providers.

The UI Kit uses `ApiProvider` to give components access to the ONLYOFFICE Apps REST API.
It wraps the `@onlyoffice/docspace-api-sdk` and authenticates requests with a Bearer token.

## Reference documentation

This page covers the provider, not the endpoints. The REST API itself is documented at
[api.onlyoffice.com/docspace](https://api.onlyoffice.com/docspace/), and the same
documentation is published in a machine-readable form for agents and LLMs:

- [`llms.txt`](https://api.teamlab.info/llms.txt) — index of every section
- [`docspace/api-backend/llms.txt`](https://api.teamlab.info/docspace/api-backend/llms.txt) —
  the DocSpace REST API reference the SDK wraps
- [`docspace/javascript-sdk/llms.txt`](https://api.teamlab.info/docspace/javascript-sdk/llms.txt) —
  Embed SDK
- [`docspace/plugins-sdk/llms.txt`](https://api.teamlab.info/docspace/plugins-sdk/llms.txt) —
  Plugins SDK
- [`docspace/mcp-server/llms.txt`](https://api.teamlab.info/docspace/mcp-server/llms.txt) —
  MCP server

Every page there is also available as Markdown: replace the trailing slash of its URL
with `.md`.

Those links point at `api.teamlab.info` today. The documentation is moving to
`api.onlyoffice.com` under the same paths, so prefer that host once it serves them.

## Setting up ApiProvider

```tsx
import { ApiProvider } from "@onlyoffice/apps-ui-kit/providers/api";

<ApiProvider url="https://your-docspace.com/api" apiKey="your-api-key">
  <App />
</ApiProvider>
```

There is also a composite `Providers` component that bundles the API, translation and theme
providers together. Everything on this page, that component included, is **portal-internal**: it
needs a DocSpace URL, an API key and a portal behind them. An application of your own composes
`ThemeProvider` and `TranslationProvider` and nothing else — see
[Getting started](./welcome.md).

### Provider props

- **`url`** (`string`) — base URL of the ONLYOFFICE Apps API
- **`apiKey`** (`string`) — API key used as Bearer token for authentication
- **`initSocket`** (`boolean`, default `true`) — connect the portal WebSocket on mount
- **`socketPath`** (`string`) — socket path; read from portal settings when omitted
- **`useBearerForRawClient`** (`boolean`) — send `Authorization` with the `Bearer` prefix on
  `rawApiClient` as well (Storybook needs this)

## Using the API in components

Use the `useApi` hook to access API services:

```tsx
import { useApi } from "@onlyoffice/apps-ui-kit/providers/api";

function MyComponent() {
  const { profilesApi, commonSettingsApi } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const profile = await profilesApi.getSelfProfile();
      const settings = await commonSettingsApi.getPortalSettings();

      // Access data via .data.response
      console.log(profile.data.response);
      console.log(settings.data.response);
    };

    fetchData();
  }, [profilesApi, commonSettingsApi]);

  return <div>...</div>;
}
```

> Calling `useApi()` outside of `ApiProvider` throws: `"useApi must be used within an ApiProvider"`

## Available API services

The `useApi` hook returns the following services:

- **`profilesApi`** — user profile operations (`getSelfProfile`)
- **`commonSettingsApi`** — portal settings (`getPortalSettings`)
- **`foldersApi`** — folder management (`createFolder`)
- **`roomsApi`** — room management (`createRoom`, `getRoomsFolder`)
- **`filesApi`** — file operations (`openEditFile`)
- **`filesSettingsApi`** — file settings (`getDocServiceUrl`)
- **`operationsApi`** — long-running file operations
- **`groupApi`** — group management
- **`peopleSearchApi`** — people search
- **`groupSearchApi`** — group search
- **`aiApi`** — AI agents and MCP servers
- **`thirdPartyApi`** — third-party storage connections
- **`paymentApi`** — tariffs and payments
- **`portalQuotaApi`** — portal quota
- **`apiClient`** — raw client for custom requests (`Bearer` prefix on the token)
- **`rawApiClient`** — the same client without the `Bearer` prefix, unless
  `useBearerForRawClient` is set
- **`baseUrl`** — base API URL string

## Response format

All API calls return responses in this format:

```ts
{
  data: {
    response: T  // Actual data payload
  }
}
```

Access the data via `.data.response`:

```ts
const result = await profilesApi.getSelfProfile();
const user = result.data.response; // EmployeeFullDto
```

## Usage examples

### Creating a folder

```tsx
const { foldersApi } = useApi();

await foldersApi.createFolder(parentFolderId, {
  title: "My Folder",
});
```

### Creating a room

```tsx
import { RoomType } from "@onlyoffice/docspace-api-sdk";

const { roomsApi } = useApi();

await roomsApi.createRoom({
  roomType: RoomType.CustomRoom,
  title: "My Room",
});
```

### Listing rooms with pagination

```tsx
const { roomsApi } = useApi();

const res = await roomsApi.getRoomsFolder(
  typeFilter,          // room type filter
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  StorageFilter.Internal,
  pageCount,           // items per page
  startIndex,          // pagination offset
  undefined,
  undefined,
  searchValue,         // search string
);

const { folders, total, count } = res.data.response;
```

### Opening a file in the editor

```tsx
const { filesApi, filesSettingsApi } = useApi();

const [docService, editConfig] = await Promise.all([
  filesSettingsApi.getDocServiceUrl(),
  filesApi.openEditFile(fileId),
]);

const editorUrl = docService.data.response?.docServiceUrl;
const config = editConfig.data.response;
```

## Raw API client

For endpoints not covered by the SDK services, use the `apiClient` directly:

```tsx
const { apiClient } = useApi();

// Using the typed request helper
const data = await apiClient.request<MyType>("/custom/endpoint");

// Using the raw axios instance
const response = await apiClient.instance.post("/custom/endpoint", body);
```

## Provider hierarchy

When using the composite `Providers` component, providers are nested in this order:

```
ErrorBoundary
  └── ApiProvider
      └── TranslationProvider
          └── ThemeProvider
              └── {children}
```

There is no separate socket provider: `ApiProvider` connects the portal WebSocket itself in
an effect, unless `initSocket` is `false`.

## Testing

Mock the SDK classes in your tests:

```tsx
vi.mock("@onlyoffice/docspace-api-sdk", () => ({
  Configuration: class {},
  ProfilesApi: class {
    getSelfProfile = vi.fn().mockResolvedValue({
      data: { response: { cultureName: "en" } },
    });
  },
  CommonSettingsApi: class {
    getPortalSettings = vi.fn().mockResolvedValue({
      data: { response: { culture: "en" } },
    });
  },
  // ... other API mocks
}));
```

Or wrap your component in `ApiProvider` for integration tests:

```tsx
const { result } = renderHook(() => useApi(), {
  wrapper: ({ children }) => (
    <ApiProvider url="https://example.com" apiKey="test-key">
      {children}
    </ApiProvider>
  ),
});

expect(result.current.profilesApi).toBeDefined();
```
