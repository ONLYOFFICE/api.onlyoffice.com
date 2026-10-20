---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Events.ts
---

# Events

Defines the supported event types for the plugin system.

Most of them are the signal the portal uses to open a dialog, so they fire
when the dialog opens, before anything is created or changed.

## Enumeration Members

### CREATE

```ts
CREATE: "create";
```

Triggered when the dialog for creating a new item opens

### RENAME

```ts
RENAME: "rename";
```

Triggered when the rename dialog opens

### ROOM\_CREATE

```ts
ROOM_CREATE: "create_room";
```

Triggered when the dialog for creating a new room opens

### ROOM\_EDIT

```ts
ROOM_EDIT: "edit_room";
```

Triggered when the room editing dialog opens

### CHANGE\_COLUMN

```ts
CHANGE_COLUMN: "change_column";
```

Triggered after a column is shown or hidden in a table view

### CHANGE\_USER\_TYPE

```ts
CHANGE_USER_TYPE: "change_user_type";
```

Triggered when the dialog for changing a user's type opens

### CREATE\_PLUGIN\_FILE

```ts
CREATE_PLUGIN_FILE: "create_plugin_file";
```

Triggered when a plugin opens the create dialog for a file it owns
