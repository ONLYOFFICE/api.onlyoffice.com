---
sidebar_position: 4
---

# Performance considerations

Plugin performance affects the editor experience directly — a slow plugin makes the whole editor feel sluggish. This page covers the key areas where plugins commonly run into performance problems and how to avoid them.

## Fast initialization

The `init` function runs when the plugin panel opens. Keep it short — defer anything that doesn't need to happen immediately:

```javascript
window.Asc.plugin.init = function (data) {
  // Fast: set up the UI skeleton
  setupUI();

  // Defer: load data, call external APIs, do heavy computation
  setTimeout(function () {
    loadData();
  }, 0);
};
```

Avoid synchronous network requests and large DOM builds in `init`.

## Efficient DOM updates

Batch DOM reads and writes — alternating between the two forces the browser to recalculate layout repeatedly:

```javascript
// Bad — interleaves reads and writes
items.forEach(function (item) {
  var height = element.offsetHeight; // read — forces layout
  element.style.height = height + 10 + "px"; // write
});

// Better — read all first, then write all
var heights = items.map(function (item) {
  return item.offsetHeight;
});
heights.forEach(function (h, i) {
  items[i].style.height = h + 10 + "px";
});
```

## Debounce frequent events

`onSelectionChanged` and similar editor events can fire many times per second. Debounce any expensive handler:

```javascript
var debounceTimer;

window.Asc.plugin.onSelectionChanged = function (selection) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function () {
    updatePreview(selection);
  }, 150);
};
```

## Memory management

Clean up timers, intervals, and event listeners when the plugin closes. Leaving them running wastes memory and can cause unexpected behavior if the plugin is reopened:

```javascript
var updateInterval;

window.Asc.plugin.init = function () {
  updateInterval = setInterval(pollStatus, 5000);
  document.addEventListener("click", handleClick);
};

window.Asc.plugin.onDestroy = function () {
  clearInterval(updateInterval);
  document.removeEventListener("click", handleClick);
};
```

Also handle the close button (button id `-1`):

```javascript
window.Asc.plugin.button = function (id) {
  if (id === -1) {
    clearInterval(updateInterval);
  }
};
```

## External dependencies

Large JavaScript libraries increase plugin load time. Before adding a dependency:

- Check whether the ONLYOFFICE plugin SDK already covers the need
- Use a CDN with a long cache TTL rather than bundling the library into your plugin archive
- Import only the specific module you need rather than an entire library

```html
<!-- Instead of loading a 200 KB library for one utility function,
     consider a purpose-built micro-library or writing the function directly -->
<script src="https://cdn.example.com/specific-module.min.js"></script>
```

## Minimize executeMethod calls

Each `executeMethod` call crosses the iframe boundary and involves serialization. Batch operations where possible:

```javascript
// Instead of calling executeMethod inside a loop:
items.forEach(function (item) {
  window.Asc.plugin.executeMethod("PasteText", [item]); // many round trips
});

// Build the full content and call once:
var combined = items.join("\n");
window.Asc.plugin.executeMethod("PasteText", [combined]);
```

## callCommand vs executeMethod

`callCommand` runs code inside the editor's document scope in a single pass, which is more efficient than multiple `executeMethod` calls for bulk document operations:

```javascript
// Efficient: one callCommand builds the entire content
Asc.scope.rows = tableData;
window.Asc.plugin.callCommand(function () {
  var oDoc = Api.GetDocument();
  Asc.scope.rows.forEach(function (row) {
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText(row.text);
    oDoc.InsertContent([oParagraph]);
  });
});
```

## See also

- [Communication flow](communication-flow.md) — understanding the API bridge overhead
- [Plugin lifecycle](../getting-started/plugin-lifecycle.md) — `init`, `onDestroy`, and the full lifecycle
