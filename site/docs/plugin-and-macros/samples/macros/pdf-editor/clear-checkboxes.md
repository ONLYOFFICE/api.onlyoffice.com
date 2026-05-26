---
hide_table_of_contents: true
description: Clear all checkboxes in a PDF form.
tags: ["Docs", "Macros", "PDF"]
---

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

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md), [IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/clear-checkboxes.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/clear-checkboxes.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
