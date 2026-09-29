---
sidebar_position: 8
---

# Forms mode

Forms mode embeds the Forms UI for a specific Form filling room. Users can browse, fill out, and track forms without leaving your application, and the host page can extend the file/folder context menu with its own custom actions.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-room-id",
});
```

The parameters `frameId` and `src` are required. `id` (the room identifier) is optional — without it, the frame opens whichever room is configured in the portal's own Forms settings; the same applies to `libraryId`. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initForms()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md). It forces `mode` to Forms, forces `noLoader` to `true` (the loading spinner never shows in Forms mode, regardless of that setting), and defaults `showMenu` to `true` (pass `showMenu: false` to hide the side panel).

`navigateSection()`, `setCustomActions()`, and `upload()` only work once the frame has connected — call them from inside `onAppReady` (or later), not right after `initForms()` returns. `setCustomActions()` is Forms-mode-only; `navigateSection()` and `upload()` also work in [Personal mode](./personal-mode.md). Calling any of the three from an incompatible mode rejects the returned promise with `SDKErrorCode.ModeMismatch` — none of them throw synchronously.

`onFileManagerClick` also fires in Forms mode, same as in Manager and Public room mode. See [Events and callbacks](../events-and-callbacks/events-and-callbacks.md) for its payload shape.

`headerOffset` (inline-start padding added to header rows, so a host overlay like a floating side menu doesn't cover the header's own controls) and `headerHeight` (override the header's height to match your app's chrome) are also honored in Forms mode, alongside [Chat](./chat-mode.md) and [Personal](./personal-mode.md).

## Use cases

### Opening a specific section on load

Set `destination` to skip the default "My forms" landing section:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  destination: "completed-forms",
});
```

Available sections: `"my-forms"`, `"in-progress"`, `"completed-forms"`, `"library"`, `"settings"`.

### Navigating between sections at runtime

Use `navigateSection()` on the returned instance instead of reinitializing the frame, and track the active section from the host page with `onNavigate`:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onAppReady: function () {
      document.getElementById("completed-button").onclick = () => {
        docSpace.navigateSection("completed-forms");
      };
    },
    onNavigate: function (data) {
      console.log("Section changed:", data.section);
    },
  },
});
```

### Adding custom context menu actions

Register your own entries in the file/folder context menu with `setCustomActions()`, then handle clicks via `onCustomAction`:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onAppReady: function () {
      docSpace.setCustomActions({
        contextMenu: {
          file: [
            { key: "send-to-crm", label: "Send to CRM", icon: "https://your-app.com/icon.svg" },
            { key: "archive", label: "Archive", section: ["completed-forms"] },
          ],
          folder: [
            { key: "share-folder", label: "Share folder" },
          ],
        },
      });
    },
    onCustomAction: function (data) {
      console.log("Action:", data.action, "Item:", data.item);
    },
  },
});
```

`section` restricts an action to specific Forms sections; omit it to show the action everywhere.

### Uploading a file without the picker dialog

Call `upload()` directly with a `File` object — useful when the file comes from your own drop zone or input element rather than the DocSpace UI. Wait for `onAppReady` before the frame will accept the call. The call has its own fixed 120-second transfer timeout, independent of `methodTimeout` — past that, the promise rejects with `SDKErrorCode.UploadFailed`. On success, the returned promise resolves with the same payload passed to `onUploadSuccess` (`{ fileName, fileSize }`), so you can skip the event handler entirely if you only care about this specific call's outcome; `onUploadProgress` is never emitted for an `upload()`-initiated transfer, only for a native upload through [Uploader mode](./uploader-mode.md)'s own dialog. `onUploadSuccess`/`onUploadError` fire with this narrower payload for an `upload()`-initiated transfer — see [Events and callbacks](../events-and-callbacks/events-and-callbacks.md#event-payloads) for how it compares to Uploader mode's own (much larger) native-dialog payload:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onAppReady: function () {
      document.getElementById("upload-input").addEventListener("change", async function (e) {
        try {
          await docSpace.upload(e.target.files[0]);
        } catch (error) {
          console.error("Upload failed:", error.message);
        }
      });
    },
    onUploadSuccess: function (data) {
      console.log("Uploaded:", data.fileName, data.fileSize);
    },
    onUploadError: function (error) {
      console.error("Upload error:", error);
    },
  },
});
```

The whole file is read into memory before transfer, so validate its size on the host page first — the server-side upload limit is enforced separately and will reject oversized files.

### Restricting the gallery to one forms library

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  libraryId: "your-library-id",
});
```
