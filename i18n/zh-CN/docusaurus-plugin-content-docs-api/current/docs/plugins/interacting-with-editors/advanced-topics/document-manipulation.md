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

## Insert a table

Tables are inserted using `callCommand` with the Office JS API:

```javascript
window.Asc.plugin.callCommand(function () {
  var oDoc = Api.GetDocument();
  var oTable = Api.CreateTable(3, 4);
  oDoc.InsertContent([oTable]);
}, false);
```

## Insert an image from URL

Images are inserted using `callCommand` with the Office JS API:

```javascript
Asc.scope.imageUrl = "https://example.com/image.png";

window.Asc.plugin.callCommand(function () {
  var oDoc = Api.GetDocument();
  var oParagraph = Api.CreateParagraph();
  var oImage = Api.CreateImage(Asc.scope.imageUrl, 100 * 36000, 60 * 36000);
  oParagraph.AddDrawing(oImage);
  oDoc.InsertContent([oParagraph]);
}, false);
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
