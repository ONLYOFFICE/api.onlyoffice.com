# Generate hyperlinks

Generates and inserts hyperlinks instead of text URLs.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    //Use regular expression to find and replace URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const document = Api.GetDocument();
    //Get all paragraphs to update
    const allParagraphs = document.GetAllParagraphs();
    
    allParagraphs.forEach(paragraph => {
        const rawText = paragraph.GetText();
        //Clear all content after getting text
        paragraph.RemoveAllElements();
        
        //Split text by url parts
        const parts = rawText.split(urlRegex);
        
        parts.forEach(part => {
            if (urlRegex.test(part)) {
                //Add hyperlink if regular expression matches the part
                var hyperlinkRun = Api.CreateRun();
                hyperlinkRun.AddText(part);
                paragraph.AddElement(hyperlinkRun);
                hyperlinkRun.AddHyperlink(part);
            } else {
                //Add text if regular expression does not match
                var textRun = Api.CreateRun();
                textRun.AddText(part);
                paragraph.AddElement(textRun);
            }
        });
    });
})();
```

Methods used: [GetDocument](../../../docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [AddHyperlink](../../../docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddHyperlink.md)

## Result

<!-- imgpath -->

![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.png#gh-light-mode-only)![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.dark.png#gh-dark-mode-only)
