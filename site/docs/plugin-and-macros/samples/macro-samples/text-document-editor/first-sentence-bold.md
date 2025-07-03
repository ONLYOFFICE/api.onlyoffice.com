# First sentence bold

Sets the **bold** style property to the first sentence of every paragraph.

```ts
(function () {
    let doc = Api.GetDocument();
    let element = doc.GetElement(0);

    // Get all paragraphs in the document
    let paragraphs = doc.GetAllParagraphs();
    let paragraphCount = 0;

    function findFirstPunctuation(paragraph, punctuationMarks) {
        paragraphCount++
        let firstPos = null;
        for (let mark of punctuationMarks) {
            let results = paragraph.Search(mark);
            if (results.length > 0) {
                let pos = results[0].GetStartPos();
                if (firstPos === null || pos < firstPos) {
                    firstPos = pos;
                }
            }
        }
        return firstPos;
    }

    paragraphs.forEach((paragraph) => {

        let punctuationPos = findFirstPunctuation(paragraph, [".", "!", "?"]);
        if (punctuationPos !== null) {
            let newRange = Api.CreateRange(paragraph, 0, punctuationPos - paragraph.GetRange().GetStartPos());
            newRange.SetBold(true);
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetElement.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [Search](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Search.md), [GetStartPos](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetStartPos.md), [CreateRange](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateRange.md), [GetRange](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md)

## Result

![FirstSentenceBold](/assets/images/plugins/first-sentence-bold.png#gh-light-mode-only)
![FirstSentenceBold](/assets/images/plugins/first-sentence-bold.dark.png#gh-dark-mode-only)
