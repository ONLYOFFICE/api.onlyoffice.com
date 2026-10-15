---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/react/hooks.ts
---

# Hooks

React hooks for plugin components rendered inside the DocSpace application tree.

A plugin component is passed to the SDK through one of the `*Component` props —
[`IInfoPanelItem.component`](../interfaces/items/IInfoPanelItem.md#component?),
[`IArticleButtonItem.component`](../interfaces/items/IArticleButtonItem.md#component?),
[`IArticleNavigationItem.component`](../interfaces/items/IArticleNavigationItem.md#component),
[`IModalDialog.dialogBodyComponent`](../interfaces/components/IModalDialog.md#dialogBodyComponent?)
or [`ISettings.component`](../interfaces/settings/ISettings.md#component?).
DocSpace renders it with the plugin runtime in context, and these hooks read
that context.

The hooks are published from the `@onlyoffice/docspace-plugin-sdk/react`
subpath, which requires `react` 19 or later as a peer dependency:

```tsx
import { useCurrentFile, usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
```

:::info Bundling
`react`, `react-dom`, `react/jsx-runtime`,
`@onlyoffice/docspace-plugin-sdk/react` and `@docspace/ui-kit` must stay
**external** in the plugin bundle — DocSpace supplies its own copies at load
time. A plugin that bundles its own React gets a second React instance with
its own context objects, and every hook below then throws; the same goes for
a second copy of this subpath, which owns the context those hooks read.

The SDK root, `@onlyoffice/docspace-plugin-sdk`, is **not** on that list. It
carries string enums and types and no module state, so it is bundled like
any other dependency.

DocSpace substitutes these specifiers, spelled exactly that way.
`@docspace/ui-kit` is today the package root only: a subpath import left
external reaches the portal unresolved and the plugin then fails to load,
naming the specifier in the console.
:::

## usePluginRuntime()

```ts
function usePluginRuntime(): PluginRuntime;
```

Returns the full [`PluginRuntime`](runtime.md#pluginruntime) context for the current plugin component.

### Example

```tsx
import { usePluginRuntime } from "@onlyoffice/docspace-plugin-sdk/react";

function MyComponent() {
  const { currentFile, currentUser, actions, api, settings } = usePluginRuntime();
  // …
}
```

***

### Returns

[`PluginRuntime`](runtime.md#pluginruntime)

### Remarks:

Prefer the focused hooks ([`useCurrentFile`](#usecurrentfile), [`usePluginActions`](#usepluginactions),
etc.) when you only need a single slice of the runtime — they are more
readable and produce narrower TypeScript types.

### Throws

When called outside a plugin component rendered by DocSpace.

## useCurrentFile()

```ts
function useCurrentFile(): TCurrentFile | null;
```

Returns metadata of the file, folder or room currently selected in the
DocSpace UI, or `null` when nothing is selected. It is also `null` on
surfaces that have no selection of their own — an article navigation page,
the settings panel, and a dialog opened from a class-side callback — so pass
the id the click knew through a module variable or a factory closure.

### Example

```tsx
import { useCurrentFile } from "@onlyoffice/docspace-plugin-sdk/react";

function InfoPanel() {
  const file = useCurrentFile();

  if (!file) return <p>No file selected.</p>;

  return (
    <div>
      <p>{file.title}</p>
      {file.fileExst && <p>Extension: {file.fileExst}</p>}
      {file.isRoom  && <p>Room type: {file.roomType}</p>}
    </div>
  );
}
```

***

### Returns

[`TCurrentFile`](runtime.md#tcurrentfile) \| `null`

## usePluginActions()

```ts
function usePluginActions(): PluginActions;
```

Returns all portal-side UI actions available to the plugin.

### Example

```tsx
import { usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { ToastType } from "@onlyoffice/docspace-plugin-sdk";

function MyPanel() {
  const { showToast, showModal, closeModal } = usePluginActions();

  return (
    <>
      <button onClick={() => showToast({ type: ToastType.success, title: "Done!" })}>
        Toast
      </button>
      <button onClick={() => showModal({ dialogHeader: "Info", dialogBodyComponent: Details, onClose: closeModal })}>
        Open modal
      </button>
    </>
  );
}
```

***

### Returns

[`PluginActions`](actions.md)

## usePluginAPI()

```ts
function usePluginAPI(): PluginAPIClient;
```

Returns a typed HTTP client scoped to the current portal.
Authentication is applied automatically — no credentials need to be handled
by the plugin. Paths are relative to the API base URL, e.g. `"/files/@my"`,
and each call resolves to the payload itself rather than to the envelope the
portal wraps it in.

### Example

```tsx
import { usePluginAPI } from "@onlyoffice/docspace-plugin-sdk/react";

function RoomList() {
  const api = usePluginAPI();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.get("/files/rooms").then((folder) => setRooms(folder.folders));
  }, []);

  return <ul>{rooms.map((r) => <li key={r.id}>{r.title}</li>)}</ul>;
}
```

***

### Returns

[`PluginAPIClient`](api.md#pluginapiclient)

## useCurrentUser()

```ts
function useCurrentUser(): TCurrentUser | null;
```

Returns the profile of the user currently authenticated in the portal,
or `null` while the profile is loading.

### Example

```tsx
import { useCurrentUser } from "@onlyoffice/docspace-plugin-sdk/react";

function UserBadge() {
  const user = useCurrentUser();
  if (!user) return null;

  return (
    <p>
      {user.displayName}
      {user.isAdmin && " (Admin)"}
    </p>
  );
}
```

***

### Returns

[`TCurrentUser`](runtime.md#tcurrentuser) \| `null`

## usePluginSettings()

```ts
function usePluginSettings(): PluginSettingsClient;
```

Returns the client for loading, saving and controlling the Save button of
the plugin settings dialog.

### Example

```tsx
import { useEffect, useState } from "react";
import { usePluginSettings } from "@onlyoffice/docspace-plugin-sdk/react";
import { Components, ButtonSize } from "@onlyoffice/docspace-plugin-sdk";

type Config = { apiKey: string };

function SettingsPanel() {
  const settings = usePluginSettings();
  const [apiKey, setApiKey] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    settings.load<Config>().then((saved) => {
      if (saved) setApiKey(saved.apiKey);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    settings.setSaveButton({
      component: Components.button,
      props: {
        label: "Save",
        size: ButtonSize.small,
        isDisabled: !apiKey.trim(),
        onClick: async () => { await settings.save({ apiKey }); },
      },
    });
  }, [apiKey, loaded]);

  return <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />;
}
```

### Returns

[`PluginSettingsClient`](settings.md)

