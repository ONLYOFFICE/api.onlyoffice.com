---
hide_table_of_contents: true
description: Auto-generate bookmarks from document headings.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Automatic bookmark generation

Automatically generates bookmarks for all heading paragraphs in the document, using the heading text as the bookmark name.

```ts
(function () {
    let doc = Api.GetDocument();
    let headingParagraphs = doc.GetAllHeadingParagraphs();
    let bookmarkCounter = 1;

    headingParagraphs.forEach((paragraph, index) => {
        let headingText = paragraph.GetText().replace(/\s+/g, "_");
        let bookmarkName = `Bookmark_${headingText}_${bookmarkCounter}`;
        let range = paragraph.GetRange();
        range.AddBookmark(bookmarkName);
        bookmarkCounter++;
    });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [GetRange](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../office-api/usage-api/document-api/ApiRange/Methods/AddBookmark.md)

## Result

<Video src="/assets/video/macros/document-editor/automatic-bookmark-generation" dark />
