---
hide_table_of_contents: true
description: Validate and highlight empty optional form fields.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Validate form fields

Highlights empty optional text fields in a document with the specified colors.

```ts
(function () {
    let checkSpecificTip = false;
    let requiredTipText = "Please enter your second address";

    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let formsData = JSON.parse(JSON.stringify(doc.GetFormsData()));

    forms.forEach(form => {
        if (form.GetFormType() === "textForm") {
            let key = form.GetFormKey();
            let required = form.IsRequired();

            let formData = formsData.find(fd => fd.key === key);

            if (formData) {
                let isEmpty = !formData.value || formData.value.trim() === "";
                let tip = form.GetTipText() || "";

                let shouldCheck = !checkSpecificTip || (checkSpecificTip && tip.trim() === requiredTipText.trim());

                if (shouldCheck && isEmpty && !required) {
                    form.SetBorderColor(0, 255, 127); // Spring green border.
                    form.SetBackgroundColor(171, 242, 255); // Light blue background.
                }
            }
        }
    });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormsData](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetFormsData.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [IsRequired](../../../office-api/usage-api/form-api/ApiTextForm/Methods/IsRequired.md), [GetTipText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [SetBorderColor](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetBorderColor.md), [SetBackgroundColor](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetBackgroundColor.md)

## Result

<Video src="/assets/video/macros/pdf-editor/validate-form-fields" dark />
