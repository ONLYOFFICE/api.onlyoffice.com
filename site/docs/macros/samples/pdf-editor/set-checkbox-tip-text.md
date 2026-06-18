---
hide_table_of_contents: true
description: Set tip text for all checkboxes with a specified key.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Set checkbox tip text

Sets the desired tip text to all checkboxes with a certain key.

```ts
(function () {
  let doc = Api.GetDocument();
  let allForms = doc.GetAllForms(); // Retrieve all form fields.
  let targetKey = "CheckBox10"; // Specify the key of checkboxes to update.
  let newTip = "Please update your marital status."; // New tip text.

  allForms.forEach(function (form) {
    // Check if the form is a checkbox and its key matches the target key.
    if (form.GetFormType() === "checkBoxForm" && form.GetFormKey() === targetKey) {
      form.SetTipText(newTip); // Set the new tip text.
    }
  });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetTipText](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetTipText.md)

## Result

<Video src="/assets/video/macros/pdf-editor/set-checkbox-tip-text" dark />
