---
sidebar_position: 2
---

# Document manipulation

This page covers common patterns for reading and modifying document content programmatically.

## Insert content at cursor

```javascript
// Insert plain text
window.Asc.plugin.executeMethod("PasteText", ["Hello, world!"]);

// Insert HTML
window.Asc.plugin.executeMethod("PasteHtml", ["<p>Hello, <b>world</b>!</p>"]);
```

## Get document information

```javascript
window.Asc.plugin.executeMethod("GetDocumentInfo", [], function (info) {
  console.log("Doc info:", info);
});
```

## Insert a table

```javascript
window.Asc.plugin.executeMethod("InsertTable", [{ Rows: 3, Cols: 4 }]);
```

## Insert an image from URL

```javascript
window.Asc.plugin.executeMethod("InsertImage", {
  src: "https://example.com/image.png",
});
```

## Working with content controls

Content controls let you create structured, editable regions:

```javascript
// Add a tagged content control
window.Asc.plugin.executeMethod("AddContentControl", [
  1, // type: 1 = richText
  { Tag: "myField", Lock: 0 },
]);

// Get all content controls
window.Asc.plugin.executeMethod("GetAllContentControls", [], function (controls) {
  controls.forEach((ctrl) => console.log(ctrl.Tag, ctrl.InternalId));
});
```

## See also

- [Text Document API](../overview/how-to-call-methods.md)
- [Working with selections](working-with-selections.md)
