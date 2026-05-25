---
hide_table_of_contents: true
description: Remove all drawing objects from all PDF pages.
tags: ["Docs", "Macros", "PDF"]
---

# Remove all drawings

Removes all drawing objects (shapes, charts, images) from every page of the PDF document. Outputs the total number of deleted objects to the console. Useful for cleaning up a document by removing all visual elements in one click.

```ts
(function () {
  const doc = Api.GetDocument();
  const pagesCount = doc.GetPagesCount();
  let totalDeleted = 0;

  // For each page in the document get the drawings and delete them
  for (let i = 0; i < pagesCount; i++) {
    const page = doc.GetPage(i);
    const drawings = page.GetAllDrawings();

    for (let j = 0; j < drawings.length; j++) {
      drawings[j].Delete();
      totalDeleted++;
    }
  }

  // Log the total number of deleted drawings
  console.log(
    "Deleted " + totalDeleted + " drawing(s) from " + pagesCount + " page(s).",
  );
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/pdf-api/Api/Methods/GetDocument.md), [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md), [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), [GetAllDrawings](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllDrawings.md), [Delete](/docs/office-api/usage-api/pdf-api/ApiDrawing/Methods/Delete.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/remove-all-drawings.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/remove-all-drawings.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
