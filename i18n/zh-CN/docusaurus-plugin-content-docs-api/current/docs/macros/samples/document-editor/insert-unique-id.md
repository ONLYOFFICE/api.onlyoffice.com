---
hide_table_of_contents: true
---

# 插入唯一 ID

在表单文档中插入唯一 ID。

``` ts
(function()
{
    function generate () {
        let key = '';
        let data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 1; i <= 12; i++) {
            let index = Math.floor(Math.random()
                        * data.length + 1);
            key += data.charAt(index);
        }
        return key;
    }
    let id = generate();
    let doc = Api.GetDocument();
    let paragraph = Api.CreateParagraph();
    paragraph.AddText(id);
    doc.InsertContent([paragraph], { "KeepTextOnly": true });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument), [CreateParagraph](../../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph), [AddText](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText), [InsertContent](../../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent)

## 结果

![Insert id](/assets/images/plugins/insert-id.png#gh-light-mode-only)![Insert id](/assets/images/plugins/insert-id.dark.png#gh-dark-mode-only)
