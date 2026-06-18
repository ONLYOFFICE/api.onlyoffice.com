---
hide_table_of_contents: true
description: Remove specific values from combo box option lists.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Modify list values

Deletes certain list values from all combo boxes that contain a specific key.

```ts
(function removeListValues() {
    let key = "YourKey"; // Change this to your specific key
    let valuesToRemove = ["Option1", "Option2"]; // List of values to remove

    let doc = Api.GetDocument();
    let formFields = doc.GetAllForms();

    for (let i = 0; i < formFields.length; i++) {
        let formField = formFields[i];

        if (formField.GetFormType() === "comboBoxForm" && formField.GetFormKey() === key) {
            let options = formField.GetListValues();
            let newOptions = options.filter(function (option) {
                return valuesToRemove.indexOf(option) === -1;
            });

            formField.SetListValues(newOptions);
        }
    }
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [GetListValues](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetListValues.md), [SetListValues](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetListValues.md)

## Result

<Video src="/assets/video/macros/pdf-editor/modify-list-values" dark />
