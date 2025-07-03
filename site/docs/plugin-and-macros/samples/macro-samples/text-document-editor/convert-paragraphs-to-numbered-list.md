# Convert paragraphs to numbered list

Converts all paragraphs in the document to a numbered list.

```ts
(function () {
    let doc = Api.GetDocument();

    // Retrieve every paragraph
    let allParas = doc.GetAllParagraphs();

    // Define a numbered style
    let numbering = doc.CreateNumbering("numbered");
    let firstLevel = numbering.GetLevel(0);

    // Filter out empty paragraphs
    let parasToNumber = [];
    for (let i = 0; i < allParas.length; i++) {
        let para = allParas[i];
        let txt = para.GetText();

        //Check whether the paragraph is empty
        if (txt && txt.trim().length) {
            parasToNumber.push(para);
        }
    }

    // Apply numbering to each non-empty paragraph
    for (let j = 0; j < parasToNumber.length; j++) {
        parasToNumber[j].SetNumbering(firstLevel);
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [GetLevel](/docs/office-api/usage-api/text-document-api/ApiNumbering/Methods/GetLevel.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md)

## Result

![ParagraphsToNumberedList](/assets/images/plugins/paragraphs-to-numbered-list.png#gh-light-mode-only)
![ParagraphsToNumberedList](/assets/images/plugins/paragraphs-to-numbered-list.dark.png#gh-dark-mode-only)
