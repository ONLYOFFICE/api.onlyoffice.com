## Description

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

Methods used: GetDocument, GetAllParagraphs, GetText, RemoveAllElements, CreateRun, AddText, AddElement, AddHyperlink

## Result

<!-- imgpath -->

![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.png)