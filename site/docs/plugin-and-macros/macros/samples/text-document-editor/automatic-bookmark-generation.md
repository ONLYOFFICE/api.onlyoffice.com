# Automatic bookmark generation

Automatically generates bookmarks for all heading paragraphs in the document, using the heading text as the bookmark name.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    try {
        const oDocument = Api.GetDocument();
        const oHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
        let bookmarkCount = 1;

        oHeadingParagraphs.forEach((oParagraph, index) => {
            const headingText = oParagraph.GetText().replace(/\s+/g, "_");
            const bookmarkName = `Bookmark_${headingText}_${bookmarkCount}`;
            let oRange = oParagraph.GetRange();
            oRange.AddBookmark(bookmarkName);
            bookmarkCount++;
        });
    } catch (e) {
        console.error(e);
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [GetRange](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/AddBookmark.md)

## Result

<!-- imgpath -->

![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.png#gh-light-mode-only)![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.dark.png#gh-dark-mode-only)
