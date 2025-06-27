# Format word

Searches the document for a specified word and applies a custom style to every occurrence of that word.

```ts
(function () {
    let doc = Api.GetDocument();
    let targetWord = "ONLYOFFICE"; // Word to search and style

    // Define custom styling settings
    let customStyle = {
        font: "Georgia",              // Use SetFontFamily
        size: 16,
        bold: true,
        italic: true,
        color: { r: 255, g: 111, b: 61 }
    };

    let paragraphs = doc.GetAllParagraphs();

    paragraphs.forEach((paragraph) => {
        let results = paragraph.Search(targetWord, false, false); // Case-insensitive, not whole-word only

        results.forEach((range) => {
            if (customStyle.font) range.SetFontFamily(customStyle.font);
            if (customStyle.size) range.SetFontSize(customStyle.size);
            if (customStyle.bold !== undefined) range.SetBold(customStyle.bold);
            if (customStyle.italic !== undefined) range.SetItalic(customStyle.italic);
            if (customStyle.color) {
                let color = customStyle.color;
                range.SetColor(color.r, color.g, color.b);
            }
        });
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [Search](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/Search.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetFontFamily.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetFontSize.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetItalic.md), [SetColor](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetColor.md)

## Result

![FormatWord](/assets/images/plugins/format-word.png#gh-light-mode-only)
![FormatWord](/assets/images/plugins/format-word.dark.png#gh-dark-mode-only)
