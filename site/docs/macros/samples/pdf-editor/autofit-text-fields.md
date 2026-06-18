---
hide_table_of_contents: true
description: Enable auto-fit for all text form fields.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Autofit text fields

Autofits all the text fields in the document.

```ts
(function () {
    let doc = Api.GetDocument();
    let width = 6 * 240;
    let height = 2 * 240;
    // Set AutoFit property to true for all text fields
    doc.GetAllForms()
        .filter(form => form.GetFormType() === "textForm")
        .forEach(form => {
            form.ToFixed(width, height);
            form.SetAutoFit(true);
        });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [ToFixed](../../../office-api/usage-api/form-api/ApiTextForm/Methods/ToFixed.md), [SetAutoFit](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetAutoFit.md)

## Result

<Video src="/assets/video/macros/pdf-editor/autofit-text-fields" dark />
