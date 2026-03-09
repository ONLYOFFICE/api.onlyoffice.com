---
sidebar_position: 2
---

# Comparison of embedding modes

The DocSpace JavaScript SDK provides several initialization modes, each producing a distinct UI and behavior inside the embedded frame. This page compares all available modes to help you choose the right one for your integration.

## Comparison table

| Mode | SDK method | UI shown to user | User can browse | User can edit | Requires file/room ID | Auth required |
| ------ | ----------- | ----------------- | ------ | -------- | ------ | ------ |
| Frame | `initFrame()` | Full file and room manager | Yes | Yes | No | Yes |
| Manager | `initManager()` | Full file and room manager | Yes | Yes | No | Yes |
| Viewer | `initViewer()` | Read-only document preview | No | No | Yes (file) | Yes |
| Editor | `initEditor()` | Document editor | No | Yes | Yes (file) | Yes |
| Room selector | `initRoomSelector()` | Room picker dialog | Rooms only | No | No | Yes |
| File selector | `initFileSelector()` | File picker dialog | Yes | No | No | Yes |
| System | `initSystem()` | None (blank/hidden frame) | N/A | N/A | N/A | Yes |

## Mode descriptions

### initFrame()

Initializes the SDK frame in [`manager`](#initmanager) mode by default, but the mode can be changed later using the `mode` parameter.

```javascript
const docSpace = DocSpace.SDK.initFrame({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showMenu: true,
});
```

**Typical use cases:** When dynamic mode switching is needed.

---

### initManager()

Embeds the full DocSpace interface, including all rooms, folders, files, and settings navigation. This is the most complete embedding mode and gives users an entire DocSpace workspace inside your application.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showMenu: true,
  showFilter: true,
  withBreadCrumbs: true,
});
```

**Typical use cases:** SaaS dashboards needing built-in document management, intranet portals, white-labelled products built on top of DocSpace, etc.

---

### initViewer()

Opens a specific file in the ONLYOFFICE document editor in **read-only mode**. Editing is disabled. Requires a file ID to be passed in the configuration.

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
});
```

**Typical use cases:** Internal knowledge bases displaying policy documents, e-learning platforms showing course materials, legal portals for reviewing contracts, etc.

---

### initEditor()

This mode opens a specific file directly in the ONLYOFFICE document editor. Users can write, edit, comment, and co-author in real time. Requires a file ID to be passed in the configuration.

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {},
});
```

**Typical use cases:** Client portals for reviewing and editing proposals, contract management tools, collaborative academic platforms, etc.

---

### initRoomSelector()

Displays an interface listing available DocSpace rooms. When the user selects a room and confirms, the SDK fires `onSelectCallback` with the room data. No full file manager is shown — only the selection UI.

```javascript
const docSpace = DocSpace.SDK.initRoomSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {},
});
```

**Typical use cases:** Project management tools that link projects to DocSpace rooms, CRM systems associating client records with document rooms.

---

### initFileSelector()

This mode integrates a file selector for browsing from a list of files.

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  withBreadCrumbs: true,
  withSearch: true,
  events: {
    onSelectCallback: function (file) {

      //function body
    },
  },
});
```

**Typical use cases:** Helpdesk systems, email clients with DocSpace file attachments, etc.

---

### initSystem()

Initializes a blank frame with no visible UI. This mode can be used for making programmatic SDK calls in the background, without displaying anything to the user.

```javascript
const docSpace = DocSpace.SDK.initSystem({
  frameId: "ds-system",
  src: "https://your-docspace.com",
  events: {
    onAppReady: async function () {
      const frame = DocSpace.SDK.frames["ds-system"];

      // background operations
      await frame.createRoom({ title: "New Project Room" });
      frame.destroyFrame();
    },
  },
});
```

**Typical use cases:** Admin operations, backend triggered workflows.

---

<!-- ## Learn more in detail about each mode

- [Manager mode](./manager.md)
- [Editor mode](./editor.md)
- [Viewer mode](./viewer.md)
- [Room selector mode](./room-selector.md)
- [File selector mode](./file-selector.md)
- [System mode](./system.md) -->
