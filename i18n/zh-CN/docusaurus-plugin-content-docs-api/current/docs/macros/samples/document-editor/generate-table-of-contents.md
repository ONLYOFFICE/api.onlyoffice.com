---
hide_table_of_contents: true
description: 根据文档标题生成目录。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 生成目录

通过扫描文档中的标题来生成目录。

```ts
(function () {
    let doc = Api.GetDocument();
    let tocPr = { "ShowPageNums": true, "RightAlgn": true, "LeaderType": "underline", "FormatAsLinks": true, "BuildFrom": { "OutlineLvls": 10 }, "TocStyle": "modern" };
    doc.AddTableOfContents(tocPr);
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md),
[AddTableOfContents](../../../office-api/usage-api/document-api/ApiDocument/Methods/AddTableOfContents.md)

## 参考 Microsoft VBA 宏代码

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

<Video src="/assets/video/macros/document-editor/generate-table-of-contents" dark />
