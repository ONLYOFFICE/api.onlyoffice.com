# Insert unique id

Inserts a unique id into a form document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    function generate () {
        let key = '';
        const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 1; i <= 12; i++) {
            let index = Math.floor(Math.random()
                        * data.length + 1);
            key += data.charAt(index);
        }
        return key;
    }
    const id = generate();
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText(id);
    oDocument.InsertContent([oParagraph], { "KeepTextOnly": true });
})();
```

Methods used: [GetDocument](../../../docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

![Insert id](/assets/images/plugins/insert-id.png#gh-light-mode-only)![Insert id](/assets/images/plugins/insert-id.dark.png#gh-dark-mode-only)
