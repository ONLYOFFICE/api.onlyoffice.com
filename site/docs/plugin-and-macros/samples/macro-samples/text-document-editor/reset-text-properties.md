---
hide_table_of_contents: true
---

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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateTextPr](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTextPr.md), [SetFontSize](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetItalic](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md), [SetHighlight](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md), [SetColor](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md), [SetUnderline](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetUnderline.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [SetTextPr](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetTextPr.md)

## Result

![ResetTextProperties](/assets/images/plugins/reset-text-properties.png#gh-light-mode-only)
![ResetTextProperties](/assets/images/plugins/reset-text-properties.dark.png#gh-dark-mode-only)
