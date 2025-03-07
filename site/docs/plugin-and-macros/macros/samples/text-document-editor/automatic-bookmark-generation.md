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

Methods used: [GetDocument](), [GetAllHeadingParagraphs](), [GetText](), [GetRange](), [AddBookmark]()

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub GenerateBookmarks()
    Dim para As Paragraph
    Dim headingText As String
    Dim bookmarkName As String
    Dim counter As Integer
    counter = 1

    ' Loop through all paragraphs and create bookmarks for headings
    For Each para In ActiveDocument.Paragraphs
        If Left(para.Style, 7) = "Heading" Then
            headingText = Trim(para.Range.Text)
            headingText = Replace(headingText, " ", "_")
            bookmarkName = "Bookmark_" & headingText & "_" & counter
            ActiveDocument.Bookmarks.Add Name:=bookmarkName, Range:=para.Range
            counter = counter + 1
        End If
    Next para
End Sub
```

## Result

<!-- imgpath -->

![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.png#gh-light-mode-only)![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.dark.png#gh-dark-mode-only)
