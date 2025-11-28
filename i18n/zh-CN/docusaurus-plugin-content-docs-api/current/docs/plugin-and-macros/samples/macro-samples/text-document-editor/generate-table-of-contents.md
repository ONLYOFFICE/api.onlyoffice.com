# 生成目录

通过扫描文档中的标题来生成目录。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let doc = Api.GetDocument();
    let tocPr = { "ShowPageNums": true, "RightAlgn": true, "LeaderType": "underline", "FormatAsLinks": true, "BuildFrom": { "OutlineLvls": 10 }, "TocStyle": "modern" };
    doc.AddTableOfContents(tocPr);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md),
[AddTableOfContents](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/AddTableOfContents.md)

## 参考 Microsoft VBA 宏代码

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
        ' 将目录插入到文档开头
        doc.Range.InsertBefore toc
    End If
End Sub
```

## 结果

![GenerateTableOfContents](/assets/images/plugins/generate-table-of-contents.png#gh-light-mode-only)![GenerateTableOfContents](/assets/images/plugins/generate-table-of-contents.dark.png#gh-dark-mode-only)
