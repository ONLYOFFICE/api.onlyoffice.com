---
hide_table_of_contents: true
description: Reset text formatting to default properties.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Reset text properties

Resets the text properties of all the paragraphs in a document to the default settings.

```ts
(function () {
    let doc = Api.GetDocument();

    // Create a new text properties object with default settings
    let defaultTextPr = Api.CreateTextPr();
    defaultTextPr.SetFontSize(24);
    defaultTextPr.SetFontFamily("Arial");
    defaultTextPr.SetBold(false);
    defaultTextPr.SetItalic(false);
    defaultTextPr.SetHighlight("white");
    defaultTextPr.SetColor("black");
    defaultTextPr.SetUnderline(false);

    let paragraphs = doc.GetAllParagraphs();

    for (let i = 0; i < paragraphs.length; i++) {
        // Apply text properties
        paragraphs[i].SetTextPr(defaultTextPr);
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [CreateTextPr](/docs/office-api/usage-api/document-api/Api/Methods/CreateTextPr.md), [SetFontSize](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetFontSize.md), [SetFontFamily](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetFontFamily.md), [SetBold](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetBold.md), [SetItalic](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetItalic.md), [SetHighlight](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight.md), [SetColor](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetColor.md), [SetUnderline](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetUnderline.md), [GetAllParagraphs](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetAllParagraphs.md), [SetTextPr](/docs/office-api/usage-api/document-api/ApiParagraph/Methods/SetTextPr.md)

## Result

<Video src="/assets/video/macros/document-editor/reset-text-properties" dark />
