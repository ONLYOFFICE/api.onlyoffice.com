---
sidebar_position: 3
---

# Communication flow

Plugins and the ONLYOFFICE editor communicate through a message-passing bridge - there is no shared memory or direct DOM access between them. This page explains the two directions of communication and the event model that drives it.

## Two directions

### Plugin → Editor (calling methods)

The plugin calls editor API methods using `window.Asc.plugin.executeMethod`:

```javascript
// Insert text at cursor position
window.Asc.plugin.executeMethod("PasteText", ["Hello, World!"]);

// Get currently selected text
window.Asc.plugin.executeMethod("GetSelectedText", [], function (result) {
  console.log("Selected:", result);
});
```

The third argument is an optional callback that receives the return value once the editor has processed the call.

### Editor → Plugin (callbacks and events)

The editor notifies the plugin by calling functions you attach to `window.Asc.plugin`:

```javascript
// Called when the plugin panel opens
window.Asc.plugin.init = function () {
  // Plugin is ready; editor type available via window.Asc.plugin.info.editorType
  console.log("Plugin ready, editor type:", window.Asc.plugin.info.editorType);
};

// Called when a config.json button is clicked
window.Asc.plugin.button = function (id) {
  // id 0 = first button, id -1 = window closed
};

// Called when the cursor position changes in the editor
window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", function () {
  window.Asc.plugin.executeMethod("GetSelectedText", [{}], function (text) {
    document.getElementById("preview").textContent = text || "";
  });
});
```

## Input flow

Data from the user to the editor follows this path:

```
User Action → Plugin UI → JavaScript Handler → executeMethod → Editor
```

Example - inserting text on button click:

```javascript
function insertText() {
  const text = document.getElementById("input").value;
  window.Asc.plugin.executeMethod("PasteText", [text]);
}
```

## Output flow

Data from the editor to the plugin follows this path:

```
Editor Event → API Callback → Plugin Handler → UI Update
```

Example - updating the UI when cursor position changes:

```javascript
window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", function () {
  window.Asc.plugin.executeMethod("GetSelectedText", [{}], function (text) {
    if (text) {
      document.getElementById("preview").textContent = text;
    }
  });
});
```

## Passing data into callCommand

`callCommand` runs a function in the editor's document scope, where your plugin's JavaScript variables are not accessible. Use `Asc.scope` to pass values across the boundary:

```javascript
Asc.scope.text = document.getElementById("input").value;

window.Asc.plugin.callCommand(function () {
  // This runs inside the editor context - Asc.scope is available here
  var oParagraph = Api.CreateParagraph();
  oParagraph.AddText(Asc.scope.text);
  Api.GetDocument().InsertContent([oParagraph]);
}, true); // true = close plugin after execution
```

## Event reference

Key lifecycle and interaction events:

| Event / callback | When it fires |
|---|---|
| `window.Asc.plugin.init()` | Plugin panel is opened |
| `window.Asc.plugin.button(id)` | A config.json button is clicked |
| `window.Asc.plugin.onExternalMouseUp` | User releases the mouse button outside the plugin panel |
| `attachEditorEvent("onTargetPositionChanged", fn)` | Cursor position changes in the editor |
| `attachEditorEvent("onDocumentContentReady", fn)` | Document finishes loading |
| `window.Asc.plugin.onDestroy` | Plugin is closed or destroyed |

## Error handling

Callbacks from `executeMethod` may return `null` or `undefined` on failure:

```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [], function (result) {
  if (result === undefined || result === null) {
    console.error("Could not retrieve selection");
    return;
  }
  processText(result);
});
```

## See also

- [Plugin lifecycle](../../get-started/plugin-lifecycle.md)
- [Interacting with editors](overview.md)
