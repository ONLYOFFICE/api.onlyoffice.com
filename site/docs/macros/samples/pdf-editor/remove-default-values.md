---
hide_table_of_contents: true
description: Clear specific default values from text form fields.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Remove default values

Automatically removes a specific default value from all text fields in the entire document.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [Clear](../../../office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## Result

<Video src="/assets/video/macros/pdf-editor/remove-default-values" dark />
