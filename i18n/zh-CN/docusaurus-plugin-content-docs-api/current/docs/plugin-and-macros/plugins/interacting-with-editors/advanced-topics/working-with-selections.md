---
sidebar_position: 1
---

# Working with selections

Selections are one of the most common interaction points between a plugin and the editor. This page covers how to read and modify the current selection.

## Get selected text

```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [{ Numbering: false, Math: false }], function (result) {
  console.log("Selected text:", result);
});
```

## Get selection as HTML

```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [{ Numbering: false, Math: false, ReturnContentAs: "html" }], function (result) {
  console.log("Selection HTML:", result);
});
```

## Replace selected text

```javascript
window.Asc.plugin.executeMethod("PasteText", ["Replacement text"]);
```

## Replace selection with HTML

```javascript
window.Asc.plugin.executeMethod("PasteHtml", ["<b>Bold replacement</b>"]);
```

## Selection change event

React to the user changing their selection:

```javascript
window.Asc.plugin.attachEvent("onChangeContentControl", function () {
  // Selection or content changed
});
```

## See also

- [How to attach events](../overview/how-to-attach-events.md)
- [How to call methods](../overview/how-to-call-methods.md)
