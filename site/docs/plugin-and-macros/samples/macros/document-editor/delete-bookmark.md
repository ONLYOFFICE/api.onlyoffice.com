---
hide_table_of_contents: true
description: Delete a specified bookmark from a document.
tags: ["Docs", "Macros", "Documents"]
---

# Delete bookmark

Searches for bookmarks containing a specific word in their text and deletes them from the document.

```ts
(function () {
    let textToRemove = "test";
    let caseSensitive = false; // Set this to true to enable case sensitivity
    let doc = Api.GetDocument();
    let bookmarkNames = doc.GetAllBookmarksNames();

    for (let i = 0; i < bookmarkNames.length; i++) {
        let bookmarkName = bookmarkNames[i];
        let bookmark = doc.GetBookmark(bookmarkName);
        let bookmarkText = bookmark.GetText();
        let textToCompare = caseSensitive
            ? bookmarkText
            : bookmarkText.toLowerCase();

        if (textToCompare.includes(textToRemove)) {
            doc.DeleteBookmark(bookmarkName);
        }
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllBookmarksNames](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [GetBookmark](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetBookmark.md), [GetText](/docs/office-api/usage-api/document-api/ApiBookmark/Methods/GetText.md), [DeleteBookmark](/docs/office-api/usage-api/document-api/ApiDocument/Methods/DeleteBookmark.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/delete-bookmark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/delete-bookmark.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
