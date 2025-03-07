# Custom header footer generation

Applies predefined headers and footers to all pages in the document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    const oDocument = Api.GetDocument();
    const sections = oDocument.GetSections();

    for (const section of sections) {
        // Remove existing headers and footers
        section.RemoveHeader("default");
        section.RemoveFooter("default");

        // Create new header and footer
        const header = section.GetHeader("default", true);
        const footer = section.GetFooter("default", true);

        // Set header content
        const headerPara = header.GetElement(0);
        headerPara.AddText("Your Header Text");
        headerPara.SetJc("center");

        // Set footer content
        const footerPara = footer.GetElement(0);
        footerPara.AddText("Your Footer Text - Page ");
        footerPara.AddPageNumber();
        footerPara.SetJc("center");
    }

    return true;
})();
```

Methods used: [GetDocument](), [GetSections](), [RemoveHeader](), [RemoveFooter](), [GetHeader](), [GetFooter](), [GetElement](), [AddText](), [SetJc](), [AddPageNumber]()

## Result

<!-- imgpath -->

![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.png#gh-light-mode-only)![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.dark.png#gh-dark-mode-only)