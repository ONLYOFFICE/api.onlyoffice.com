---
hide_table_of_contents: true
description: Set a placeholder for combo box fields with a specified key.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Set placeholder

Sets a specific placeholder for all the combo boxes that have a certain key.

```ts
(function () {
    let key = "MyKey";
    let placeholderText = "Placeholder";
    let doc = Api.GetDocument();

    doc.GetAllForms()
        .filter(field => field.GetFormType() === "comboBoxForm" && field.GetFormKey() === key)
        .forEach(field => field.SetPlaceholderText(placeholderText));
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [SetPlaceholderText](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetPlaceholderText.md)

## Result

<Video src="/assets/video/macros/pdf-editor/set-placeholder" dark />
