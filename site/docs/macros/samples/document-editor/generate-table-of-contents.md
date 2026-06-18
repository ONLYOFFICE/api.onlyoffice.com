---
hide_table_of_contents: true
description: Generate a table of contents from document headings.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Generate table of contents

Generates a table of contents by scanning the document for headings.

```ts
(function () {
    let doc = Api.GetDocument();
    let tocPr = { "ShowPageNums": true, "RightAlgn": true, "LeaderType": "underline", "FormatAsLinks": true, "BuildFrom": { "OutlineLvls": 10 }, "TocStyle": "modern" };
    doc.AddTableOfContents(tocPr);
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md),
[AddTableOfContents](../../../office-api/usage-api/document-api/ApiDocument/Methods/AddTableOfContents.md)

## Reference Microsoft VBA macro code

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

<Video src="/assets/video/macros/document-editor/generate-table-of-contents" dark />
