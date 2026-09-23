---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/react/actions.ts
---

# PluginActions

Portal-side actions available to a React plugin component.
Returned by [`usePluginActions`](hooks.md#usepluginactions).

## Example

```tsx
function MyPanel() {
  const { showToast, showModal, closeModal } = usePluginActions();

  return (
    <button onClick={() => showToast({ type: ToastType.success, title: "Done!" })}>
      Notify
    </button>
  );
}
```

## Methods

### showToast()

```ts
showToast(props: IToast): void;
```

Show a toast in the corner of the portal. It fades on its own.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IToast`](../interfaces/components/IToast.md) |

#### Returns

`void`

#### Example

```ts
showToast({ type: ToastType.success, title: "File uploaded" });
```

### showModal()

```ts
showModal(props: IModalDialog): void;
```

Open a modal dialog. One at a time — a second call replaces the open one.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IModalDialog`](../interfaces/components/IModalDialog.md) |

#### Returns

`void`

#### Example

```ts
showModal({ dialogHeader: "File details", dialogBodyComponent: Details });
```

### closeModal()

```ts
closeModal(): void;
```

Close the open modal dialog. A no-op when none is open.

#### Returns

`void`

#### Example

```tsx
<button onClick={closeModal}>Cancel</button>
```

### showSelector()

```ts
showSelector(props: TSelector): void;
```

Open a selector for picking files, folders, rooms, users or groups.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TSelector`](../interfaces/components/Selector.md) |

#### Returns

`void`

#### Example

```ts
showSelector({
  type: SelectorType.Files,
  props: {
    submitButtonLabel: "Attach",
    onSubmit: ({ selectedIds }) => ({ actions: [Actions.closeSelector] }),
  },
});
```

### updateSelector()

```ts
updateSelector(props: TSelector): void;
```

Replace the props of the open selector, keeping it on screen. Use it to feed in
items once they load, or to flip the submit button.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TSelector`](../interfaces/components/Selector.md) |

#### Returns

`void`

#### Example

```ts
updateSelector({ ...selector, props: { ...selector.props, isLoading: false, items } });
```

### closeSelector()

```ts
closeSelector(): void;
```

Close the open selector. A no-op when none is open.

#### Returns

`void`

#### Example

```ts
onSubmit: ({ selectedIds }) => { save(selectedIds); closeSelector(); }
```

### showCreateDialog()

```ts
showCreateDialog(props: ICreateDialog): void;
```

Open the portal's create-file dialog for a file the plugin owns: the portal
draws the dialog, and the callbacks on the props do the work. Answering one
of them with an
[`IMessage`](../interfaces/utils.md#imessage) carrying
`Actions.updateCreateDialogModal` is what changes the open dialog — its
title, its error text or the extension in the combo box.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ICreateDialog`](../interfaces/components/ICreateDialog.md) | The dialog: its title, its starting value, the extension it creates and the `onSave` / `onChange` / `onSelect` callbacks. |

#### Returns

`void`

#### Example

```ts
showCreateDialog({
  isCreateDialog: true,
  title: "New report",
  startValue: "Report",
  extension: "docx",
  onSave: async (_, value) => {
    await api.post("/files/@my/file", { title: `${value}.docx` });
    return { actions: [Actions.showToast], toastProps: [{ type: ToastType.success, title: "Created" }] };
  },
});
```

### navigate()

```ts
navigate(path: string): void;
```

Navigate the portal to another route, without a full page reload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Absolute portal path, e.g. `"/rooms/shared"`. |

#### Returns

`void`

#### Example

```ts
navigate("/rooms/shared");
```

### openInfoPanel()

```ts
openInfoPanel(tab?: string): void;
```

Open the info panel, optionally on a particular tab. Already open, it stays
open and switches to the tab.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tab?` | `string` | The tab to show: one of the portal's own (`"info_details"`, `"info_members"`, `"info_history"`, `"info_share"`) or the key of an [info panel item](../interfaces/items/IInfoPanelItem.md) this plugin registered. Always pass it: left out, the portal stores an invalid view, opens the panel on its first tab and the user's remembered tab is lost. |

#### Returns

`void`

#### Example

```ts
<button onClick={() => openInfoPanel("info_details")}>Show details</button>
<button onClick={() => openInfoPanel("info_history")}>Show history</button>
```

### showMediaViewer()

```ts
showMediaViewer(props: IMediaViewer): void;
```

Open the media viewer over the portal, rendering the plugin's own content.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IMediaViewer`](../interfaces/components/IMediaViewer.md) |

#### Returns

`void`

#### Example

```ts
showMediaViewer({ fileId: file.id, title: file.title, component: Preview });
```

### updateMediaViewer()

```ts
updateMediaViewer(props: IMediaViewer): void;
```

Replace the props of the open media viewer, keeping it on screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IMediaViewer`](../interfaces/components/IMediaViewer.md) |

#### Returns

`void`

#### Example

```ts
updateMediaViewer({ fileId: nextId, title: nextTitle, component: Preview });
```

### closeMediaViewer()

```ts
closeMediaViewer(): void;
```

Close the open media viewer. A no-op when none is open.

#### Returns

`void`

#### Example

```ts
<button onClick={closeMediaViewer}>Done</button>
```

### addFloatingOperationsButton()

```ts
addFloatingOperationsButton(props: IFloatingOperationsButton): void;
```

Add a floating button that tracks long-running operations. Buttons from all
plugins share one panel; `id` identifies this plugin's group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IFloatingOperationsButton`](../interfaces/components/IFloatingOperationsButton.md) |

