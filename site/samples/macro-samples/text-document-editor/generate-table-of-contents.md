# Generate table of contents

Generates a table of contents by scanning the document for headings.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let doc = Api.GetDocument();
    let tocPr = { "ShowPageNums": true, "RightAlgn": true, "LeaderType": "underline", "FormatAsLinks": true, "BuildFrom": { "OutlineLvls": 10 }, "TocStyle": "modern" };
    doc.AddTableOfContents(tocPr);
})();
```

Methods used: [GetDocument](../../../docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md),
[AddTableOfContents](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddTableOfContents.md)

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
