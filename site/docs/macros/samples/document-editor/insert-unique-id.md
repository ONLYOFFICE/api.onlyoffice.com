---
hide_table_of_contents: true
description: Insert a unique ID into the document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Insert unique id

Inserts a unique id into a form document.

```ts
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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## Result

<Video src="/assets/video/macros/document-editor/insert-unique-id" dark />
