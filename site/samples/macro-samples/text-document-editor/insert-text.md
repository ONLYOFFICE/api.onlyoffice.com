# Insert text

Inserts text into the document at the current cursor position.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let doc = Api.GetDocument();
    let paragraph = Api.CreateParagraph();
    paragraph.AddText("Hello world!");
    doc.InsertContent([paragraph]);
})();
```

Methods used: [GetDocument](../../../docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

![Insert text](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Insert text](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)
