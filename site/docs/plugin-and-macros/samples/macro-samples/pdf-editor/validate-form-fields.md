# Validate form fields

Highlights empty or unrequired text fields in a document with desired colors.

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

Methods used: [GetDocument](/site/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/site/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormsData](/site/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsData.md), [GetFormType](/site/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/site/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [IsRequired](/site/docs/office-api/usage-api/form-api/ApiTextForm/Methods/IsRequired.md), [GetTipText](/site/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [SetBorderColor](/site/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetBorderColor.md), [SetBackgroundColor](/site/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetBackgroundColor.md)

## Result

![ValidateFormFields](/assets/images/plugins/validate-form-fields.png#gh-light-mode-only)
![ValidateFormFields](/assets/images/plugins/validate-form-fields.dark.png#gh-dark-mode-only)
