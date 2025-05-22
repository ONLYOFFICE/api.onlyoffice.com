# Custom header and footer generation

Applies predefined headers and footers to all pages in the document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

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

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetSections](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetSections.md), [RemoveHeader](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/RemoveHeader.md), [RemoveFooter](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/RemoveFooter.md), [GetHeader](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/GetHeader.md), [GetFooter](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/GetFooter.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetJc](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [AddPageNumber](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddPageNumber.md)

## Result

<!-- imgpath -->

![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.png#gh-light-mode-only)![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.dark.png#gh-dark-mode-only)