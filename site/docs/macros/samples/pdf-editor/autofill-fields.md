---
hide_table_of_contents: true
description: Auto-fill text fields that share the same placeholder text.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Autofill fields

Automatically fills in all text fields in the document that have the same placeholder or tip text.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let tip = "Tip";

    // Get the first non-empty input from the forms
    let textInput = forms
        .filter(form => form.GetFormType() === "textForm" && form.GetTipText() === tip && form.GetText())
        .map(form => form.GetText())[0] || "";

    // Fill all forms with the specified tip text
    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetTipText() === tip) {
            form.SetText(textInput);
        }
    });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetTipText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## Result

<Video src="/assets/video/macros/pdf-editor/autofill-fields" dark />
