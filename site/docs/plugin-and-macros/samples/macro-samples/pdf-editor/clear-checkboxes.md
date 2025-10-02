---
hide_table_of_contents: true
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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md), [IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)

## Result

![CheckboxUnchecker](/assets/images/plugins/clear-checkboxes.png#gh-light-mode-only)
![CheckboxUnchecker](/assets/images/plugins/clear-checkboxes.dark.png#gh-dark-mode-only)
