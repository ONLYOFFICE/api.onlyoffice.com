---
hide_table_of_contents: true
description: Set a character limit for text form fields.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Limit number of characters

Restricts the number of characters allowed in text fields whose keys contain a specific keyword.

```ts
(function () {
    // Define a form key and type
    let formKey = "Key";
    let formType = "textForm";
    // Define characters number limit
    let symbolsLimit = 10;
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        if (form.GetFormType() === formType && form.GetFormKey() === formKey) {
            let input = form.GetText();
            // Set a tip text to warn a user
            form.SetTipText("Number of symbols should be less than " + symbolsLimit);
            form.SetCharactersLimit(symbolsLimit);
        }
    }
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetFormKey.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetTipText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetTipText.md), [SetCharactersLimit](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)

## Result

<Video src="/assets/video/macros/pdf-editor/limit-number-of-characters" dark />
