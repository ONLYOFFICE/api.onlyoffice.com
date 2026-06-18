---
hide_table_of_contents: true
description: Clear all checkboxes in a PDF form.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Clear checkboxes

Clears all checkboxes in the document.

```ts
(function() {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
  
    // Loop through all form fields and uncheck the checkboxes if checked.
    forms.forEach(function(form) {
      if (form.GetFormType() === "checkBoxForm" && form.IsChecked()) {
        form.SetChecked(false);
      }
    });
  })();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md), [IsChecked](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)

## Result

<Video src="/assets/video/macros/pdf-editor/clear-checkboxes" dark />
