---
sidebar_position: 3
---

# Event handling patterns

The plugin–editor communication model is event-driven. This page covers patterns for attaching, managing, and cleaning up event listeners.

## Basic event attachment

```javascript
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", function () {
  console.log("Document is ready");
});
```

## One-time handler

For events you only need to respond to once:

```javascript
function onceReady() {
  window.Asc.plugin.detachEvent("onDocumentContentReady", onceReady);
  // do work
}
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", onceReady);
```

## Debouncing frequent events

Some events (like selection change) fire rapidly. Debounce to avoid excessive processing:

```javascript
let debounceTimer;

window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", function () {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    updatePluginUI();
  }, 150);
});
```

## Cleaning up on destroy

Always detach event listeners when the plugin is closed to avoid memory leaks:

```javascript
window.Asc.plugin.onDestroy = function () {
  window.Asc.plugin.detachEvent("onTargetPositionChanged", myHandler);
  clearTimeout(debounceTimer);
};
```

## Common events reference

| Event | Fires when |
|-------|-----------|
| `onDocumentContentReady` | Document finishes loading |
| `onTargetPositionChanged` | Cursor position or selection changes |
| `onChangeContentControl` | A content control in the document is changed |
| `onThemeChanged` | Editor theme switches |
| `onExternalMouseUp` | User clicks outside the plugin |

For a full list see the API reference for your editor type.

## See also

- [How to attach events](../overview/how-to-attach-events.md)
- [Plugin lifecycle](../../fundamentals/getting-started/plugin-lifecycle.md)
