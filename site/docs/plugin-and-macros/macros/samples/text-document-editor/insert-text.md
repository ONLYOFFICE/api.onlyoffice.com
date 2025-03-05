# Insert text

Inserts text into the document at the current cursor position.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    var oDocument = Api.GetDocument();
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText("Hello world!");
    oDocument.InsertContent([oParagraph]);
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

![Insert text](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Insert text](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)
