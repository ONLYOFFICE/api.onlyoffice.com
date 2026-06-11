---
hide_table_of_contents: true
description: Mask credit card numbers showing only first and last digits.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Mask card numbers

Applies the mask to all forms with the specified form key to hide card numbers.

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        if(form.GetFormKey() == "CardNumber") {
            let input = form.GetText();
            //Keep the first 4 characters and the last 2 characters
            let firstPart = input.slice(0, 4);
            let lastPart = input.slice(-2);
            //Create a middle part with asterisks
            let maskedPart = '*'.repeat(10);
            //Set masked string
            let result = firstPart + maskedPart + lastPart;
            form.SetText(result);
        }
    });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../office-api/usage-api/document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../office-api/usage-api/document-api/ApiFormBase/Methods/GetText.md), [SetText](../../../office-api/usage-api/document-api/ApiTextForm/Methods/SetText.md)

## Result

<Video src="/assets/video/macros/pdf-editor/mask-card-numbers" dark />
