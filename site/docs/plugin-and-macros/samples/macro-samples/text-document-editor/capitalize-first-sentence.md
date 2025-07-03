# Capitalize first sentence

Capitalizes the first letter of the first word in every paragraph.

```ts
(function () {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();

    paragraphs.forEach((paragraph) => {
        let paraText = paragraph.GetText();
        if (!paraText) return;

        let pos = 0;
        while (pos < paraText.length && /\s/.test(paraText[pos])) pos++;

        if (pos < paraText.length) {
            let range = paragraph.GetRange();
            let startPos = range.GetStartPos() + pos;
            let charRange = paragraph.GetRange();
            charRange.SetStartPos(startPos);
            charRange.SetEndPos(startPos + 1);
            charRange.SetCaps(true);
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [GetRange](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [GetStartPos](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetStartPos.md), [SetStartPos](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetStartPos.md), [SetEndPos](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetEndPos.md), [SetCaps](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetCaps.md)

## Result

![CapitalizeFirstSentence](/assets/images/plugins/capitalize-first-sentence.png#gh-light-mode-only)
![CapitalizeFirstSentence](/assets/images/plugins/capitalize-first-sentence.dark.png#gh-dark-mode-only)
