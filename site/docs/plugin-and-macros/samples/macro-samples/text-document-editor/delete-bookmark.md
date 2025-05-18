# Delete Bookmark

This macro searches for bookmarks containing a specific word in their text and deletes them from the document.

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
            console.log("detected")
            doc.DeleteBookmark(bookmarkName);
        }
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllBookmarksNames](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [GetBookmark](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetBookmark.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [DeleteBookmark](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/DeleteBookmark.md)

## Result

![DeleteBookmark](/assets/images/plugins/delete-bookmark.png#gh-light-mode-only)
![DeleteBookmark](/assets/images/plugins/delete-bookmark.dark.png#gh-dark-mode-only)

