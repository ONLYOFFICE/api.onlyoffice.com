Description

Inserts a unique id into a form document.

```
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

Methods used: [GetDocument](/officeapi/textdocumentapi/api/getdocument), [CreateParagraph](/officeapi/textdocumentapi/api/createparagraph), [AddText](/officeapi/textdocumentapi/apiparagraph/addtext), [InsertContent](/officeapi/textdocumentapi/apidocument/insertcontent)

Result

![Insert id](/content/img/plugins/insert_id.png)
