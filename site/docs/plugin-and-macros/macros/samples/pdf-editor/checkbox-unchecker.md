# Checkbox Unchecker

Unchecks all checked checkboxes in the document.

```ts
(function() {
    let document = Api.GetDocument();
    let forms = document.GetAllForms();
  
    // Loop through all form fields and uncheck the checkboxes if checked.
    forms.forEach(function(form) {
      if (form.GetFormType() === "checkBoxForm" && form.IsChecked()) {
        form.SetChecked(false);
      }
    });
  
    console.log("CheckboxForm Unchecker complete.");
  })();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/GetFormType.md), [IsChecked](../../../../office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](../../../../office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/SetChecked.md)

## Result

![CheckboxUnchecker](/assets/images/plugins/checkbox-unchecker.png#gh-light-mode-only)
![CheckboxUnchecker](/assets/images/plugins/checkbox-unchecker.dark.png#gh-dark-mode-only)
