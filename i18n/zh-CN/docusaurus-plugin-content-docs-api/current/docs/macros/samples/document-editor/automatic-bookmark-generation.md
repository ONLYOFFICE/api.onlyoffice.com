---
hide_table_of_contents: true
description: 根据文档标题自动生成书签。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 自动生成书签

自动为文档中的所有标题段落生成书签，并使用标题文本作为书签名称。

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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [GetRange](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../office-api/usage-api/document-api/ApiRange/Methods/AddBookmark.md)

## 结果

<Video src="/assets/video/macros/document-editor/automatic-bookmark-generation" dark />
