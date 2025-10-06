---
hide_table_of_contents: true
---

# Automatic bookmark generation

Automatically generates bookmarks for all heading paragraphs in the document, using the heading text as the bookmark name.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [GetRange](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/AddBookmark.md)

## Result

<!-- imgpath -->

![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.png#gh-light-mode-only)![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.dark.png#gh-dark-mode-only)
