---
hide_table_of_contents: true
description: Generate custom headers and footers for a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Custom header and footer

Applies predefined headers and footers to all pages in the document.

```ts
(function () {
    let doc = Api.GetDocument();
    let sections = doc.GetSections();

    for (let section of sections) {
        // Remove existing headers and footers
        section.RemoveHeader("default");
        section.RemoveFooter("default");

        // Create new header and footer
        let header = section.GetHeader("default", true);
        let footer = section.GetFooter("default", true);

        // Set header content
        let headerPara = header.GetElement(0);
        headerPara.AddText("Your Header Text");
        headerPara.SetJc("center");

        // Set footer content
        let footerPara = footer.GetElement(0);
        footerPara.AddText("Your Footer Text - Page ");
        footerPara.AddPageNumber();
        footerPara.SetJc("center");
    }

    return true;
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetSections](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetSections.md), [RemoveHeader](/docs/office-api/usage-api/document-api/ApiSection/Methods/RemoveHeader.md), [RemoveFooter](/docs/office-api/usage-api/document-api/ApiSection/Methods/RemoveFooter.md), [GetHeader](/docs/office-api/usage-api/document-api/ApiSection/Methods/GetHeader.md), [GetFooter](/docs/office-api/usage-api/document-api/ApiSection/Methods/GetFooter.md), [GetElement](/docs/office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](/docs/office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [SetJc](/docs/office-api/usage-api/document-api/ApiParagraph/Methods/SetJc.md), [AddPageNumber](/docs/office-api/usage-api/document-api/ApiParagraph/Methods/AddPageNumber.md)

## Result

<Video src="/assets/video/macros/document-editor/custom-header-footer" dark />
