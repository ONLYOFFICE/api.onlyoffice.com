# Generate table of contents

Generates a Table of Contents by scanning the document for headings.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
function generateTableOfContents() {
    var document = Api.GetDocument();
    var paragraphs = document.GetAllParagraphs();
    var tocContent = [];

    // Loop through paragraphs to find headings
    for (var i = 0; i < paragraphs.length; i++) {
        var element = paragraphs[i];

        var styleName = element.GetStyle()?.GetName();

        // Check if paragraph is a heading based on its style name
        if (styleName && styleName.toString().match(/Heading [1-6]/)) {
            var headingText = element.GetText();
            var headingLevel = parseInt(styleName.replace("Heading ", ""), 10);
            tocContent.push({ text: headingText, level: headingLevel });
        }
    }

    // Insert Table of Contents at the beginning of the document
    if (tocContent.length > 0) {
        var tocParagraph = Api.CreateParagraph();
        tocParagraph.AddText("Table of Contents");
        tocParagraph.SetBold(true);
        tocParagraph.SetFontSize(32);
        document.InsertContent([tocParagraph]);

        tocContent.forEach(function (entry) {
            var tocEntryParagraph = Api.CreateParagraph();
            tocEntryParagraph.AddText("".padStart(entry.level * 4) + entry.text);
            tocEntryParagraph.SetFontSize(28);
            document.InsertContent([tocEntryParagraph]);
        });
    }
}

(function () {
    var document = Api.GetDocument();
    var tocPr = { "ShowPageNums": true, "RightAlgn": true, "LeaderType": "underline", "FormatAsLinks": true, "BuildFrom": { "OutlineLvls": 10 }, "TocStyle": "modern" };
    document.AddTableOfContents(tocPr);
})();
```

Methods used: GetDocument, GetAllParagraphs, GetText, GetStyle, CreateParagraph, AddText, SetBold, SetFontSize, InsertContent, AddTableOfContents

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub GenerateTableOfContents()
    Dim doc As Document
    Set doc = ActiveDocument

    Dim para As Paragraph
    Dim tocEntries As New Collection
    For Each para In doc.Paragraphs
        If para.Style Like "Heading [1-6]" Then
            tocEntries.Add para.Range.Text
        End If
    Next para

    If tocEntries.Count > 0 Then
        Dim toc As String
        toc = "Table of Contents" & vbCrLf
        Dim entry As Variant
        For Each entry In tocEntries
            toc = toc & entry & vbCrLf
        Next entry
        ' Insert the table of contents at the beginning of the document
        doc.Range.InsertBefore toc
    End If
End Sub
```

## Result

![GenerateTableOfContents](/assets/images/plugins/generate-table-of-contents.png#gh-light-mode-only)![GenerateTableOfContents](/assets/images/plugins/generate-table-of-contents.dark.png#gh-dark-mode-only)