#### Returns

`void`

#### Example

```ts
addFloatingOperationsButton({
  id: "export",
  operations: [{ id: "1", label: "Exporting", operation: FloatingOperationType.Other,
    alert: false, completed: false, percent: 0 }],
});
```

### updateFloatingOperationsButton()

```ts
updateFloatingOperationsButton(props: IFloatingOperationsButton): void;
```

Push new progress into an existing floating button. Call it as work advances.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IFloatingOperationsButton`](../interfaces/components/IFloatingOperationsButton.md) |

#### Returns

`void`

#### Example

```ts
updateFloatingOperationsButton({
  id: "export",
  operations: [{ id: "1", label: "Exporting", operation: FloatingOperationType.Other,
    alert: false, completed: false, percent: 60 }],
});
```

### removeFloatingOperationsButton()

```ts
removeFloatingOperationsButton(id: string): void;
```

Remove the plugin's floating button and its operations from the panel.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The `id` the button was added with. |

#### Returns

`void`

#### Example

```ts
removeFloatingOperationsButton("export");
```

### updateContextMenuItems()

```ts
updateContextMenuItems(): void;
```

Redraw the plugin's context menu items.

Every `update*Items` action below works the same way: mutate the item on the
plugin instance first, then call this so DocSpace re-reads the collection.
They exist because item metadata — labels, icons, visibility — lives on the
plugin class, outside the React tree, where `setState` cannot reach it.

#### Returns

`void`

#### Example

```ts
plugin.updateContextMenuItem({ ...item, label: "Convert (beta)" });
updateContextMenuItems();
```

### updateInfoPanelItems()

```ts
updateInfoPanelItems(): void;
```

Redraw the plugin's info panel tabs.

#### Returns

`void`

#### Example

```ts
plugin.updateInfoPanelItem({ ...item, subMenu: { name: "Analysis (3)" } });
updateInfoPanelItems();
```

### updateMainButtonItems()

```ts
updateMainButtonItems(): void;
```

Redraw the plugin's main button entries.

#### Returns

`void`

#### Example

```ts
plugin.updateMainButtonItem({ ...item, label: "Import from Drive" });
updateMainButtonItems();
```

### updateProfileMenuItems()

```ts
updateProfileMenuItems(): void;
```

Redraw the plugin's profile menu entries.

#### Returns

`void`

#### Example

```ts
plugin.updateProfileMenuItem({ ...item, label: "My reports (3)" });
updateProfileMenuItems();
```

### updateFileItems()

```ts
updateFileItems(): void;
```

Redraw the plugin's file items — the badges and actions shown on file rows.

#### Returns

`void`

#### Example

```ts
plugin.updateFileItem({ ...item, fileTypeName: "Signed" });
updateFileItems();
```

### updateEventListenerItems()

```ts
updateEventListenerItems(): void;
```

Re-register the plugin's event listeners, so added or removed ones take effect.

#### Returns

`void`

#### Example

```ts
plugin.addEventListenerItem({ key: "on-rename", eventType: Events.RENAME, eventHandler });
updateEventListenerItems();
```

### updateArticleButtonItems()

```ts
updateArticleButtonItems(): void;
```

Redraw the plugin's article button items above the sidebar DevTools section.

#### Returns

`void`

#### Example

```ts
plugin.updateArticleButtonItem({ ...item, component: NextButton });
updateArticleButtonItems();
```

### updateArticleNavigationItems()

```ts
updateArticleNavigationItems(): void;
```

Redraw the plugin's navigation items in the sidebar, so a new `label` or `icon`
becomes visible.

#### Returns

`void`

#### Example

```ts
plugin.updateArticleNavigationItem({ ...item, label: "Reports (3)" });
updateArticleNavigationItems();
```
