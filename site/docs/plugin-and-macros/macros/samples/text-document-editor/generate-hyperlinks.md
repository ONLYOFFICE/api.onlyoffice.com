# Generate hyperlinks

Generates and inserts hyperlinks instead of text URLs.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    //Use regular expression to find and replace URLs
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    let doc = Api.GetDocument();
    //Get all paragraphs to update
    let allParagraphs = doc.GetAllParagraphs();

    allParagraphs.forEach(paragraph => {
        let rawText = paragraph.GetText();
        //Clear all content after getting text
        paragraph.RemoveAllElements();

        //Split text by url parts
        let parts = rawText.split(urlRegex);

        parts.forEach(part => {
            if (urlRegex.test(part)) {
                //Add hyperlink if regular expression matches the part
                let hyperlinkRun = Api.CreateRun();
                hyperlinkRun.AddText(part);
                paragraph.AddElement(hyperlinkRun);
                hyperlinkRun.AddHyperlink(part);
            } else {
                //Add text if regular expression does not match
                let textRun = Api.CreateRun();
                textRun.AddText(part);
                paragraph.AddElement(textRun);
            }
        });
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [AddHyperlink](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddHyperlink.md)

## Result

<!-- imgpath -->

![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.png#gh-light-mode-only)![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.dark.png#gh-dark-mode-only)
