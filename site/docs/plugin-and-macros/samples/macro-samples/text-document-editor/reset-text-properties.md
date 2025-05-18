# Reset Text Properties

This macro resets the text properties of all the paragraphs in a document to the default settings.

```ts
(function () {
    let doc = Api.GetDocument();

    // Create a new with default settings
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

    console.log("end");
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateTextPr](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateTextPr.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetFontSize.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetFontFamily.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetItalic.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetHighlight.md), [SetColor](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetColor.md), [SetUnderline](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetUnderline.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md), [SetTextPr](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetTextPr.md)

## Result

![ResetTextProperties](/assets/images/plugins/reset-text-properties.png#gh-light-mode-only)
![ResetTextProperties](/assets/images/plugins/reset-text-properties.dark.png#gh-dark-mode-only)

